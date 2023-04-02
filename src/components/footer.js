import gitLogo from '../assets/images/github.png';
import linkLogo from '../assets/images/linkedIn.png';
import stackLogo from '../assets/images/stackoverflow.png';

function footer() {
    return (
        <div className='footer'>
            <span className='footer-center'>My profiles:</span>
            <a href='https://github.com/jnollen23' target='blank'>
                <img src={gitLogo} className='logo-profiles' alt='github logo and link' />
            </a>
            <a href='https://www.linkedin.com/in/jacob-nollen-70827573/' target='blank'>
                <img src={linkLogo} className='logo-profiles' alt='linkedin logo and link' />
            </a>
            <a href='https://stackoverflow.com/users/21545556/jacob-nollen' target='blank'>
                <img src={stackLogo} className='logo-profiles' alt='stack overflow logo and link' />
            </a>
        </div>
    );
};

export default footer;