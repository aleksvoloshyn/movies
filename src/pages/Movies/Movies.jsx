import { Button } from 'primereact/button'

import { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import { getMovieByRequest } from './../../servises/moviesearch'
import {
  MoviesList,
  MoviesListItem,
  MoviesListItemNav,
  BackButton,
  SearchInput,
  SearchPanel,
} from './movies.styled'
// import MovieDetail from '../MovieDetail'
const Movies = () => {
  const navigate = useNavigate()
  const [request, setRequest] = useState('')
  const [movies, setMovies] = useState([])
  const [showinfo, setShowinfo] = useState(false)

  const onChangeHandler = (e) => {
    // console.log(e.keyCode)
    setRequest(e.target.value)
  }

  // useEffect(() => {
  //   if (request === '') {
  //     setShowinfo(true)
  //     return
  //   }

  //   getMovieByRequest(request).then((items) => {
  //     setMovies(items)
  //   })
  // }, [request])

  const onSubmitHandler = (e) => {
    e.preventDefault()

    if (request === '') {
      setShowinfo(true)
      return
    }
    setShowinfo(false)
    getMovieByRequest(request).then((items) => {
      setMovies(items)
    })
    setRequest('')
  }

  const onKeyPressSubmit = (e) => {
    if (request === '') {
      setShowinfo(true)
      return
    }
    if (e.code === 'Enter') {
      setShowinfo(false)
      getMovieByRequest(request).then((items) => {
        setMovies(items)
      })
      setRequest('')
    }
  }

  return (
    <>
      <SearchPanel>
        {' '}
        <BackButton
          onClick={() => {
            navigate('../')
          }}
        >
          &#8592;
        </BackButton>
        <SearchInput
          type="text"
          value={request}
          onChange={onChangeHandler}
          onKeyPress={onKeyPressSubmit}
          placeholder="start to type movie title here..."
        />
        <Button
          type="submit"
          onClick={onSubmitHandler}
          className="p-button-danger"
        >
          search
        </Button>
      </SearchPanel>

      {showinfo && (
        <p style={{ color: 'tomato', marginBottom: '12px' }}>
          Пожалуйста, введите запрос
        </p>
      )}

      <MoviesList>
        {movies.length > 0 &&
          [...movies]
            .filter((item) => {
              return item.poster_path !== null
            })
            .map((movie) => {
              return (
                <MoviesListItem key={movie.id}>
                  <MoviesListItemNav to={`/movies/${movie.id}`} end>
                    <div style={{ textAlign: 'center' }}>
                      <img
                        style={{ height: '300px' }}
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={movie.name}
                      />
                      {movie.name || movie.title}
                    </div>
                  </MoviesListItemNav>
                </MoviesListItem>
              )
            })}
      </MoviesList>
    </>
  )
}

export default Movies
