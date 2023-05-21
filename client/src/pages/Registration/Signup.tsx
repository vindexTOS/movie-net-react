import React from 'react'
import bret from '../../assets/background/bret.png'
import { AiOutlineMail } from 'react-icons/ai'
import { RiLockPasswordFill } from 'react-icons/ri'
import Input from './Input'
const Signup = () => {
  const style = {
    section: `signupbg flex items-end justify-between `,
    form: `w-[50%]  h-[100%] flex items-center justify-center   `,
    inputDiv: `flex flex-col gap-2 bg-[#232323] w-[50%] h-[50%] rounded-[70px] items-center justify-center `,
    input: `h-[3.3rem] w-[22rem] shadow-inner py-2   flex items-center justify-between bg-[#ec2b58]  outline-none rounded-[30px] px-10`,
    icon: `text-white  text-[1.5rem]`,
    btn: `h-[3.3rem] w-[22rem] bg-[#ec2b58] rounded-[30px] text-white  hover:bg-pink-700 text-[1.2rem]`,
  }
  return (
    <section className={style.section}>
      <form className={style.form}>
        <div className={style.inputDiv}>
          <div className={style.input}>
            <AiOutlineMail className={style.icon} />{' '}
            <Input placeholder="EMAIL" type="email" />
          </div>
          <div className={style.input}>
            <RiLockPasswordFill className={style.icon} />{' '}
            <Input placeholder="PASSWPRD" type="password" />
          </div>
          <div className={style.input}>
            <RiLockPasswordFill className={style.icon} />{' '}
            <Input placeholder="REPAT PASSWPRD" type="text" />
          </div>
          <button className={style.btn}>SIGN UP</button>
        </div>
      </form>
      <img className="w-[500px] h-[500px]  bretImg" src={bret} />
    </section>
  )
}

export default Signup
