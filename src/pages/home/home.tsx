import HeroSection from "../../components/hero-section/hero-section"
import PopularTours from "../../components/popular-tours/popular-tours"
import Testimonials from "../../components/testamonial/testamonial"
import WhyChooseUs from "../../components/why-choose-us/why-choose-us"


function Home() {
  return (
    <div>
      <HeroSection/>
      <WhyChooseUs/>
      <PopularTours/>
      <div className="mx-auto mt-10">
        <h1 className="text-black font-extrabold text-[48px] text-center mb-4">Plane Your Vacations</h1>
        <img src="/images/image 1.png" alt="" />
      </div>
      <Testimonials/>
    </div>
  )
}

export default Home
