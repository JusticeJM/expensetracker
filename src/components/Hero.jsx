import { BsArrowRightCircle } from "react-icons/bs";
import ButtonLink from "./ButtonLink";

export default function Hero(){
    return(
        <div className="py-10 w-full lg:py-18  ">
            <div className=" text-black font-sans mb-3">
                <section className="pb-4">
                    <h1 className="text-3xl font-bold text-center pb-3 sm:text-4xl sm:px-12 md:text-5xl lg:text-6xl lg:px-48 lg:pb-4">
                        Welcome to the new age of expense management.
                    </h1>
                    <p className="px-4 text-sm font-light text-center text-black/70 sm:text-base sm:font-normal sm:px-18 md:px-26 lg:px-92 lg:pt-4">
                        Stay organized and optimize your expenditures with our smart solution.
                        Set up a personal account online and manage your expenses easily. <i>Get started for free.</i> 
                    </p>
                </section>
            </div>
            <div className="flex items-center justify-center gap-3">
                <ButtonLink>
                    Learn more
                </ButtonLink>
                <ButtonLink primaryLink>
                    Get started <BsArrowRightCircle className="inline-flex items-center ml-2 size-4"/>
                </ButtonLink>  
            </div>
            
        </div>
    )
}