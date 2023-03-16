import { useParams, useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { MdWest } from 'react-icons/md'

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

const ProductDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <main>
      <button
        type="button"
        onClick={() => navigate(-1)}
        style={{ border: 'none', marginBottom: '12px' }}
      >
        <MdWest />
      </button>

      {items.map((items) => {
        if (items.id === id) {
          return (
            <div key={items.id} className={s.productDetailsBlock}>
              <img src={items.image_link} alt={items.title} width={460} />
              <div className={s.productDetailsWrapper}>
                {' '}
                <h2
                  className={s.productDetailsTitle}
                  style={{ marginBottom: '12px', color: 'black' }}
                >
                  {items.title.toUpperCase()}
                </h2>
                id: {id}
                <h2 className={s.productDetailsTitle}>Brand:</h2>
                <p className={s.productDetailsText}>{items.brand}</p>
                <h2 className={s.productDetailsTitle}>Описание:</h2>
                <p className={s.productDetailsText}>{items.description}</p>
                <h2 className={s.productDetailsTitle}>Цена:</h2>
                <p className={s.productDetailsText}>{items.price}</p>
                <h2 className={s.productDetailsTitle}>Цвет:</h2>
                <p className={s.productDetailsText}>{items.color}</p>
                <h2 className={s.productDetailsTitle}>Размер:</h2>
                <p className={s.productDetailsText}>{items.size}</p>
                <Button>Заказать</Button>
              </div>
            </div>
          )
        }
        return true
      })}
    </main>
  )
}
export default ProductDetails
