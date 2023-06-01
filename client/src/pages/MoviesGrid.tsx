import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MainPage/MovieCard'
import { movieDataType } from '../assets/dummydata/data'
const MoviesGrid = () => {
  const movieData = useSelector((state: any) => state.data.movieData)
  const style = {
    main: `gridSystem gap-20 w-[90%] items-center justify-center gap-2   backdrop-blur-sm bg-white/10 rounded-[12px] boxshaddow py-20 px-1   `,
  }
  if (movieData) {
    return (
      <main onClick={() => console.log(movieData)} className={style.main}>
        {movieData?.map((val: movieDataType) => (
          <MovieCard key={val.id} {...val} />
        ))}
        <div className="  gap-3   flex w-[100px] element-without-scrollbar   overflow-x-scroll ">
          {/* {new Array(allPostData.totalPages)
              .fill('')
              .map((val: string, index: number) => (
                <p
                  onClick={() => {
                    navigation(`/posts/page/${index + 1}`)
                  }}
                  className={` text-[1.3rem]  cursor-pointer ${
                    Number(pages) === index + 1 ? 'text-blue-400' : `text-white`
                  } `}
                  key={index}
                >
                  {index + 1}
                </p>
              ))} */}
        </div>
      </main>
    )
  } else {
    return <div onClick={() => console.log(movieData)}>Loading</div>
  }
}

export default MoviesGrid
