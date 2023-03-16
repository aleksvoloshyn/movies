import { v4 as uuidv4 } from 'uuid'

import styles from './imageGalleryItem.module.scss'

const ImageGalleryItem = ({ toggle, images }) => {
  return (
    <>
      {images.map((item) => {
        return (
          <li onClick={toggle} className="ImageGalleryItem" key={uuidv4()}>
            <img
              src={item.webformatURL}
              alt={item.tags}
              className={styles.image}
              data-largeimage={item.largeImageURL}
            />
          </li>
        )
      })}
    </>
  )
}

export default ImageGalleryItem
