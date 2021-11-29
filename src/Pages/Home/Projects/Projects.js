import React from 'react';
import ProjectShow from './ProjectShow';

const Projects = () => {
    return (
        <div style={{background:"black"}}>
            <h1 className="text-6xl font-extrabold p-12 text-white">My projects</h1>
            <ProjectShow></ProjectShow>
        </div>
    );
};

export default Projects;