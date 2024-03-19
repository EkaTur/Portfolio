import './HeaderStyle.css';
import github from '../../Assets/github.png';
import linked from '../../Assets/linkedin.png';
import mail from '../../Assets/mail.png';
import phone from '../../Assets/telephone.png';
import { useEffect, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import { TextPlugin } from "gsap/TextPlugin";

const Header = () => {

    const [activeLink, setActiveLink] = useState('about');

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById('about').getBoundingClientRect().top;
            const projectsSection = document.getElementById('projects').getBoundingClientRect().top;
            const certificatesSection = document.getElementById('certificates').offsetTop;
            const contactsSection = document.getElementById('contacts').getBoundingClientRect().bottom;

            const scrollPosition = window.scrollY || window.pageYOffset;
            const windowHeight = window.innerHeight;

            if (contactsSection <= window.innerHeight) {
                setActiveLink('contacts');
            } else if (scrollPosition + windowHeight >= certificatesSection) {
                setActiveLink('certificates');
            } else if (scrollPosition >= projectsSection) {
                setActiveLink('projects');
            } else if (scrollPosition >= aboutSection) {
                setActiveLink('about');
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    gsap.registerPlugin(TextPlugin);

    useLayoutEffect(() => {
        gsap.to('.headerFrontEnd', {
            duration: 2,
            text: {
                value: "Front-end Developer"
            }
        });

        gsap.fromTo('.headerName', { opacity: 0, x: -100, delay: 1 }, { opacity: 1, x: 0, duration: 2 });

        gsap.fromTo('.listItem', { opacity: 0, x: -100, delay: 1 }, { opacity: 1, x: 0, stagger: 0.2, duration: 2 });

        gsap.fromTo('.headerLink', { opacity: 0 }, { opacity: 0.7, stagger: 0.4, duration: 2, delay: 1 });
    }, [])
    
    return (
        <div>
            <h1 className='headerName'>Ekaterina Savoskina</h1>
            <h3 className='headerFrontEnd'></h3>
            <nav>
                <ul>
                    <li className={activeLink === 'about' ? "activeHR" : "originHR listItem"}>
                        <a href="#about" className={activeLink === 'about' ? "activeStyle" : "origin link"}><span ><hr></hr></span>ABOUT</a>
                    </li>
                    <li className={activeLink === 'projects' ? "activeHR" : "originHR listItem"}>
                        <a href="#projects" className={activeLink === 'projects' ? "activeStyle" : "origin"}><span><hr></hr></span>PROJECTS</a>
                    </li>
                    <li className={activeLink === 'certificates' ? "activeHR" : "originHR listItem"}>
                        <a href="#certificates" className={activeLink === 'certificates' ? "activeStyle" : "origin"}><span><hr></hr></span>CERTIFICATES</a>
                    </li>
                    <li className={activeLink === 'contacts' ? "activeHR" : "originHR listItem"}>
                        <a href="#contacts" className={activeLink === 'contacts' ? "activeStyle" : "origin"}><span><hr></hr></span>CONTACTS</a>
                    </li>
                </ul>
            </nav>
            <div className='HeaderContactsContainer'>
                <a href='https://github.com/EkaTur' className='headerLink' target="_blank" rel="noopener noreferrer"><img src={github} alt='gitHub' className='iconContacts' width='60px'/></a> 
                <a href='https://www.linkedin.com/in/ekaterina-savoskina/' className='headerLink' target="_blank" rel="noopener noreferrer"><img src={linked} alt='linkedIn' className='iconContacts' width='60px'/></a> 
                <a href='mailto:savosya23@gmail.com'className='headerLink'><img src={mail} alt='mail' className='iconContacts' width='60px'/></a> 
                <a href='tel:+31686158639' className='headerLink'><img src={phone} alt='phone' className='iconContacts' width='60px'/></a>
            </div>
        </div>
    )
}

export default Header;
