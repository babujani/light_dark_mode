import './index.css'
import {Component} from 'react'

class LightDarkMode extends Component {
  state = {changeBtn: true, changeBg: 'card'}

  liteMode = () => {
    this.setState(prevState => ({
      changeBtn: !prevState.changeBtn,
      changeBg: 'card2',
    }))
  }

  darkMode = () => {
    this.setState(prevState => ({
      changeBtn: !prevState.changeBtn,
      changeBg: 'card',
    }))
  }

  render() {
    const {changeBtn, changeBg} = this.state
    return (
      <div className="container">
        <div className={changeBg}>
          <h1>Click To Change Mode</h1>
          {changeBtn ? (
            <button onClick={this.liteMode} className="button" type="button">
              Light Mode
            </button>
          ) : (
            <button onClick={this.darkMode} className="button" type="button">
              Dark Mode
            </button>
          )}
        </div>
      </div>
    )
  }
}
export default LightDarkMode
