import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import './App.css'

// import MoviesHome from './MoviesHome'
// import Movies from './Movies'
// import MovieDetail from './MovieDetail'
// import NotFound from './NotFound'
// import MovieCast from './MovieCast'
// import MovieReviews from './MovieReviews'

const Home = lazy(() => import('./MoviesHome' /*webpackChunkName: "Home"*/))
const Details = lazy(() =>
  import('./MovieDetail' /*webpackChunkName: "Details"*/)
)
const Movies = lazy(() => import('./Movies' /*webpackChunkName: "Movies"*/))
const MovieReviews = lazy(() =>
  import('./MovieReviews' /*webpackChunkName: "MovieReviews"*/)
)
const MovieCast = lazy(() =>
  import('./MovieCast' /*webpackChunkName: "MovieCast"*/)
)
const NotFound = lazy(() =>
  import('./NotFound' /*webpackChunkName: "NotFound"*/)
)
function App() {
  return (
    <Suspense fallback={<div>Загружаем..</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<Details />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

export default App
