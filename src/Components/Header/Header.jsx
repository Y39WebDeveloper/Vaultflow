import './Header.css'
import { Navbar, Hero } from '../../Components'

const Header = () => {
  return (
    <header className='header'>
          <Navbar />
          <Hero />
    </header>
  )
}

export default Header