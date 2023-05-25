import React, { FC } from 'react'
import { UpdatedValuesType } from './UpdateMovie'
type inputProps = {
  updateValues: UpdatedValuesType
  type: keyof UpdatedValuesType
  setUpdatedValues: React.Dispatch<React.SetStateAction<UpdatedValuesType>>
  TITLE: string
}

const InputComponent: FC<inputProps> = ({
  updateValues,
  type,
  setUpdatedValues,
  TITLE,
}) => {
  const style = {
    mainDiv: ` flex justify-around px-3 w-[400px] p-2 bg-gray-300 boxshaddow rounded-[20px]`,
  }
  return (
    <div className={style.mainDiv}>
      <p>{TITLE}</p>
      <div className="w-[1px] h-[100%] bg-gray-400"></div>
      <input
        className="outline-none bg-transparent"
        type="text"
        value={String(updateValues[type])}
        onChange={(e) =>
          setUpdatedValues({ ...updateValues, [type]: e.target.value })
        }
      />
    </div>
  )
}

export default InputComponent
