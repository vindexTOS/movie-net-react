import React from 'react'
import ButtonComponent from './ButtonComponent'
import { useNavigate } from 'react-router-dom'
const AuthPage = () => {
  const style = {
    section: `  authpagebg  flex flex-col items-center justify-center       `,
    btnWrapper: `  flex gap-[20rem]  laptop:mt-[12rem] max_smm1:mt-[44%]  mt-[15%] max_smm:justify-between  max_smm1:w-[100%]  max_smm:mt-[40%] max_x:mt-[25%] max_Xll:mt-[20%] max_XL4:gap-[15rem]`,
  }
  const navigate = useNavigate()
  return (
    <section className={style.section}>
      <div className={style.btnWrapper}>
        <ButtonComponent
          link="/login"
          title="Log In"
          styling="#0284c7"
          color="#1F51FF"
        />
        <ButtonComponent
          link="/signup"
          styling="#ef4444"
          color="#FF3131"
          title="Sign Up"
        />
      </div>
      <p className="text-white w-[50%] text-center absolute font-bold text-[1.2rem] bottom-10 max_sm8:bottom-0 max_sm8:w-[90%]  bottom-[-5rem] max_smm:text-[1rem]   max_smm:w-[90%]">
        You have two choices. Take the blue pill and{' '}
        <span
          className="text-blue-400  cursor-pointer"
          onClick={() => navigate('/login')}
        >
          log in{' '}
        </span>
        to your existing account. You'll wake up in familiar territory, with all
        your data right where you left it. Or, take the red pill and{' '}
        <span
          className="text-red-500 cursor-pointer"
          onClick={() => navigate('/signup')}
        >
          sign up
        </span>{' '}
        for a new account. You'll be venturing into unknown territory, but I'll
        be your guide as we explore how deep the rabbit hole goes.
      </p>
    </section>
  )
}

export default AuthPage
