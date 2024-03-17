import './ContactsStyle.css';
import call from '../../Assets/telephone.png';
import mail from '../../Assets/mail.png';
import git from '../../Assets/github.png';
import linked from '../../Assets/linkedin.png';

const Contacts = () => {
    return (
        <div className='BigContactsContainer'>
            <h2 className='contactsHeader'>CONTACTS</h2>
            <div>
                <div className='flexContacts'>
                    <img src={call} alt="phone" width='40px' />
                    <a className='contactLink' href="tel:+31686158639">+31686158639</a>
                </div>
            </div>
            <div >
                <div className='flexContacts'>
                    <img src={mail} alt="email" width='40px' />
                    <a className='contactLink' href="mailto:savosya23@gmail.com">savosya23@gmail.com</a>
                </div>
            </div>
            <div >
                <div className='flexContacts'>
                    <img src={git} alt="git" width='40px' />
                    <a className='contactLink' target="_blank" rel="noopener noreferrer" href="https://github.com/EkaTur">https://github.com/EkaTur</a>
                </div>
            </div>
            <div >
                <div className='flexContacts'>
                    <img src={linked} alt="linked" width='40px' />
                    <a className='contactLink' target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ekaterina-savoskina/">https://www.linkedin.com/in/ekaterina-savoskina/</a>
                </div>
            </div>
        </div>
    )
}

export default Contacts;