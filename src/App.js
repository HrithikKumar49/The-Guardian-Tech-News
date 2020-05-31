import React from 'react';
import './App.css';
import axios from 'axios';
import logo from './logo.png'


class App extends React.Component {

  constructor() {
    super();
    
    this.state = {
      headlines: []
    };
  }

  async componentDidMount() {
    try {
      const url = "https://content.guardianapis.com/technology";
      const api_key = "2bcc5ab8-2963-4b20-8bd4-ce30f67268e8";
      const configs = {
        params: {
          "api-key": api_key
        }
      };
      const res = await axios.get(url, configs);
      console.log(res.data);
      let result = [];
      res.data.response.results.forEach(element => {
        result.push(element);
      });

      this.setState({
        headlines: result
      });
    } catch (err) {
      console.log(err);
    }
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="The Gaurdian logo"></img>
          <h1>
            Tech News
          </h1>
          
          <h3>
            Top Headlines
          </h3>
          <ul style={{listStyleType:'none'}}>
            {this.state.headlines.map((element) => {
              return <li style={{margin:'10px'}}><a href={element.webUrl} style={{color:'white'}}>{element.webTitle}</a></li>
            })}
          </ul>
        </header>
      </div>);
  }
}

export default App;
