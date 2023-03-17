import { useEffect, useState } from 'react'
import { getReviewsById } from './../../servises/moviesearch'
import { useParams } from 'react-router-dom'
import { Author, Content } from './movieReviews.styled'

const MovieReviews = () => {
  const { id } = useParams()
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    getReviewsById(id).then((reviews) => setReviews(reviews))
  }, [id])

  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map((rev) => {
          return (
            <li
              key={rev.id}
              style={{
                boxShadow: 'rgba(0, 0, 0, 0.78) 1px 1px 4px -3px',
                padding: '16px',
                marginBottom: '12px',
              }}
            >
              <Author>{rev.author}</Author>
              {rev.updated_at.slice(0, 10)}
              {rev.author_details.avatar_path &&
              rev.author_details.avatar_path.includes('http') ? (
                <img
                  width={80}
                  src={rev.author_details.avatar_path.slice(1)}
                  alt={rev.author_details.username}
                />
              ) : (
                <img
                  width={80}
                  src={`https://image.tmdb.org/t/p/w500/${rev.author_details.avatar_path}`}
                  alt={rev.author_details.username}
                />
              )}
              <Content>{rev.content}</Content>
            </li>
          )
        })
      ) : (
        <p>Sorry, there are no reviews for this movie, yet</p>
      )}
      <Author></Author>
    </ul>
  )
}

export default MovieReviews
