import { useRef, useState, useEffect, forwardRef } from 'react'

const Hooks = () => {
  const [value, setValue] = useState(0)
  const btnRef = useRef()

  // Будет null на первом рендере
  // и ссылкой на DOM-элемент все последующие
  console.log(btnRef.current)

  useEffect(() => {
    // Эффект выполняется после монтирования,
    // поэтому всегда будет ссылкой на DOM-элемент
    console.log(btnRef.current)
  })

  const handleClick = () => {
    // Клики будут после монтирвоания,
    // поэтому всегда будет ссылкой на DOM-элемент
    console.log(btnRef.current)
  }

  return (
    <>
      <h2>useRef</h2>
      <button onClick={() => setValue(value + 1)}>
        Update value to trigger re-render
      </button>
      <button ref={btnRef} onClick={handleClick}>
        Button with ref
      </button>
      <button
        onClick={() => {
          btnRef.current.style.backgroundColor = 'salmon'
          btnRef.current.previousSibling.style.backgroundColor = 'teal'
        }}
      >
        clickme
      </button>
      <hr />
    </>
  )
}

export default Hooks
