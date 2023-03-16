import { NavLink, useSearchParams } from 'react-router-dom'
import items from './productsMock'
import s from './routing.module.scss'

// const products = [
//   { id: 'h-1', name: 'Hoodie 1' },
//   { id: 'h-2', name: 'Hoodie 2' },
//   { id: 'h-3', name: 'Hoodie 3' },
//   { id: 's-1', name: 'Sneakers 1' },
//   { id: 's-2', name: 'Sneakers 2' },
//   { id: 's-3', name: 'Sneakers 3' },
//   { id: 's-4', name: 'Sneakers 4' },
//   { id: 'p-1', name: 'Pants 1' },
//   { id: 'p-2', name: 'Pants 2' },
//   { id: 'p-3', name: 'Pants 3' },
// ]

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const title = searchParams.get('title') ?? ''

  const filteredData = items.filter((prod) => {
    if (title !== '') {
      return prod.title.toLowerCase().includes(title.toLowerCase())
    } else {
      return items
    }
  })

  return (
    <main className={s.card}>
      {' '}
      <input
        type="text"
        value={title}
        onChange={(e) => setSearchParams({ title: e.target.value })}
        className={s.inputFilter}
        placeholder="find product"
      />
      <ul className={s.productsList}>
        {filteredData.map((product) => {
          return (
            <li key={product.id} className={s.productListItem}>
              <NavLink
                className={s.productNav}
                to={`${product.id}`}
                style={{ textAlign: 'center', color: 'black' }}
              >
                <img src={product.image_link} alt="" width={200} />
                {product.title}
              </NavLink>
            </li>
          )
        })}{' '}
      </ul>
      name : {title}
    </main>
  )
}

export default Products
