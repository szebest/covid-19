import classes from './Footer.module.css'

function Footer() {
    return (
        <footer className={classes.footer}>
            <p>&copy; Copyright {new Date().getFullYear()}, Mateusz Szebestik</p>
        </footer> 
    )
}

export default Footer;