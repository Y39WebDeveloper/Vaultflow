import './Footer.css'
import { Logo } from '../../Components'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="row">
            <div className="col">
                <div className="block">
                    <h4>Contact</h4>
                    <ul>
                        <li>Work inquires: work@vaultflow.com</li>
                        <li>PR and speaking: press@vaultflow.com</li>
                        <li>New business: newbusiness@vaultflow.com</li>
                    </ul>
                </div>
                <div className="block">
                    <h4>Careers</h4>
                      <ul>
                          <li>Careers@vaultflow.com</li>
                      </ul>
                </div>
            </div>
            <div className="col">
                <div className="block">
                    <h4>Address</h4>
                    <ul>
                          <li>398 11th Street, Floor 2 <br/>San Francisco, CA 94103</li>
                    </ul>
                </div>
                <div className="block">
                <h4>Social</h4>
                    <ul>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Tik Tok</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="row-2">
            <p>&copy; 2023 Vaultflow. All Rights Reserved.</p>
            <Logo />
        </div>
    </footer>
  )
}

export default Footer