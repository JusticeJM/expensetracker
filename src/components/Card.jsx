
export default function Card({title, description, children}){
    return(
        <div className="w-full px-5 py-4 bg-white shadow-lg rounded-lg font-sans">
            <div className="p-2 flex item-center justify-center bg-purple-100 rounded-md size-10 mb-5">
                {children}
            </div>
            <div className="">
                <h5 className="text-xl font-medium mb-1">{title}</h5>
                <p className="text-sm font-normal text-black/70">{description}</p>
            </div>
        </div>
    )
}