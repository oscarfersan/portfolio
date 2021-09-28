import React from 'react'
import RightHome from './RightHome'
import '../CSS/Home.css'
import DevIcon from '../Assets/devIcon.png'
import useTitle from '../hooks/useSeo'
function Home() {
    useTitle({description:'Portfolio of Oscar Fernandez Sanchez',title:'Home'})
    return (
        <div className="container-fluid mt-2 d-flex w-100 row justify-content-around">
            <div className="col-3">
                <img className="img-fluid"
                 src="https://icon-library.com/images/web-development-icon-png/web-development-icon-png-28.jpg" alt="Oscar"/>
            </div>
            <div className="col-7">
                <RightHome/>
            </div>
        </div>
    )
}

export default Home
