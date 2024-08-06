import './AboutStyle.css';

const About = () => {
    return (
        <div>
            <div>
                <h2 className='aboutHeader'>ABOUT</h2>
            </div>
            <div>
                <p>Hello! My name is Ekaterina, and I live in the charming city of Oss in the Netherlands. I am a front-end developer with a passion for creating clean, user-friendly, and accessible web interfaces.</p>
                <p>My journey into coding started two years ago when I realized how much I enjoy bringing ideas to life through code. I began with self-education, taking online courses that laid a strong foundation. Wanting a more structured approach, I joined Canadian school CanSheCode.</p>
                <p>In CanSheCode school, I learned <span className='textDecoration'>HTML, CSS, Bootstrap, JavaScript, Node.js, React</span>, and <span className='textDecoration'>Redux</span>. This experience transformed my understanding of programming and gave me confidence in my skills.</p>
                <p>Right now, I continue to deepen my knowledge, exploring new technologies and improving as a developer.</p>
                <p>I am looking for a front-end developer role where I can apply my skills, grow professionally, and contribute to meaningful projects. I am enthusiastic, motivated, and always eager to learn.</p>
                <p>Please feel free to check out my work below.</p>
            </div>
        </div>
    )
}

export default About;