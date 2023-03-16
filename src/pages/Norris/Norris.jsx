import { useState } from 'react'

import getSomeJokes from '../../servises/norrisApi'

import styles from './norris.module.scss'
import dancingChuck from './../../images/chuck.gif'

const Norris = () => {
  const [joke, setJoke] = useState('')

  const chuckImage =
    'https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png'

  const showJoke = () => {
    // setIsLoading(false)
    getSomeJokes().then((res) => {
      // console.log(res)
      setJoke(res.value)
    })
  }

  return (
    <div className={styles.chuck}>
      <span className={styles.textWrap}>
        {' '}
        <h2 className={styles.title}>Click on Chuck for a new joke!</h2>
        <img src={dancingChuck} alt="" />
      </span>
      <img
        src={chuckImage}
        alt="chuck"
        width={400}
        className={styles.img}
        onClick={showJoke}
      />
      {joke.length !== 0 && <p className={styles.text}>{joke}</p>}
    </div>
  )
}

export default Norris
