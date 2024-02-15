import './Section.css'

import { Button } from '../../Components'

const Section = () => {
  return (
    <div className='section'>
      <h1>
        Our powerful analytics provides invaluable insights.
      </h1>
      <p>
        Unlock the power of data with our cutting-edge analytics product. Get instant insights with our user-friendly Analytics Dashboard, and take advantage of our innovative digital credit tokens to reward your customers and incentivize engagement.
      </p>
      <Button content='Download the app' alt />
    </div>
  )
}

export default Section