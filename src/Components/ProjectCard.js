import React from 'react'
import './ProjectCard.css'

function ProjectCard({image,codelink,description}) {
    return (
        <div className="projectcard-container">
            <img src={image} alt="" className="image"/>
            <div className="card-info">
                <div className="text">
                    <div className='buttons'>
                        <button onClick={()=>{window.location.href=`${codelink}`}}>Show</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
