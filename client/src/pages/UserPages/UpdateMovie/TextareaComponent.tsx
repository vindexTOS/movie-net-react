import React, { FC } from 'react'
import { UpdatedValuesType } from './UpdateMovie'

type textAreaProps = {
  updateValues: UpdatedValuesType
  type: keyof UpdatedValuesType
  setUpdatedValues: React.Dispatch<React.SetStateAction<UpdatedValuesType>>
  TITLE: string
}

const TextareaComponent: FC<textAreaProps> = ({
  updateValues,
  type,
  setUpdatedValues,
  TITLE,
}) => {
  const style = {
    mainDiv: ` flex flex-col justify-around px-3 w-[400px] p-2 bg-gray-300 boxshaddow rounded-[20px]`,
  }
  return (
    <div className={style.mainDiv}>
      <p className="h-[30px]">{TITLE}</p>
      <div className="w-[100%] h-[1px] bg-gray-400"></div>
      <textarea
        className="outline-none bg-transparent  max-h-[500px]"
        value={String(updateValues[type])}
        onChange={(e) =>
          setUpdatedValues({ ...updateValues, [type]: e.target.value })
        }
      />
    </div>
  )
}

export default TextareaComponent
