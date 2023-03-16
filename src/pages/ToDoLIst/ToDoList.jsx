import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Modal from '../Modal/Modal'
import styles from './todolist.module.scss'

const items = [
  { text: 'learn REDUX', isDone: false },
  { text: 'learn REDUX-toolkit', isDone: false },
  { text: 'learn ASYNC/AWAIT', isDone: true },
]

const ToDoList = () => {
  const [todoInput, setTodoInput] = useState('')
  const [editedInput, setEditedInput] = useState('')
  const [currentIndex, setCurrentIndex] = useState(null)
  const [toDoItems, setToDoItems] = useState(items)
  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  // input todo value handler
  const handlerOnChange = (e) => {
    setTodoInput(e.target.value)
  }

  // add new todo handler
  const addHandler = () => {
    if (todoInput !== '') {
      setToDoItems([{ text: todoInput, isDone: false }, ...toDoItems])
      setTodoInput('')
    }
  }

  // on checkbox isDone handler
  const onCheckboxChange = (index) => {
    const checked = toDoItems.map((item, i) => {
      if (i === index) {
        return { ...item, isDone: !item.isDone }
      } else {
        return item
      }
    })
    setToDoItems(checked)
  }

  // on delete click handler
  const onDeleteHandler = (ind) => {
    const deleted = toDoItems.filter((todo, i) => {
      return i !== ind
    })
    setToDoItems(deleted)
  }
  // on edit click handler
  const onEditHandler = (ind) => {
    setCurrentIndex(ind)
    toggleModal()
    return toDoItems.map((item, i) => {
      if (i === ind) {
        setEditedInput(item.text)
      }
      return true
    })
  }
  // on editInputChange click handler
  const onEditInputChange = (e) => {
    setEditedInput(e.target.value)
  }
  // on saveChanges click handler
  const onSaveChangesHandler = () => {
    const checked = toDoItems.map((item, i) => {
      if (i === currentIndex) {
        return { ...item, text: editedInput }
      } else {
        return item
      }
    })
    setToDoItems(checked)
    toggleModal()
  }

  return (
    <div className={styles.todolist}>
      {showModal && (
        <Modal onClose={toggleModal}>
          <div className={styles.modalWrapper}>
            <input
              type="text"
              name="todo"
              value={editedInput}
              onChange={onEditInputChange}
              className={styles.addtodoInput}
            />

            <button
              type="button"
              onClick={onSaveChangesHandler}
              className={styles.buttonSave}
            >
              Save changes
            </button>
          </div>
        </Modal>
      )}

      <h1 className={styles.todoTitle}>TO-DO list APP</h1>

      {/* add toDo block */}
      <div className={styles.addTodo}>
        <input
          type="text"
          placeholder="add to-do here"
          name="todo"
          value={todoInput}
          onChange={handlerOnChange}
          className={styles.addtodoInput}
        />

        <button type="button" onClick={addHandler} className={styles.buttonAdd}>
          Add to-do
        </button>
      </div>

      <div className={styles.todoWrapper}>
        {/* toDoList block */}
        <div className={styles.todo}>
          <h2 className={styles.totoListtitle}>To-Do</h2>
          <ul>
            {toDoItems.map((todo, ind) => {
              return (
                !todo.isDone && (
                  <li key={uuidv4()} className={styles.todoItem}>
                    <input
                      type="checkbox"
                      checked={todo.isDone}
                      onChange={() => onCheckboxChange(ind)}
                      className={styles.addtodoInput}
                    />
                    <p className={styles.todoText}>{todo.text}</p>
                    <button
                      type="button"
                      className={styles.buttonEdit}
                      onClick={() => onEditHandler(ind)}
                    >
                      edit
                    </button>
                    <button
                      type="button"
                      className={styles.buttonRemove}
                      onClick={() => onDeleteHandler(ind)}
                    >
                      delete
                    </button>
                  </li>
                )
              )
            })}
          </ul>
        </div>

        {/* toDo-DONE-List block */}
        <div className={styles.done}>
          <h2 className={styles.totoListtitle}>Done</h2>
          <ul>
            {toDoItems.map((todo, ind) => {
              return (
                todo.isDone && (
                  <li key={uuidv4()} className={styles.todoItem}>
                    <input
                      type="checkbox"
                      checked={todo.isDone}
                      onChange={() => onCheckboxChange(ind)}
                      className={styles.addtodoInput}
                    />
                    <p className={styles.addtodoInput}>{todo.text}</p>

                    <button
                      type="button"
                      className={styles.buttonRemove}
                      onClick={() => onDeleteHandler(ind)}
                    >
                      delete
                    </button>
                  </li>
                )
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ToDoList
