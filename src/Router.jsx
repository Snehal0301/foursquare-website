import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Reviews from './components/reviews/Reviews'
import App from './App'
const Router = () => {
    const [data, setData] = useState({})
    const getData = (data) => {
        setData(data)
    }
    return (
        <Routes>
            <Route path='/' element={<App getData={getData} />} />
            <Route path='/reviews' element={<Reviews data={ data} />} />
        </Routes>
    )
}

export default Router