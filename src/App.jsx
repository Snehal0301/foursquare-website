import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import Card from './components/card/Card'
import Reviews from './components/reviews/Reviews'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const App = (props) => {
  const [search, setSearch] = useState("")
  const [hotelDetail, setHotelDetail] = useState(false)
  const [nearbyHotel, setNearByHotel] = useState({})
  const [showMarker, setShowMarker] = useState(false)
  const [current, setCurrent] = useState({})

  const [display, setDisplay] = useState(true)

  useEffect(() => {
    props.getData(current)
  }, [current])


  const [coord, setCoord] = useState({
    lat: 0,
    lng: 0
  })

  const loc = {
    lat: 13.3409,
    lng: 74.7421
  }

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.API_KEY
  })

  const handleForm = async (e) => {
    e.preventDefault();

    // get coordinates of a location
    const direction = await getCoords();


    console.log("coordinates", direction);

    // get list of restaurants
    await getHotels(direction);
    setCoord(direction)

  }

  console.log("Coord", coord)


  const getCoords = async () => {
    const locationResponse = await axios.get(`http://api.positionstack.com/v1/forward?access_key=186301f635e7f6052d50c96378c7c260&query=${search}`)

    console.log("Location user", locationResponse.data.data[0]);

    const direction = {
      lat: locationResponse.data.data[0].latitude,
      lng: locationResponse.data.data[0].longitude
    }
    return direction;
  }

  const getHotels = async (direction) => {
    await axios.get(`https://developers.zomato.com/api/v2.1/geocode?lat=${direction.lat}&lon=${direction.lng}`, {
      headers: {
        Accept: "application/json",
        'user-key': "5ffb698e3d9a8ea8d51fb8847c216058",
      }
    }).then((res) => {
      console.log("response from gethotels", res.data.nearby_restaurants)
      setNearByHotel(res.data.nearby_restaurants)
      setShowMarker(true)
      console.log("Nearby hotel outside", coord)
    }).catch((err) => {
      console.log("Error", err);
    })
  }

  const handleSearch = async (e) => {
    setSearch(e.target.value)
  };

  if (!isLoaded) {
    return <h1>loading...</h1>
  }


  return (
    <div className='app'>
      {/* navbar */}
      <nav>
        <div className="logo">
          <img src={require('../src/assets/icons/logo.png')} alt="Logo" />
          <form className="search" onSubmit={handleForm}>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder='Search' value={search} onChange={handleSearch} />
          </form>
        </div>
      </nav>

      <main>
        {

          hotelDetail && (

            display &&
              <section id="mySidenav"
                className="sidenav">

                {
                  nearbyHotel.map((ele, i) => {
                    return (
                      <div className="card-list" onClick={() => {console.log(ele) }}>
                        {/* <Link to='/reviews'> */}
                        <Card search={search} details={ele} index={i} />
                        {/* </Link> */}
                      </div>
                    )
                  })
                }
              </section>
              
          )
        }

        {/* google map box */}

        {
          display ?
            <GoogleMap
              center={loc ? loc : coord}
              zoom={15}
              mapContainerStyle={{ width: "100%", height: "100%" }}
              options={{
                zoomControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false
              }}
            >

              {
                showMarker ?
                  nearbyHotel.map((ele, i) => {
                    let marker = {
                      lat: JSON.parse(ele.restaurant.location.latitude),
                      lng: JSON.parse(ele.restaurant.location.longitude)
                    };

                    console.log("Marker", ele)
                    console.log("Marker-coord", marker)


                    return (
                      <Marker key={i} position={marker} onClick={() => setHotelDetail(!hotelDetail)} />
                    )
                  }) :

                  <Marker position={loc} onClick={() => setHotelDetail(!hotelDetail)} />
              }

            </GoogleMap>
            :
            <>

              {/* <nav>
                <div className="logo">
                  <img src={require('../src/assets/icons/logo.png')} alt="Logo" />
                  <form className="search" onSubmit={handleForm}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder='Search' value={search} onChange={handleSearch} />
                  </form>
                </div>
              </nav> */}
              <Reviews />
            </>
        }


      </main>

    </div >
  )
}

export default App