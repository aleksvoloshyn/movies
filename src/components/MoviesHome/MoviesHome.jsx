import { useState, useEffect } from 'react'

import { getTrendingMovies } from './../../servises/moviesearch'
import {
  Title,
  TrendingList,
  TrendingListItem,
  TrendingListItemNav,
} from './moviesHome.styled.js'
const MoviesHome = () => {
  const [trendingMovies, setTrendingMovies] = useState([])

  useEffect(() => {
    getTrendingMovies().then((data) => setTrendingMovies(data))
  }, [])
  return (
    <>
      <Title>Trending movies</Title>
      <TrendingList>
        {trendingMovies.length > 0 &&
          trendingMovies.map((movie) => {
            return (
              <TrendingListItem key={movie.id}>
                <TrendingListItemNav to={`/movies/${movie.id}`} end>
                  <div style={{ textAlign: 'center' }}>
                    <img
                      style={{ height: '360px' }}
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt={movie.name}
                    />
                    {movie.name || movie.title}
                  </div>
                </TrendingListItemNav>
              </TrendingListItem>
            )
          })}
      </TrendingList>
    </>
  )
}

export default MoviesHome
