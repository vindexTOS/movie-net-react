import React, { FC } from 'react'
type ActorProp = {
  setDropDown: React.Dispatch<React.SetStateAction<boolean>>
  setEdit: React.Dispatch<React.SetStateAction<boolean>>
  edit: boolean
}
const ActorCardDropDown: FC<ActorProp> = ({ edit, setEdit, setDropDown }) => {
  const style = {
    mainDiv: `w-[100%] h-[92%]  bg-gray-200 absolute rounded-[10px]`,
  }
  return (
    <div className={style.mainDiv}>
      <button
        onClick={() => {
          setEdit(!edit), setDropDown(false)
        }}
      >
        Edit
      </button>
    </div>
  )
}

export default ActorCardDropDown
