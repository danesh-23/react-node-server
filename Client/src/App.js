 import React , { Component } from '../node_modules/@types/react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = { message: null, name: null }
  }

  componentDidMount() {
    this.callBackendAPI()
    .then(res => this.setState({ message: res.message, name: res.name}))
    .catch(err => console.log(`Error occured: ${err}`))
    }

  callBackendAPI = async () => {
    const response = await (await fetch("/api/data"))
    const body = await response.json()

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body
  }

  render() {
    let isLoading = false
    this.state.name ? isLoading = true : isLoading = false
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {isLoading ? <p>Saying {this.state.message} from {this.state.name}</p> : null}
      </header>
    </div>
    )
  }
}

export default App;
