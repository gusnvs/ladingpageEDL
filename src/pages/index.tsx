import { WhitePartLogo } from '../components/WhitePartLogo'
import { Hero } from '../components/Hero'
import { CountDown } from '../components/CountDown'
import { LearningEDJ } from '../components/LearningEDJ'
import { Info } from '../components/Info'
import { Testimony } from '../components/Testimony'
import { Price } from '../components/Price'
import { About } from '../components/About'
import { Footer } from '../components/Footer'
import { Qualifications } from '../components/Qualifications'
import { Information } from '../components/Information'
import Starting from '../components/Starting'

const Index = () => {
  return (
    <>
      <WhitePartLogo />
      {/* <Hero /> */}
      <Starting />
      <CountDown />
      <LearningEDJ />
      <Information />
      {/* <Info /> */}
      <Testimony />
      <Price />
      <About />
      <Footer />
    </>
  )
}

export default Index
