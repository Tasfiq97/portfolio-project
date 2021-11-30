import React from 'react';
import ProjectShow from './ProjectShow';

const Projects = () => {
    return (
        <div style={{background:"black"}} id="projects">
            <h1 className="text-6xl font-extrabold pt-20 text-white">My projects</h1>
            <h4 className="text-3xl font-semibold p-2 text-white">The projects I built</h4>
            <ProjectShow></ProjectShow>
        </div>
    );
};

export default Projects;