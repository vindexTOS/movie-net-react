import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import InputComponent from './InputComponent'
import TextareaComponent from './TextareaComponent'
export type UpdatedValuesType = {
  color: string
  color2: string
  description: string
  img: string
  title: string
  video: string
  metadata: {
    hr: string
    year: string
    genre: string
  }
  rating: {
    imDb: string
    rottenTomatoes: string
  }
}
const UpdateMovie = () => {
  const movieData = useSelector((state: any) => state.data.movieData)
  const { id } = useParams()
  const singleMovie = movieData?.find((val: any) => String(val.id) === id)

  const [updateValues, setUpdatedValues] = useState<UpdatedValuesType>({
    color: '',
    color2: '',
    description: '',
    img: '',
    title: '',
    video: '',
    metadata: {
      hr: '',
      year: '',
      genre: '',
    },
    rating: {
      imDb: '',
      rottenTomatoes: '',
    },
  })

  React.useEffect(() => {
    if (
      singleMovie &&
      singleMovie.title &&
      singleMovie.metadata &&
      singleMovie.rating
    ) {
      const { color, color2, description, img, title, video } = singleMovie
      const { hr, year, genre } = singleMovie.metadata
      const { imDb, rottenTomatoes } = singleMovie.rating

      setUpdatedValues({
        color,
        color2,
        description,
        img,
        title,
        video,
        metadata: {
          hr,
          year,
          genre,
        },
        rating: {
          imDb,
          rottenTomatoes,
        },
      })
    }
  }, [singleMovie])
  if (
    movieData &&
    singleMovie &&
    singleMovie.title &&
    singleMovie.metadata &&
    singleMovie.rating
  ) {
    const style = {
      section: `w-[100%] h-[100vh] py-20 flex justify-center  items-center`,
      mainDiv: ` h-[90%] w-[95%] flex flex-col items-start justify-around backdrop-blur-sm bg-white/10 rounded-[12px] boxshaddow flex   justify-between`,
    }
    const metaDataArr = [{ type: 'hr' }, { type: 'year' }, { type: 'genre' }]

    return (
      <section className={style.section}>
        <div className={style.mainDiv}>
          <InputComponent
            TITLE={'title'}
            updateValues={updateValues}
            type={'title'}
            setUpdatedValues={setUpdatedValues}
          />
          <TextareaComponent
            type="description"
            TITLE={'description'}
            updateValues={updateValues}
            setUpdatedValues={setUpdatedValues}
          />

          <div>
            {metaDataArr.map((val: any) => (
              <InputComponent
                key={val.type}
                type={val.type}
                TITLE={val.type}
                updateValues={updateValues}
                setUpdatedValues={setUpdatedValues}
              />
            ))}
          </div>
        </div>
      </section>
    )
  } else {
    return <div>Loading</div>
  }
}

export default UpdateMovie
