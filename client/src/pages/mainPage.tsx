import MoviesGrid from './MoviesGrid'
import TVcomponent from './MainPage/Screen-components/TVcomponent'
const MainPage = () => {
  const style = {
    main: `w-[100%] h-[100%] py-10 mainBG  flex-col flex  justify-center  items-center`,
  }

  return (
    <main className={style.main}>
      <TVcomponent />
      <MoviesGrid />
    </main>
  )
}

export default MainPage
