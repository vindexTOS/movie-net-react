import React from 'react'
import TVcomponent from '../components/TVcomponent'

const MainPage = () => {
  const style = {
    main: `w-[100%] h-[100vh] mainBG  flex  justify-center `,
  }

  return (
    <main className={style.main}>
      <TVcomponent />
    </main>
  )
}

export default MainPage
