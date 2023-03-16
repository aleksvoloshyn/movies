import { useEffect, useState } from 'react'
import { useParams, useNavigate, NavLink, Outlet } from 'react-router-dom'
// import MovieCast from '../MovieCast'
// import MovieReviews from '../MovieReviews'
import { getMovieById } from '../../../servises/moviesearch'
import {
  DetailsWrapper,
  DetailsText,
  DetailsTitle,
  DetailsDescription,
} from './movieDetails.styled'

const MovieDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [details, setDetails] = useState()
  useEffect(() => {
    getMovieById(id).then((response) => setDetails(response))
  }, [])

  return (
    <>
      <button
        onClick={() => {
          navigate('../')
        }}
      >
        go back
      </button>
      {details && (
        <DetailsWrapper>
          <img
            style={{ height: '600px' }}
            src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
            alt={details.name}
          />
          <DetailsDescription>
            <DetailsTitle> {details.title}</DetailsTitle>
            <p>{details.original_title}</p>
            <DetailsText>Rating : </DetailsText> <p>{details.vote_average}</p>
            <DetailsText>Genres : </DetailsText>{' '}
            {details.genres.map((item) => {
              return <p key={item.id}>{item.name}</p>
            })}
            <DetailsText>Budget: </DetailsText> <p>{details.budget}$</p>
            <DetailsText>Release date: </DetailsText>{' '}
            <p>{details.release_date}</p>
            <DetailsText>About: </DetailsText> <p>{details.overview}</p>
          </DetailsDescription>

          {/* <img
            // style={{ height: '300px' }}
            src={`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`}
            alt={details.name}
          /> */}
        </DetailsWrapper>
      )}
      <ul>
        <li>
          {' '}
          <NavLink to={`/moviesearch/movies/${id}/cast`}>Cast</NavLink>
        </li>
        <li>
          {' '}
          <NavLink to={`/moviesearch/movies/${id}/reviews`}>Reviews</NavLink>
        </li>
      </ul>
      {/* <Routes>
        <Route path="cast" element={<MovieCast />} />
        <Route path="reviews" element={<MovieReviews />} />
      </Routes> */}
      <Outlet />
    </>
  )
}
export default MovieDetail
