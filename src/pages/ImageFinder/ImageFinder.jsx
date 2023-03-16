import { useState, useEffect } from 'react'

import SearchBar from './Searchbar/Searchbar'
import ImageGallery from './ImageGallery'
import PageContainer from '../PageContainer/PageContainer'
import { ToastContainer, toast } from 'react-toastify'
import { Circles } from 'react-loader-spinner'
import { getImages } from '../../servises/imageFinderApi'
import ModalImg from './ModalImg'

import 'react-toastify/dist/ReactToastify.css'

const ImageFinder = () => {
  const [images, setImages] = useState([])
  const [query, setQuery] = useState(null)
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [largeImageSrc, setLargeImageSrc] = useState(false)
  const [alt, setAlt] = useState('')

  // scroll to the bottom of the page, on click load more
  // useEffect(() => {
  //   if (images.length > 0) {
  //     document.body.scrollIntoView(0)
  //   }
  // }, [images])

  // get images onLoadMore (page changing)
  useEffect(() => {
    getImages(query, page).then((res) => {
      setImages((pr) => [...pr, ...res])
    })
  }, [page])

  const notify = () => toast('please enter your request!')

  const onChangeHandler = (e) => {
    return setQuery(e.target.value)
  }

  // onSearch button click
  const onSubmitHandler = (e) => {
    e.preventDefault()
    const inputValue = e.currentTarget.elements.val.value
    if (inputValue === '') {
      notify()
      return
    }
    setIsLoading(true)
    setQuery(inputValue)
    getImages(inputValue, page)
      .then((res) => {
        setImages(res)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const loadMoreHandler = () => {
    setIsLoading(true)
    setPage((p) => p + 1)
    setIsLoading(false)
  }

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  const setCurrentPictureSrc = (e) => {
    setShowModal(!showModal)
    if (e !== undefined) {
      setLargeImageSrc(e.target.dataset.largeimage)
      setAlt(e.target.alt)
    }
  }

  return (
    <>
      <PageContainer>
        <SearchBar
          query={query}
          onChangeHandler={onChangeHandler}
          onSubmitHandler={onSubmitHandler}
          value={query}
        />

        {query !== null && (
          <ImageGallery
            images={images}
            altQuery={alt}
            loadMoreHandler={loadMoreHandler}
            value={query}
            toggleModal={setCurrentPictureSrc}
          />
        )}
        {showModal && (
          <ModalImg onClose={toggleModal}>
            <div>
              <img src={largeImageSrc} alt={alt} />
            </div>
          </ModalImg>
        )}
        {isLoading && (
          <Circles
            height="180"
            width="180"
            radius="48"
            color="salmon"
            ariaLabel="circles-loading"
            wrapperStyle={{ justifyContent: 'center', paddingTop: '20px' }}
            wrapperClassName=""
            visible={true}
          />
        )}
        <span id="page-bottom"></span>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </PageContainer>{' '}
    </>
  )
}

export default ImageFinder
