import './ProjectsStyle.css';
import { projectsInfo } from '../../Data/projectsInfo';
import { useState } from 'react';

const Projects = () => {

    const [hoveredProject, setHoveredProject] = useState(null);

    return (
        <div>
            <div>
                <h2 className='headerProjects'>PROJECTS</h2>
            </div>
            <div className='ProjectsContainer'>
                {projectsInfo.map(({ name, link, gitHub, image, id, technologies }) => (
                    <div key={id}>
                        <div className='ProjectItemContainer' onMouseEnter={() => setHoveredProject(id)}
                            onMouseLeave={() => setHoveredProject(null)}>
                            <div className='mocContainer'>
                                <h3 className='projectName'>{name}</h3>
                            </div>
                            {hoveredProject === id && (
                                <div className='technologiesContainer'>
                                    {technologies.map((item, id) => (
                                        <p className='technoPar' key={id}>{item}</p>
                                    ))}
                                </div>
                                )}
                            <div>
                                <img className='projectMoc' src={`${image}.png`} alt='projectPhoto' width="350px" />
                            </div>
                            <div className='projectLinkContainer'>
                                <a className='projectLink' target="_blank" rel="noopener noreferrer" href={gitHub}>View on GitHub</a>
                            </div>
                            <div className='projectLinkContainer'>
                                <a className='projectLink' target="_blank" rel="noopener noreferrer" href={link}>Visit WebSite</a>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;