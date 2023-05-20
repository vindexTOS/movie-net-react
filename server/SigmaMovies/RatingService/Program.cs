using Quartz;
using RatingService;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.DependencyInjection;
using SigmaMovies.Application;
using SigmaMovies.Infrastructure.UOW;
using SigmaMovies.Persistence.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using SigmaMovies.Persistence;
using Microsoft.Extensions.Logging;

internal class Program
{
    private static async Task Main(string[] args)
    {
        var host = Host.CreateDefaultBuilder(args).ConfigureServices((hostContext, services) =>
        {
            services.AddDbContext<SigmaMoviesContext>(options =>
            {
                options.UseSqlServer(hostContext.Configuration.GetConnectionString(nameof(ConnectionStrings.DefaultConnection)));
                options.UseLoggerFactory(LoggerFactory.Create(builder => builder.ClearProviders()));
            });


            // Add the required Quartz.NET services
            services.AddQuartz(opt =>
            {
                opt.UseMicrosoftDependencyInjectionJobFactory();
                if (bool.Parse(hostContext.Configuration["Quartz:RunJobsOnStart:MovieJob"]))
                {
                    var jobKey = new JobKey("getMoviez");
                    opt.AddJob<MoviesJob>(options => options.WithIdentity(jobKey));
                    opt.AddTrigger(options =>
                    {
                        options.ForJob(jobKey)
                        .WithIdentity("getMoviez-trigger")
                         .StartNow()
                         .WithSimpleSchedule(x => x
                         .RepeatForever())
                        .WithCronSchedule(hostContext.Configuration["Quartz:CronSchedules:MovieJob"]);
                    });
                }
            });
            // Add the Quartz.NET hosted service
            services.AddQuartzHostedService(
                q => q.WaitForJobsToComplete = true);
            // other config
            services.AddScoped<IUnitOfWork, UnitOfWork>();
        })
            .Build();
        using var scope = host.Services.CreateScope();
        var dbContext = scope.ServiceProvider.GetService<SigmaMoviesContext>();
        await host.RunAsync();


    }

}