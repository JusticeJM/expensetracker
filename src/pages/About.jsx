import Footer from "../components/Footer";
import HomeNav from "../components/HomeNav";

export default function About(){
    return(
        <div className="w-full h-screen">
            <HomeNav/>
            <div className="text-center text-2xl text-violet-600 font-extrabold py-40">About page</div>
            <Footer/>
        </div>
        
    )
}