import './AboutStyle.css';

const About = () => {
    return (
        <div>
            <div>
                <h2 className='aboutHeader'>ABOUT</h2>
            </div>
            <div>
                <p>Hello! My name is Ekaterina, I live in the Netherlands, in small but beautiful city Oss. And I am an ambitious aspiring front-end developer. My journey with coding began two years ago when I realized that it was exactly what I wanted to pursue.</p>
                <p>My path started with self-education through free online courses, which gave me foundational knowledge and a drive for further development. Gradually, I understood that my ambitions required a more structured approach to learning, so I joined courses at the Canadian school CanSheCode.</p>
                <p>At CanSheCode, I immersed myself in the world of web development, learning technologies such as <span className='textDecoration'>HTML, CSS, Bootstrap, JavaScript, React,</span> and <span className='textDecoration'>Redux</span>. This experience transformed my understanding of programming and gave me confidence in my skills.</p>
                <p>Currently, I am actively studying <span>Node.js</span> to expand my technology stack and delve deeper into the realm of server-side development. My goal is to become a sought-after professional.</p>
                <p>I am seeking internship opportunities or a junior developer position where I can apply my knowledge in practice, work with a team of professionals, and continue learning, advancing in my career. I am full of enthusiasm and ready for new challenges because there is nothing more exciting for me than creating something new with code and constantly improving.</p>
                <p>Please feel free to review my work, which is presented below. I would be delighted to join a team where I can contribute and continue my professional development!</p>
            </div>
        </div>
    )
}

export default About;