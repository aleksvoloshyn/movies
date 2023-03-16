// import './App.css'
import { Routes, Route } from 'react-router-dom'
import styles from './app.module.scss'
import React from 'react'
import Container from '../Container/Container'
import Navigation from '../Navigation'
// import Toolbar from '../Toolbar'
import Board from '../Board'
import Cv from '../Cv'

const App = () => {
  return (
    <Routes>
      {/* <Route path="Cv_tailwindcss" element={<Cv />}></Route> */}

      <Route
        path="*"
        element={
          <Container>
            {' '}
            <div className={styles.wrapper}>
              <Navigation />
              <div className={styles.toolsWithBoard}>
                {/* <Toolbar /> */}
                <Board />
              </div>
            </div>
          </Container>
        }
      ></Route>
      <Route path="/cv" element={<Cv />} />
    </Routes>
  )
}

export default App
