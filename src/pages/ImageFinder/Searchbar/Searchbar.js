import { queryAllByAltText } from '@testing-library/react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import styles from './searchbar.module.scss'

const SearchBar = ({ onChangeHandler, onSubmitHandler, value }) => {
  return (
    <header className={styles.header}>
      <div className={styles.centered}>
        <form action="" onSubmit={onSubmitHandler}>
          <InputGroup className="mb-3">
            <Button type="submit" variant="light" id="button-addon1">
              🏸
            </Button>
            <Form.Control
              aria-label="inp"
              aria-describedby="basic-addon1"
              placeholder="Search images "
              // onChange={onChangeHandler}
              // value={value}
              name="val"
            />
          </InputGroup>
        </form>
      </div>
    </header>
  )
}

export default SearchBar
