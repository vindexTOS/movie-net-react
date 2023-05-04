import React from 'react'
import TVcomponent from '../components/TVcomponent'

const MainPage = () => {
  const style = {
    main: `w-[100%] h-[100vh] mainBG  flex  pt-20 justify-center `,
  }

  return (
    <main className={style.main}>
      <TVcomponent />
    </main>
  )
}

export default MainPage
