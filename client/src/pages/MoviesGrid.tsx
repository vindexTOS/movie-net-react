import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../components/MovieCard'
import { movieDataType } from '../assets/dummydata/data'
const MoviesGrid = () => {
  const movieData = useSelector((state: any) => state.data.movieData)
  const style = {
    main: `gridSystem gap-20 w-[100%] items-center justify-center pt-20`,
  }
  return (
    <main className={style.main}>
      {movieData.map((val: movieDataType) => (
        <MovieCard {...val} />
      ))}
    </main>
  )
}

export default MoviesGrid
