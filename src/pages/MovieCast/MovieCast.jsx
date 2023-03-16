import { useEffect, useState } from 'react'
import { getCastById } from './../../servises/moviesearch'
import { useParams } from 'react-router-dom'
import Loader from './../../components/Loader/Loader'
import { CastList, CastListItem } from './MovieCast.styles'

const MovieCast = () => {
  const { id } = useParams()
  const [isLoading, setIsloading] = useState(true)
  const [cast, setCast] = useState([])
  useEffect(() => {
    getCastById(id).then((cast) => setCast(cast))
  }, [])
  return (
    <div>
      <CastList>
        {cast &&
          cast.map((cast) => {
            if (cast.profile_path !== null) {
              return (
                <CastListItem key={cast.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                    alt=""
                  />
                  <p style={{ padding: '12px' }}> {cast.name}</p>
                </CastListItem>
              )
            }
            return true
          })}
      </CastList>
    </div>
  )
}

export default MovieCast
