import MoviesGrid from './MoviesGrid'
import TVcomponent from './MainPage/Screen-components/TVcomponent'
import Filter from './MainPage/Filter-components/Filter'
const MainPage = () => {
  const style = {
    main: `w-[100%] h-[100%] py-10 mainBG gap-6 flex-col flex  justify-center  items-center`,
  }

  return (
    <main className={style.main}>
      <TVcomponent />
      <Filter />
      <MoviesGrid />
    </main>
  )
}

export default MainPage
