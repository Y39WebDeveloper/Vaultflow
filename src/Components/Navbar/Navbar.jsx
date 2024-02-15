import './Navbar.css'
import { Logo, Button } from '../../Components'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Logo />
        <ul className="nav">
            <li className="nav-link"><a href="#features">Features</a></li>
            <li className="nav-link"><a href="/">Pricing</a></li>
            <li className="nav-link"><a href="/">AboutUs</a></li>
        </ul>
      <Button content='Download the app' sm />
    </div>
  )
}

export default Navbar