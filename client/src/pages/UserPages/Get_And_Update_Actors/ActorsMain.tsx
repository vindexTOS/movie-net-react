import React from 'react'
import ActorsListView from './ActorsListView'
const ActorsMain = () => {
  const style = {
    section: `w-[100%] h-[100vh] flex  items-center justify-center`,
  }

  return (
    <section className={style.section}>
      <ActorsListView />
    </section>
  )
}

export default ActorsMain
