import { useState, useEffect } from 'react'
import { ActorMapProp } from './ActorsListView'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { useSelector, useDispatch } from 'react-redux'
import ActorCardDropDown from './ActorCardDropDown'
import { updateActor } from '../../../redux/features/Thunks/ActorCrud'
import { ThunkDispatch } from '@reduxjs/toolkit'
import ActorUpdateImg from './ActorUpdateImg'
import { FireBasePhotoThunk } from '../../../redux/features/Thunks/FirebaseThunk'
import { useMainContext } from '../../../context'
const ActorMappedCard = ({ data }: { data: ActorMapProp }) => {
  const { image } = useMainContext()
  const style = {
    mainDiv: `w-[280px] h-[310px] pt-2 gap-2 flex flex-col items-center justify-center bg-gray-300 boxshaddow  rounded-[10px] relative`,
    img: `w-[250px] h-[250px] rounded-[10px]`,
    icon: `absolute  cursor-pointer text-[2rem] text-gray-600 mb-[18.5rem] right-2`,
    btnGreen: `text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`,
  }

  const loggedInUser = useSelector((state: any) => state.auth.userDecoded)
  const url = useSelector((state: any) => state.createMovie.photoUrl)
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const [dropDown, setDropDown] = useState<boolean>(false)
  const { role } = loggedInUser
  const { img, name, id } = data
  const [changedImg, setChangedImg] = useState<string>(img)
  const [changedName, setChangedName] = useState<string>(name)
  const [edit, setEdit] = useState<boolean>(false)

  const handleUpdateActor = async () => {
    const obj = {
      name: changedName,
      img: image ? url : changedImg,
      id,
    }
    dispatch(updateActor(obj))
  }
  useEffect(() => {
    if (image) {
      const uploadImage = async () => {
        await dispatch(FireBasePhotoThunk({ image, dispatch }))
      }

      uploadImage()
    }
  }, [image])
  return (
    <div className={style.mainDiv} onClick={() => console.log(url)}>
      {role === 'Admin' && (
        <BiDotsHorizontalRounded
          onClick={() => setDropDown(!dropDown)}
          className={style.icon}
        />
      )}
      {dropDown && (
        <ActorCardDropDown
          setEdit={setEdit}
          edit={edit}
          setDropDown={setDropDown}
        />
      )}
      {edit ? (
        <ActorUpdateImg changedImg={changedImg} />
      ) : (
        <img className={style.img} src={img} />
      )}
      {edit ? (
        <input
          type="text"
          onChange={(e) => setChangedName(e.target.value)}
          value={changedName}
        />
      ) : (
        <h1 className="text-[1.1rem]">{name}</h1>
      )}
      {edit && (
        <button className={style.btnGreen} onClick={() => handleUpdateActor()}>
          Save Edit
        </button>
      )}
    </div>
  )
}

export default ActorMappedCard
