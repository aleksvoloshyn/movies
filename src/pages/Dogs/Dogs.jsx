import React from 'react'

import { useState, useEffect } from 'react'
import { ProgressSpinner } from 'primereact/progressspinner'
// import { SelectButton } from 'primereact/selectbutton'
// import { Dropdown } from 'primereact/dropdown'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { v4 as uuidv4 } from 'uuid'
import PageContainer from '../PageContainer/PageContainer'
import { getDogsApi, getSuBreedApi, getBreedImg } from '../../servises/dogsApi'
import styles from './dogs.module.scss'

const Dogs = () => {
  const [breeds, setBreeds] = useState([])
  const [subBreeds, setSubBreeds] = useState([])
  const [image, setImage] = useState('')

  const [selectedBreed, setSelectedBreed] = useState('')
  const [isLoading, setIsloading] = useState(true)

  useEffect(() => {
    getDogsApi('https://dog.ceo/api/breeds/list/all')
      .then((res) => {
        Object.keys(res)
        setBreeds(Object.keys(res))
      })
      .catch((error) => console.log(error))
      .finally(() => setIsloading(false))
  }, [])

  const handlerOnBreedSelect = (e) => {
    setSelectedBreed(e.target.value)
    getSuBreedApi(e.target.value).then((data) => {
      setSubBreeds(data)
    })
    getBreedImg(e.target.value).then((data) => {
      setImage(data)
    })
  }

  const nextPhotoHandler = () => {
    getBreedImg(selectedBreed).then((data) => {
      setImage(data)
    })
  }

  return (
    <PageContainer>
      <div className={styles.wrapper}>
        {isLoading ? (
          <ProgressSpinner />
        ) : (
          <div>
            {/* <label className={styles.label}>
            <p className={styles.label}>Выберите породу собаки в списке</p> */}

            {/* <SelectButton
              name="breed"
              value={selectedBreed}
              onChange={handlerOnBreedSelect}
              options={breeds}
            />
          </label> */}
            <h2 className={styles.title}>Select breed from list:</h2>
            <br />
            <Form.Select
              aria-label="Default select example"
              name="breed"
              value={selectedBreed}
              onChange={handlerOnBreedSelect}
            >
              {breeds.map((breed, ind, arr) => {
                // arr.splice(0, 0, 1)
                return (
                  <option key={uuidv4()} value={breed}>
                    {breed}
                  </option>
                )
              })}
            </Form.Select>
          </div>
        )}

        {selectedBreed !== '' && (
          <Card style={{ width: '30rem' }}>
            <Card.Body>
              <Card.Title>
                {' '}
                <p className={styles.breedTitle}>Breed:</p> {selectedBreed}
              </Card.Title>
              <br />
              {subBreeds.length > 0 && (
                <ul>
                  <p className={styles.subBreedTitle}>Subbreeds: </p>
                  {subBreeds.map((sub, ind) => {
                    return <li key={ind}>{sub}</li>
                  })}
                </ul>
              )}
              <Card.Img variant="top" src={image} />
              <br />
              <br />
              <div className="d-grid gap-2">
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={nextPhotoHandler}
                >
                  next photo
                </Button>
              </div>
            </Card.Body>
          </Card>
        )}
      </div>
    </PageContainer>
  )
}

export default Dogs
