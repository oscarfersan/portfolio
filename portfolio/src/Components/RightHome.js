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
            {id:2,url:'http://assets.stickpng.com/images/584815fdcef1014c0b5e497a.png'},
        ],
        [
            {id:1,url:'https://w7.pngwing.com/pngs/578/816/png-transparent-java-class-file-java-platform-standard-edition-java-development-kit-java-runtime-environment-coffee-jar-text-class-orange-thumbnail.png'},
            {id:2,url:'https://e7.pngegg.com/pngimages/621/411/png-clipart-computer-icons-python-anaconda-anaconda-angle-other-thumbnail.png'},
            {id:3,url:'https://www.vhv.rs/dpng/d/313-3133777_javascript-transparent-background-svg-hd-png-download.png'}
        ],
        [
            {id:1,url:'https://www.import.io/wp-content/uploads/2017/10/React-logo-1.png'},
            {id:2,url:'https://raw.githubusercontent.com/kristerkari/react-native-svg-transformer/master/images/react-native-logo.png'},
            {id:3,url:'https://quintagroup.com/cms/js/js-image/javascript-logo.png/@@images/8c64c4b9-4e1c-4c26-9b5e-78d85e3130a9.png'}
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
