import Footer from "../components/Footer";
import HomeNav from "../components/HomeNav";

export default function Feature(){
    return(
        <div>
            <HomeNav/>
            <div className="text-center text-2xl text-violet-600 font-extrabold py-40">
                Features page
            </div>
            <Footer/>
        </div>
    )
}