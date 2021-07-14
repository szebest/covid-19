import { Link } from 'react-router-dom';
import image from '../../assets/covid-19.png'
import classes from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={classes.navbar}>
            <Link to='/'>
                <img src={image} alt="logo" width="120px" height="60px"/>
            </Link>
            <h1>Covid-19 stats</h1>
        </nav>
    )
}

export default Navbar;