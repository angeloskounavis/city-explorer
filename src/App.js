import React from 'react'
import Header from './Header';
import Main from './Main';
import Footer from './Footer'
import './App.css'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}

  }

  render() {
    return(
      <>
      <Header/>
      <Main/>
      <Footer/>
      </>
    )
  }
}

export default App;

//   constructor(props) {
//     super(props);
//     this.state = {
//       city: '',
//       cityData: {},
//       errorMessage: '',
//       isError: false
//     }
//   }

//   // handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   let swData = await axios.get('https://swap.dev/api/people/?page=1');
//   //   // this.setState({
//   //   //   city: e.target.city.value
//   //   // });
//   //   this.setState({
//   //     starWarsData: swData.data.result
//   //   });
//   //   console.log(swData.data.results);
//   // }

//   // handleInputChange = (e) => {
//   //   this.setState({
//   //     city: e.target.value
//   //   });
//   // }

//   handleCityInput = (event) => {
//     // console.log(event.target.value);
//     this.setState({
//       city: event.target.value
//     });
//   };

//   handleCitySubmit = async (event) => {
//     try {
//       event.preventDefault();
//       console.log(this.state.city);
//       let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`;
//       console.log(url);
//       // Make a request to the API using the URL
//       let locationInfo = await axios.get(url)
//       // proof of life
//       console.log(locationInfo.data[0]);
//       // put the data from the API into State
//       this.setState({
//         cityData: locationInfo.data[0],
//         isError: false
//       });

//     } catch (error) {
//       this.setState({
//         errorMessage: error.message,
//         isError: true
//       })
//     }
//   }

//   render() {

//     return (
//       <>
//         <h1>Hello</h1>
//         <form onSubmit={this.handleCitySubmit}>
//           <label>
//             <input name='city' type='text' onChange={this.handleCityInput} placeholder='Please Search for a City' />
//           </label>
//           <button type='submit'>Explore!</button>
//         </form>
//         {this.state.isError ? 
//         <p>{this.state.errorMessage}</p> : 
//         <ul>
//           <li>City: {this.state.cityData.display_name}</li>
//           <li> latitude: {this.state.cityData.lat}</li>
//           <li>Longitude: {this.state.cityData.lon}</li>
//           <Image src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=12`} alt={this.state.cityData.display_name}></Image>
//         </ul>}
//        {this.state.isError ? <Alert className="alert" variant="danger"><Alert.Heading>And that my friend is an Error!</Alert.Heading><p>{this.state.errorMsg}</p></Alert> : <p className="alert"></p>}
//       </>


//     );
//   }
// }


// export default App;
