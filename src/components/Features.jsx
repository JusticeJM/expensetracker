import Card from "./Card";
import { IoMdTimer } from "react-icons/io";
import { IoFlash } from "react-icons/io5";

export default function Features(){
    const title1 = "Manage expenses easily";
    const description1 = " Simplify the complexities of expense management through seemless integration of intuitive tools.";
    const title2 = "Save your time"; 
    const description2 = "Reduce the time required to manage your expenses and focus on cool stuffs.";
    const title3 = "Quick Actions"; 
    const description3 = "Streamline your workflow with easy and intuitive shortcuts.";

    return(
        <div className="bg-gray-50 py-36 px-6">
            <div className="text-center py-1.5 border border-gray-300 w-22 mx-auto rounded-lg">
                <span className="text-base font-medium">Why Us.</span>
            </div>
            <section className="text-center my-4">
                <h3 className="text-3xl font-medium mb-3 md:text-4xl">
                    Your expenses are always tracked.
                </h3>
                <p className="text-sm font-normal text-gray-700 px-16 md:px-0">
                    A management tool for everyone who values managing expenditures
                </p>
            </section>
            <div className="px-8 flex items-start justify-between gap-3 flex-col md:flex-row">
                <Card title={title1} description={description1}>
                    <IoFlash className="size-6 text-black/90"/>
                </Card> 
                <Card title={title2} description={description2}>
                    <IoMdTimer className="size-6  text-black/90"/>
                </Card>  
                <Card title={title3} description={description3}>
                    <IoFlash className="size-6  text-black/90"/>
                </Card>  
            </div>
        </div>
    )
}