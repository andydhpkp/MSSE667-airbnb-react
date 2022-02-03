/* import React, {Component} from 'react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, World Implementation!</h1>
      </div>
    )
  }
}

export default App */

import React, { useState } from "react";
import axios from "axios";

function App() {
  const [listings, setListings] = useState(null);
  const apiURL = "http://localhost:8082/listings/";
  const fetchData = async () => {
    const response = await axios.get(apiURL);
    setListings(response.data)
  };
  return (
    <div className="main">
      <h1>Display Listings</h1>

      <div>
        <button className="fetch-btn" onClick={fetchData}>
          Display
        </button>
        <br />
      </div>
      <div className="listings">
        {listings && listings.map((listing, index) => {
          if(listing.name === null) {

          } else {
          return (
            <div className="listing" key={index}>
              <h2>Listing {index}</h2>
              <h3>{listing.name}</h3>
            </div>
          )
          }
        })}
      </div>
    </div>
  )
}

export default App;