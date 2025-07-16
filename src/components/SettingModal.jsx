export default function SettingModal({children, name}){
    return(
        <div className="inline-flex space-x-3 items-center w-full px-2 py-1 hover:bg-sky-600 hover:text-white">
            <div>
                {children}
            </div>
            <span className="text-sm font-normal">{name}</span>
        </div>
    )
}