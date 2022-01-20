import React from 'react'
import Northern from './image/northern.jpg'
import Southern from './image/Southern.jpg'
import './Hemisphere.css'

const hemisphereConfig = {
    Northern: {
        text: "it's is northern hemisphere",
        picture: Northern
    },
    Southern: {
        text: "it's is southern hemisphere",
        picture: Southern
    }
}

const DisplayHemisphere = (props) => {
    const { latitude } = props;


    const hemisphere = latitude > 0 ? 'Northern' : 'Southern'
    const { text, picture } = hemisphereConfig[hemisphere]
    return (

        <div className={hemisphere}>
            <div className='ui raised text container segment'>
                <div className='image'>
                    <img src={picture} alt='Lỗi hình ảnh' />
                </div>
                <div className='ui teal bottom attached label'>
                    <h1> {text}</h1>
                </div>
            </div>


        </div>
    )
}

export default DisplayHemisphere;