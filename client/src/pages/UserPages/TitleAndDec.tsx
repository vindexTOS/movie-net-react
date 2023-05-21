import React from 'react'
import { MdLocalMovies } from 'react-icons/md'
const TitleAndDec = () => {
  const style = {
    mainDiv: `flex flex-col gap-2`,
  }
  return (
    <div className={style.mainDiv}>
      <div className=" bg-gray-300 w-[30rem] rounded-[5px] boxshaddow h-[2rem] flex items-center justify-around ">
        <MdLocalMovies className="text-[1.2rem] text-gray-600" />{' '}
        <input
          type="text"
          className="outline-none bg-transparent px-1 w-[90%]"
          placeholder="Movie Title"
        />
      </div>
      <textarea
        placeholder="Movie Description"
        className="bg-gray-300 h-[450px] max-h-[250px] text-[#ec2b58] w-[100%] h-[100%]    boxshaddow rounded-[5px] p-2"
      ></textarea>
    </div>
  )
}

export default TitleAndDec
