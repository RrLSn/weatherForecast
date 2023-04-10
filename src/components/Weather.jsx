import React, { useEffect, useState } from 'react'
import BackgroundSlider from './BackgroundSlider'
import axios from 'axios'

const Weather = () => {
    const [currentImg,setCurrentImg] = useState(0)
    const [data, setData] = useState()
    const [location, setLocation] = useState('')
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=895284fb2d2c50a520ea537456963d9c`

    const searchLocation = () => {
        axios.get(url)
        .then((res) => {setData(res.results)})
        .catch((err)=>{
            console.log(err+'This is not a valid city')
        })
        console.log(data)
    }

    // useEffect(() => {
        // searchLocation()
    // },[])

    const handleClick = (e) => {
        e.preventDefault()
        setLocation('')
        searchLocation()
        
    }

    setTimeout(() => {
        setCurrentImg(Math.floor(Math.random() * 6))
    },50000)

    const bgImgStyle = {
        backgroundImage: `url(${BackgroundSlider[currentImg].url})`,
        backgroundPosition: "absolute",
        backgroundSize: '100% 100%',
        height: '100%',
        width: '100%',
        top: "0",
        paddingTop: '40px',
        left: '0',
        zIndex: "-1" 
    }  
  return (
        <form onSubmit={handleClick} style={bgImgStyle} className='container'>
            <div className='w-[100%] flex justify-center text-black'>
            <input type="text" 
            value={location} 
            onChange={(e)=> setLocation(e.target.value)} 
            placeholder='Enter Location'
            className='w-[25rem] p-[0.5rem] rounded-full focus:outline-none'
            />
            </div>
            <div className="top">
                <div className="location h-[15rem] flex flex-col justify-between">
                    <h1 className='text-7xl font-[700]'>Location</h1>
                    <p>Lon:</p>
                    <p>Lat:</p>
                    <div className="temp">
                        <h1 className='text-5xl font-[500]'>65°F</h1>
                    </div>
                </div>
                <div className="desc">
                    <p>clouds</p>
                </div>
            </div>
            <div className="bottom">
                <div className="feels">
                    <p>65°F</p>
                    <p>Feels Like</p>
                </div>
                <div className="humidity">
                    <p>20</p>
                    <p>Humidity</p>
                </div>
                <div className="wind">
                    <p>12mpm</p>
                    <p>Wind Speed</p>
                </div>
            </div>
        </form>
  )
}

export default Weather