// import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Container from '../Container/Container'
import { Panel, PanelList, PanelListItem } from './app.styled.js'

// import MoviesHome from './MoviesHome'
// import Movies from './Movies'
// import MovieDetail from './MovieDetail'
// import NotFound from './NotFound'
// import MovieCast from './MovieCast'
// import MovieReviews from './MovieReviews'

const Home = lazy(() => import('./../MoviesHome' /*webpackChunkName: "Home"*/))
const Details = lazy(() =>
  import('./../MovieDetail' /*webpackChunkName: "Details"*/)
)
const Movies = lazy(() => import('./../Movies' /*webpackChunkName: "Movies"*/))
const MovieReviews = lazy(() =>
  import('./../MovieReviews' /*webpackChunkName: "MovieReviews"*/)
)
const MovieCast = lazy(() =>
  import('./../MovieCast' /*webpackChunkName: "MovieCast"*/)
)
const NotFound = lazy(() =>
  import('./../NotFound' /*webpackChunkName: "NotFound"*/)
)

const App = () => {
  return (
    <Container>
      <Panel>
        <PanelList>
          <PanelListItem to="/" end>
            Home
          </PanelListItem>
          <PanelListItem to="/movies">Movies</PanelListItem>
        </PanelList>
      </Panel>
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
    </Container>
  )
}

export default App
