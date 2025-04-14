import { PrimaryButton, SecondaryButton } from '../../components';
import './Hero.css';


const Hero = () => {
  return (
    <div className='hero-main'>
        <div className='hero-text'>
            <h6 className='hero-subtitle'>Welcome To Cyborg</h6>
            <h4 className='hero-title'><strong>Browse</strong> Our Popular Games Here</h4>
            <PrimaryButton>Browse Now</PrimaryButton>
            {/* test */}
        </div>
    </div>
  )
}
export default Hero;