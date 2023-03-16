import styles from './forms.module.scss'
import { useState } from 'react'
import shortid from 'shortid'
import { InputText } from 'primereact/inputtext'
import { Checkbox } from 'primereact/checkbox'
import { SelectButton } from 'primereact/selectbutton'
import { RadioButton } from 'primereact/radiobutton'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { Avatar } from 'primereact/avatar'
import PageContainer from '../PageContainer/PageContainer'

const Forms = () => {
  const [login, setLogin] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [gender, setGender] = useState(null)
  const [age, setAge] = useState('')
  const [showCard, setShowCard] = useState(false)

  // for uncontrolled
  const [uncontrolledname, setUncontrolledname] = useState('')
  const [uncontrolledagreed, setUncontrolledagreed] = useState(false)
  const [uncontrolledage, setUncontrolledage] = useState('')

  let loginInputId = shortid.generate()
  let emailInputId = shortid.generate()
  let passwordInputId = shortid.generate()

  const options = ['18-25', '26-35', '36+']

  // onSubmit controlled components form handler
  const handlerSubmit = (e) => {
    e.preventDefault()
    setShowCard(true)
  }

  // controlled inputs handlers
  const handlerOnNameChange = (e) => {
    setLogin(e.target.value)
  }
  const handlerOnEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlerOnPasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const handlerGenderChange = (e) => {
    setGender(e.target.value)
  }
  const handlerAgeChange = (e) => {
    setAge(e.target.value)
  }
  const handleChangeAgreed = (e) => {
    setAgreed(e.target.checked)
  }
  // -------------------------------------

  // Handler for uncontrolled components
  const uncontroledSubmit = (e) => {
    e.preventDefault()
    setUncontrolledname(e.currentTarget.elements.login.value)
    setUncontrolledagreed(String(e.currentTarget.elements.checkb.checked))
    setUncontrolledage(e.currentTarget.elements.pets.value)
  }

  return (
    <PageContainer>
      <h2 style={{ marginBottom: 20, color: 'salmon', textAlign: 'center' }}>
        Controlled Elements
      </h2>
      <form onSubmit={handlerSubmit} className={styles.form}>
        {/* text */}
        <div className={styles.formBlock}>
          {' '}
          <label className={styles.label} htmlFor={loginInputId}>
            <p className={styles.label}> Name</p>
            <InputText
              type="text"
              placeholder="enter name"
              name="login"
              value={login}
              onChange={handlerOnNameChange}
            />
          </label>
          <label className={styles.label} htmlFor={emailInputId}>
            <p className={styles.label}>Email</p>
            <InputText
              type="email"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={handlerOnEmailChange}
              required
            />
          </label>
          <label className={styles.label} htmlFor={passwordInputId}>
            <p className={styles.label}>Password</p>
            <InputText
              type="password"
              placeholder="Enter password"
              name="password"
              value={password}
              onChange={handlerOnPasswordChange}
              required
            />
          </label>
        </div>

        {/* CHECKBOX  RADIO  select*/}
        <div className={styles.formBlock}>
          {' '}
          <label className={styles.label}>
            <p className={styles.label}> Agree to terms</p>
            <Checkbox
              // type="checkbox"
              checked={agreed}
              onChange={handleChangeAgreed}
              required
            />
          </label>
          <label className={styles.label}>
            <p className={styles.label}>Male</p>
            <RadioButton
              type="radio"
              checked={gender === 'male'}
              name="gender"
              value="male"
              onChange={handlerGenderChange}
              required
            />
          </label>
          <label className={styles.label}>
            <p className={styles.label}>Female</p>
            <RadioButton
              type="radio"
              checked={gender === 'female'}
              name="gender"
              value="female"
              onChange={handlerGenderChange}
              required
            />
          </label>
          <label className={styles.label}>
            <p className={styles.label}>Choose your age</p>
            <SelectButton
              name="age"
              value={age}
              onChange={handlerAgeChange}
              options={options}
              required
            />
          </label>
        </div>

        <Button className="p-button-success" type="submit">
          submit
        </Button>
      </form>
      {showCard && (
        <Card>
          <h2>User's data: </h2>
          <p>
            <b>Name :</b> {login}
          </p>
          <p>
            <b>Password :</b> "*******"
          </p>
          <p>
            <b>Agreed :</b> {agreed ? 'YES' : 'NO'}
          </p>
          <p>
            <b>Gender :</b> {gender}
          </p>
          <p>
            {' '}
            <b>Age :</b> {age}
          </p>
        </Card>
      )}

      <div className={styles.uncontroled}>
        <h2 style={{ marginBottom: 20, color: 'salmon' }}>
          Uncontrolled Elements
        </h2>
        <form
          action=""
          className={styles.uncontrolledForm}
          onSubmit={uncontroledSubmit}
          style={{ marginBottom: 40 }}
        >
          <p className={styles.label}> Name</p>
          <input
            required
            type="text"
            placeholder="enter name"
            name="login"
            style={{ marginRight: 60 }}
          />
          <p className={styles.label}> Agree</p>
          <input type="checkbox" name="checkb" style={{ marginRight: 60 }} />

          <select name="pets" style={{ marginRight: 60 }}>
            <option value="cats">cats</option>
            <option value="dogs">dogs</option>
            <option value="koalas">koalas</option>
          </select>
          <button
            type="submit"
            style={{ backgroundColor: 'salmon', border: 'none', padding: 8 }}
          >
            submit
          </button>
        </form>
        <Card>
          <p>Name: {uncontrolledname}</p>
          <p>Agreed: {uncontrolledagreed}</p>
          <p>Age: {uncontrolledage}</p>
        </Card>
      </div>
    </PageContainer>
  )
}

export default Forms
