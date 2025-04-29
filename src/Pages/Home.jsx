import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import Banner from "../Components/Banner"
import WhyChooseUs from "../Components/WhyChooseUs"
import Statistics from "../Components/Statistics"
import ImageScroll from "../Components/ImageScroll"
import HowItWorks from "../Components/HowItWorks"
import CallToAction from "../Components/CallToAction"
import Footer from "../Components/Footer"
const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero/>
            <Banner/>
            <WhyChooseUs/>
            <Statistics/>
            <ImageScroll/>
            <HowItWorks/>
            <CallToAction/>
            <Footer/>
        </div>
    )
}

export default Home