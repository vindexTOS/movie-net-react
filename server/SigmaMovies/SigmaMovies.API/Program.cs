using Microsoft.EntityFrameworkCore;
using SigmaMovies.API.Infrastructure.Extensions;
using SigmaMovies.Persistence;
using SigmaMovies.Persistence.Context;
using System.Reflection;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//builder.Services.AddTokenAuthentication(builder.Configuration.GetSection(nameof(JWTConfiguration)).GetSection(nameof(JWTConfiguration.Secret)).Value);

builder.Services.AddServices();
builder.Services.Configure<ConnectionStrings>(builder.Configuration.GetSection(nameof(ConnectionStrings)));
//builder.Services.Configure<JWTConfiguration>(builder.Configuration.GetSection(nameof(JWTConfiguration)));


//builder.Services.AddFluentValidationAutoValidation().AddFluentValidationClientsideAdapters();
//builder.Services.AddValidatorsFromAssembly(Assembly.GetExecutingAssembly());

builder.Services.AddDbContext<SigmaMoviesContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString(nameof(ConnectionStrings.DefaultConnection))));
builder.Services.AddScoped<DbContext, SigmaMoviesContext>();

//builder.Logging.ClearProviders();
//Log.Logger = new LoggerConfiguration().ReadFrom.Configuration(builder.Configuration).CreateLogger();

//builder.Host.UseSerilog();
//builder.Services.AddSwaggerExamplesFromAssemblies(Assembly.GetExecutingAssembly());
var app = builder.Build();

//app.UseMiddleware<ExceptionHandlingMiddleware>();
//app.UseMiddleware<RequestAndResponseLoggingMiddleware>();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();


//try
//{
//    Log.Information("Starting...");
//    app.Run();
//}
//catch (Exception ex)
//{
//    Log.Fatal(ex, "Host terminated");
//}
//finally
//{
//    Log.CloseAndFlush();
//}