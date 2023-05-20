using FluentValidation;
using SigmaMovies.Application.Actors.Requests;

namespace SigmaMovies.API.Infrastructure.Validators
{
    public class ActorValidator : AbstractValidator<ActorRequestModel>
    {
        public ActorValidator() {
            RuleFor(x => x.Name)
                    .NotEmpty().WithMessage("Actor's name must not be empty")
                    .MaximumLength(100).WithMessage("Actor's name length exceeded the limit");
        }
    }
}
