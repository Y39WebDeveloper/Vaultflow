import './Partener.css'
import DellLogo from '../../Assets/dell.svg'
import ZendeskLogo from '../../Assets/zendesk.svg'
import rakutenLogo from '../../Assets/rakuten.svg'
import PacificLogo from '../../Assets/pacific.svg'
import NCRLogo from '../../Assets/ncr.svg'
import LatticeLogo from '../../Assets/lattice.svg'
import TedLogo from '../../Assets/ted.svg'

const Partener = () => {
  return (
    <div className='partener'>
        <p>
            Trusted by teams at over 1,000 of the world’s leading organizations
        </p>
        <ul>
            <li><img src={DellLogo} alt="" /></li>
            <li><img src={ZendeskLogo} alt="" /></li>
            <li><img src={rakutenLogo} alt="" /></li>
            <li><img src={PacificLogo} alt="" /></li>
            <li><img src={NCRLogo} alt="" /></li>
            <li><img src={LatticeLogo} alt="" /></li>
            <li><img src={TedLogo} alt="" /></li>
        </ul>
    </div>
  )
}

export default Partener