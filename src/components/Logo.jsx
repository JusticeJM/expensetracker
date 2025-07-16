export default function Logo({isFooter}){
    const baseStyle = "text-black text-xl font-semibold";
    const footerStyle = "text-white/90 text-xl font-semibold";
    
    return(
        <div>
            <h1 className={`${isFooter ? footerStyle : baseStyle}`}>
                Expenso
            </h1>
        </div>
    )
}