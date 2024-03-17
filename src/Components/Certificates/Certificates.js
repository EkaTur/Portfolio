import './CertificatesStyle.css';
import certifReact from '../../Assets/certificateR.png';
import certifFrontEnd from '../../Assets/certificateF.png';
import certifAnim from '../../Assets/certificateA.PNG';
import certifBootstrap from '../../Assets/certificateB.png';

const Certificates = () => {
    return (
        <div>
            <div>
                <h2 className="certificatesHeader">CERTIFICATES</h2>
            </div>
            <div className='CertificateContainer'>
                <img className='certificate' src={certifReact} alt="certificate" width='300px' />
                <img className='certificate' src={certifFrontEnd} alt="certificate" width='300px' />
                <img className='certificate' src={certifBootstrap} alt="certificate" width='300px' />
                <img className='certificate' src={certifAnim} alt="certificate" width='300px' />
            </div>
        </div>
    )
}

export default Certificates;