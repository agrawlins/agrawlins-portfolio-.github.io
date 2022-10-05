import {useNavigate, Link} from 'react-router-dom'; // p5 import Link
import MainMugshot from '../../images/mugshots/Home Page Thumbnail.jpg'
import './header.css'

const Header = () => {
    const navigate = useNavigate()

    return(
        <nav className='header'> 
            <Link to="/" className='link'> 
                <img src={MainMugshot} className='header--logo'/>
            </Link> 
            <Link to="/history" className='link'> 
                <p>History</p>
            </Link>
            <Link to="/projects" className='link'> 
                <p>Projects</p>
            </Link>
            <Link to="/contact" className='link'> 
                <p>Contact</p>
            </Link>
        </nav>
    )
}

export default Header;