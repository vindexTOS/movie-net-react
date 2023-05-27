using Microsoft.Extensions.Logging;
using Quartz;
using SigmaMovies.Application;
using SigmaMovies.Application.Movies.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RatingService
{
    [DisallowConcurrentExecution]
    public class MoviesJob : IJob
    {
        private readonly IUnitOfWork _unitOfWork;

        public MoviesJob(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task Execute(IJobExecutionContext context)
        {
            var cancellationToken = new CancellationToken();

            var Movies = await _unitOfWork.Movie.GetAllMovies(cancellationToken);
            foreach (var item in Movies)
            {
                await Console.Out.WriteLineAsync(item.Title);
            }
            await Console.Out.WriteLineAsync("All movies have been shown");
        }
    }
}
