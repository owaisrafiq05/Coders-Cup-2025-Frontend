import Navbar from '../components/GlobalComponents/Navbar'
import AboutSection from '../components/HomeComponents/About'
import Hero from '../components/HomeComponents/Hero'

const Home = () => {
  return (
    <div className='bg-[#FFF8E7] min-h-screen'>
        <Navbar/>
        <Hero/>
        <AboutSection/>
    </div>
  )
}

export default Home