import './Hero.css'
import { Button } from '../../Components'
import HeroImg from './hero.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-content">
                <p className="pill">
                    We just raised $20M in Series B. Learn more
                </p>
                <h1>
                    Modern analytics <br/>for the modern world
                </h1>
                <p className='paragraph'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                </p>
                <div className="btns">
                    <Button content='Download the app' />
                    <Button content='Talk to an expert' alt />
                </div>
            </div>
            <div className="hero-img">
                <img src={HeroImg} alt="hero" />
            </div>
        </div>
    )
}

export default Hero