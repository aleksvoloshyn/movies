import PageContainer from '../../PageContainer/PageContainer'
import ImageGalleryItem from '../ImageGalleryItem'
import { Button } from 'primereact/button'
import styles from './imageGallery.module.scss'

const ImageGallery = ({ loadMoreHandler, toggleModal, images }) => {
  return (
    <PageContainer>
      <div className={styles.imagesWrapper}>
        <ul className={styles.gallery}>
          <ImageGalleryItem toggle={toggleModal} images={images} />
        </ul>
        {images.length > 0 && (
          <div className={styles.fixedDiv}>
            {' '}
            <Button
              id="loadMore"
              label="Load more"
              className="p-button-info"
              width="60"
              onClick={loadMoreHandler}
            />
          </div>
        )}
      </div>
    </PageContainer>
  )
}

export default ImageGallery
