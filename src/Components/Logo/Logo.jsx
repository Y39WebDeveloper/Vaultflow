import './Logo.css'
import LogoImg from './logo.png'

function Logo() {
    return (
        <a className='logo' href='/'>
            <img src={LogoImg} alt="" />
        </a>
    )
}

export default Logo