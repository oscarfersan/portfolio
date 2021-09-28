import React from 'react'
import { AiOutlineDownload,AiOutlineLinkedin,AiOutlineGithub } from 'react-icons/ai';
import pdf from '../Assets/CV_OscarFernandezSanchez.pdf';
import '../CSS/RightHome.css';
import CarouselImage from './CarouselImage';
function RightHome() {
    const images = [
        [
            {id:1,url:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png'},
            {id:2,url:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Redis_Logo.svg/2560px-Redis_Logo.svg.png'},
            {id:3,url:'https://upload.wikimedia.org/wikipedia/commons/e/e5/Neo4j-logo_color.png'}
        ],
        [
            {id:1,url:'https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png'},
            {id:2,url:'https://cdn.iconscout.com/icon/free/png-256/postgresql-11-1175122.png'},
        ],
        [
            {id:1,url:'https://upload.wikimedia.org/wikipedia/de/e/e1/Java-Logo.svg'},
            {id:2,url:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png'},
            {id:3,url:'https://www.vhv.rs/dpng/d/313-3133777_javascript-transparent-background-svg-hd-png-download.png'}
        ],
        [
            {id:1,url:'https://www.import.io/wp-content/uploads/2017/10/React-logo-1.png'},
            {id:2,url:'https://raw.githubusercontent.com/kristerkari/react-native-svg-transformer/master/images/react-native-logo.png'},
            {id:3,url:'data:image/png;base64,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'}
        ]
    ]
    return (
        <div className="d-flex flex-column justify-content-around">
            <p>Name: Óscar Fernández Sánchez</p>
            <p>Studies: Computer Engineer (UAH)</p>
            <p>Languages: Spanish(Native) English(High) Portuguese(Basic)</p>

            <a href={pdf} className="downloadButton btn bg-dark">Download my CV <AiOutlineDownload className="downloadIcon" /></a>
            <div className="d-flex mx-auto row justify-content-between mt-3">
                <div className="col">
                    <a href="https://www.linkedin.com/in/óscar-fernández-sánchez-96123421a" target="_blank">
                        <AiOutlineLinkedin className="downloadIcon" style={{color:"black"}}/>
                    </a>
                </div>
                <div className="col">
                    <a href="https://github.com/oscarfersan" target="_blank">
                        <AiOutlineGithub className="downloadIcon" style={{color:"black"}}/>
                    </a>
                </div>
            </div>
            <div id="carouselExampleSlidesOnly" class="carousel slide mt-3 w-75 mx-auto" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="1"/>
                    {images.map((array)=>(
                        <div className="carousel-item" data-bs-interval="5000">
                            <CarouselImage class="d-block" array={array}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RightHome
