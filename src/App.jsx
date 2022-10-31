import React from 'react'
import './App.css'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
const App = () => {

  const { isLoaded } = useLoadScript({
    googlMapsApiKey: process.env.API_KEY
  })

  const loc = {
    lat: 13.381526,
    lng: 74.738556
  }

  if (!isLoaded) {
    return <h1>loading...</h1>
  }
  return (
    <div className='app'>
      {/* navbar */}
      <nav>
        <div className="logo">
          <img src={require('../src/assets/icons/logo.png')} alt="Logo" />
          <div className="search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder='Search' />
          </div>
        </div>
      </nav>

      {/* google map box */}

      <GoogleMap
        center={loc}
        zoom={15}
        mapContainerStyle={{ width: "100%", height: "100%" }}
      >
        <Marker position={loc} />
      </GoogleMap>
    </div >
  )
}

export default App