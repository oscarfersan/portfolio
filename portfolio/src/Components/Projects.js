import React from 'react'
import Project from './Project'

function Projects() {
    const projects = [
        {id:1, name:'Drink Up', image:"../Assets/preview1.png",link:'https://github.com/Tqs-project/DrinkUp-Frontend'},
        {id:2, name:'Pocket Movies', image:'',link:'https://github.com/PedroS50/PocketMovies_tpwDjango'},
        {id:3, name:'YourWeathView',image:'',link:'https://github.com/oscarfersan/TesteEQualidadeSoftware/tree/main/tqs1'}
    ]
    return (
        <div className="container mt-2">
            {projects.map((p)=>(
                <Project key={p.id} {...p}/>
            ))}
        </div>
    )
}

export default Projects
