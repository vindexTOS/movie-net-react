import { color } from 'framer-motion'
import React, { useState } from 'react'
import TitleAndDec from './TitleAndDec'
import ImgUpload from './ImgUpload'
import ColorDiv from './ColorDiv'
import { useMainContext } from '../../context'
import MetaData from './MetaData'
import Actors from './Actors'
import VideoPost from './VideoPost'
import { useSelector, useDispatch } from 'react-redux'
import { FireBasePhotoThunk } from '../../redux/features/Thunks/FirebaseThunk'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { CreateMovie } from '../../redux/features/Thunks/MovieCrud'
const PostMovie = () => {
  const { color1, color2, image, htmlImg } = useMainContext()
  const style = {
    mainDiv: `flex   items-center justify-around gap-5 w-[90%] h-[900px]  backdrop-blur-sm bg-white/10 rounded-[12px] boxshaddow`,
    TitleAndImg: `flex flex-col gap-2 items-center justify-start`,
  }

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

  const {
    title,
    description,
    photoUrl,
    length,
    year,
    genere,
    actorName,
    video,
    rottenTomatoes,
    imDb,
  } = useSelector((state: any) => state.createMovie)

  const actorsarra = [
    { img: 'yle', name: 'yle' },
    { img: 'yle', name: 'yle' },
    { img: 'yle', name: 'yle' },
    { img: 'yle', name: 'yle' },
  ]
  const AddMovie = async () => {
    await dispatch(FireBasePhotoThunk(image))
    const movieObj = {
      title,
      color: color1,
      color2,
      video,
      img: 'ahahah',
      description,
      rating: {
        imDb: Number(imDb),
        rottenTomatoes: Number(rottenTomatoes),
      },
      metadata: {
        hr: length,
        year: Number(year),
        genre: genere,
      },
      id: 1,
    }

    const jsnObj = {
      id: 0,
      title: 'The Dark Knight',
      color: 'Black',
      color2: 'White',
      img: 'https://www.example.com/the-dark-knight.jpg',
      video: 'https://www.example.com/the-dark-knight.mp4',
      description:
        'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      rating: {
        imDb: 9,
        rottenTomatoes: 94,
      },
      actors: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
      metadata: {
        hr: '2h 32m',
        year: 2008,
        genre: 'Action',
      },
    }

    dispatch(CreateMovie(jsnObj))
    console.log(movieObj)
  }
  return (
    <div
      style={{ backgroundColor: `${color1}`, color: `${color2}` }}
      className={style.mainDiv}
    >
      {/* <h1 className="text-[3rem]">Add A Movie</h1> */}
      <div className="flex  w-[100%] justify-around  gap-5">
        <div className={style.TitleAndImg}>
          <div className="flex items-center justify-center gap-2">
            <TitleAndDec />
            <ImgUpload htmlImg={htmlImg} />
          </div>
          <MetaData />
          <div className="flex gap-2">
            <ColorDiv />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Actors />
          <VideoPost />

          <button className="text-white text-[2rem]" onClick={() => AddMovie()}>
            SUBMIT{' '}
          </button>
        </div>
      </div>
    </div>
  )
}

export default PostMovie
