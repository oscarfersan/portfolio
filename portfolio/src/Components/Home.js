import React from 'react'
import RightHome from './RightHome'
import '../CSS/Home.css'
import DevIcon from '../Assets/devIcon.png'
function Home() {
    return (
        <div className="container mt-2 d-flex w-100 row justify-content-between">
            <div className="col-2">
                <img className="image"
                 src="https://icon-library.com/images/web-development-icon-png/web-development-icon-png-28.jpg" alt="Oscar"/>
            </div>
            <div className="col-8">
                <RightHome/>
            </div>
        </div>
    )
}

export default Home
