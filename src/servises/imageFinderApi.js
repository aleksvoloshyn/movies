import axios from 'axios'

// const key = '22398165-fb0cc592f6e3d650fc4eef6c6'

const getImages = (q, page) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${q}&page=${page}&key=22398165-fb0cc592f6e3d650fc4eef6c6&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data.hits)
}

export { getImages }
