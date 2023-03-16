import styles from './reactClass.module.scss'
// import Button from 'react-bootstrap/Button'
import React, { Component } from 'react'
import { Button } from 'primereact/button'
import { ProgressSpinner } from 'primereact/progressspinner'
import PageContainer from '../PageContainer/PageContainer'

import axios from 'axios'

class ReactClass extends Component {
  // constructor() {
  //   super()
  //   this.handleIncrement = this.handleIncrement.bind(this)
  //   this.handleDecrement = this.handleDecrement.bind(this)
  //   this.handlerReset = this.handlerReset.bind(this)
  //   this.handlerIsLoading = this.handlerIsLoading.bind(this)
  //   this.state = {
  //     value: '',
  //     num: 0,
  //   }
  // }

  // Default props
  static defaultProps = {
    initialValue: 0,
  }

  state = {
    value: 10,
    step: 10,
    isLoading: false,
    dog: '',
    showBlock: false,
  }

  componentDidMount() {
    axios
      .get('https://dog.ceo/api/breeds/image/random')
      .then((response) => this.setState({ dog: response.data.message }))
      .catch((error) => {
        console.log(error)
      })
  }

  handlerIncrement = () => {
    this.setState((prev) => ({
      value: prev.value + this.state.step,
    }))
  }
  handlerDecrement = () => {
    this.setState((prev) => ({
      value: prev.value - this.state.step,
    }))
  }
  handlerReset = () => {
    this.setState({ value: this.props.initialValue })
  }

  handlerIsLoading = () => {
    this.state.isLoading
      ? this.setState({ isLoading: false })
      : this.setState({ isLoading: true })
  }
  handlerShowBlock = () => {
    this.state.showBlock
      ? this.setState({ showBlock: false })
      : this.setState({ showBlock: true })
  }

  render() {
    return (
      <PageContainer>
        <div className={styles.wrapper}>
          {' '}
          <div>
            {' '}
            <h2 className={styles.centered}>Counter on classComponent REACT</h2>
            <span className={styles.centered}>{this.state.value}</span>
            <div className={styles.centered}>
              <Button
                className="p-button-success"
                onClick={this.handlerIncrement}
              >
                Increment by {this.state.step}
              </Button>

              <Button
                className="p-button-danger"
                onClick={this.handlerDecrement}
              >
                Decrement by {this.state.step}
              </Button>
              <Button
                className="p-button-secondary"
                onClick={this.handlerReset}
              >
                Reset to {this.props.initialValue}
              </Button>
            </div>
          </div>
          {/* isLoading block */}
          <div className={styles.wrap}>
            <Button
              className={
                this.state.isLoading ? ' p-button-warning' : ' p-button-help'
              }
              onClick={this.handlerIsLoading}
            >
              isLoading {String(this.state.isLoading)}
            </Button>
            {this.state.isLoading && (
              <ProgressSpinner
                style={{ width: '80px', height: '80px' }}
                strokeWidth="8"
                fill="var(--surface-ground)"
                animationDuration="1s"
              />
            )}
          </div>
          {/* http api */}
          <div className={styles.wrap}>
            <ul>
              <li>
                <img src={this.state.dog} alt="" className={styles.img} />
              </li>
            </ul>
          </div>
          {/* showBlockElement */}
          <div className={styles.wrap}>
            <Button
              className={
                this.state.showBlock ? ' p-button-warning' : ' p-button-info'
              }
              onClick={this.handlerShowBlock}
            >
              {!this.state.showBlock ? 'show hidden block' : 'hide'}
            </Button>

            {this.state.showBlock && (
              <div className={styles.hiddenBlock}>HI, this IS hidden BLOCK</div>
            )}
          </div>
        </div>
      </PageContainer>
    )
  }
}

export default ReactClass
