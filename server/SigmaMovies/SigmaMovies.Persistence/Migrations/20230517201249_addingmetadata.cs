using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SigmaMovies.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class addingmetadata : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Metadata_Genre",
                table: "Movies",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Metadata_Hr",
                table: "Movies",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "Metadata_Year",
                table: "Movies",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Metadata_Genre",
                table: "Movies");

            migrationBuilder.DropColumn(
                name: "Metadata_Hr",
                table: "Movies");

            migrationBuilder.DropColumn(
                name: "Metadata_Year",
                table: "Movies");
        }
    }
}
