import React from 'react'
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ''
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    let swData = await axios.get('https://swap.dev/api/people/?page=1');
    // this.setState({
    //   city: e.target.city.value
    // });
    this.setState({
      starWarsData: swData.data.result
    });
    console.log(swData.data.results);
  }

  handleInputChange = (e) => {
    this.setState({
      city: e.target.value
    });
  }




  render() {

    this.state.starWarsData.map((char, idx) => {
      return <li key={idx}>{char.name}</li>;
    });
    return (
      <>
        <h1>City Explorer</h1>
        <from onSubmit={this.handleSubmit}>
          <label>Search for a City
            <input type="text" name="city" onChange={this.handleInputChange} />
          </label>
          <button type="submit">Search for a City</button>
        </from>
        <label>
          <input name="city" type="text" onChange/>
        </label>
        <button type="submit">Get City Data</button>
        {/* <uL> */}
          {/* {swCharacters} */}
        {/* </uL> */}
      </>
    )
  }
}


export default App