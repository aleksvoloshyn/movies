import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
// import Contacts from './Contacts'
// import { NotFound } from './NotFound'
// import { Home } from './Home'
// import About from './About'
// import { Products } from './Products'
// import { ProductDetails } from './ProductDetails'
// import { Mission } from './Mission'
// import { Team } from './Team'
// import { Reviews } from './Reviews'
import { Container, Header, Logo, Link } from './routing.styled.js'
// import styles from './routing.module.scss'

const Home = lazy(() => import('./Home' /*webpackChunkName: "Home"*/))
const About = lazy(() => import('./About'))
const Contacts = lazy(() => import('./Contacts'))
const Products = lazy(() => import('./Products'))
const ProductDetails = lazy(() => import('./ProductDetails'))
const Mission = lazy(() => import('./Mission'))
const Team = lazy(() => import('./Team'))
const Reviews = lazy(() => import('./Reviews'))
const NotFound = lazy(() => import('./NotFound'))

const Routing = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{' '}
          Store
        </Logo>
        <nav>
          <Link to="/routing" end>
            Home
          </Link>
          <Link to="products">Products</Link>
          <Link to="about">About</Link>
          <Link to="contacts">Contacts</Link>
        </nav>
      </Header>

      <Suspense fallback={<div>Загружаем..</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />}>
            <Route path="mission" element={<Mission />} />
            <Route path="team" element={<Team />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="contacts" element={<Contacts />} />
          <Route path="products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Container>
  )
}

export default Routing
