import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HomeNav from "../components/HomeNav";

export default function Landing() {
    return(
        <div>
            <HomeNav/>
            <Hero/>
            <Features/>
            <Footer/>
        </div>
    )
}