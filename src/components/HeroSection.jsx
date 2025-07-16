import HeroCard from "./HeroCard";
import HeroHeader from "./HeroHeader";

export default function HeroSection(){
    return(
        <div className="px-12 py-8 border border-gray-200 shadow-lg mx-6 rounded-2xl lg:mx-24">
            <HeroHeader/>
            <div className="flex flex-col items-center justify-between gap-3 mt-6 lg:flex-row">
                <HeroCard/>
                <HeroCard/>
                <HeroCard/>
            </div>       
        </div>
    )
}