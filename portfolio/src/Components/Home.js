import React from 'react'
import RightHome from './RightHome'
import '../CSS/Home.css'

function Home() {
    return (
        <div className="container mt-2 d-flex w-100 row justify-content-between">
            <div className="col-2">
                <img className="image"
                 src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Oscar"/>
            </div>
            <div className="col-8">
                <RightHome/>
            </div>
        </div>
    )
}

export default Home
