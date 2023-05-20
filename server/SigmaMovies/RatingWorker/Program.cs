using Microsoft.Extensions.Logging;
using RatingWorker;
using Serilog;
using SigmaMovies.Persistence.Context;

var configuration = new ConfigurationBuilder()
    .SetBasePath(AppContext.BaseDirectory)
    .AddJsonFile("appsettings.json")
    .Build();

Log.Logger = new LoggerConfiguration()
    .ReadFrom.Configuration(configuration)
    .CreateLogger();

try
{
    await CreateHostBuilder(args).Build().RunAsync();
}
catch (Exception ex)
{
    Log.Fatal(ex, "Application failed");
}
finally
{
    await Log.CloseAndFlushAsync();
}

static IHostBuilder CreateHostBuilder(string[] args) =>
    Host.CreateDefaultBuilder(args)
    .UseWindowsService()
    .ConfigureServices((hostContext, services) =>
    {
        services.Configure<ConnectionStrings>(hostContext.Configuration.GetSection(nameof(ConnectionStrings)));
        services.AddScoped<BaseRepository<Event>, EventRepository>();
        services.AddScoped<BaseRepository<UserTicket>, UserTicketRepository>();
        services.AddScoped<IEventService, EventService>();
        services.AddScoped<IUserService, UserService>();
        services.AddScoped<IRoleService, RoleService>();
        services.AddScoped<IUserTicketService, UserTicketService>();
        services.AddScoped<IEventSetupService, EventSetupService>();

        services.AddScoped<IEventRepository, EventRepository>();
        services.AddScoped<IUserRepository, UserRepository>();
        services.AddScoped<IRoleRepository, RoleRepository>();
        services.AddScoped<IUserTicketRepository, UserTicketRepository>();
        services.AddScoped<IEventSetupRepository, EventSetupRepository>();


        services.AddDbContext<SigmaMoviesContext>(options => options.UseSqlServer(hostContext.Configuration.GetConnectionString(nameof(ConnectionStrings.DefaultConnection))));

        services.AddHostedService<Worker>();
    })
    .UseSerilog();