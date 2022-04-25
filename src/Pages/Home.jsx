import React from 'react'
import Announcement from '../Container/Announcement'
import Navbar from '../Container/Navbar'
import Slider from '../Container/Slider'


const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar/>
      <Slider/>
    </div>
  )
}

export default Home