export default function ModalOverlay({children}) {
    return(
        <div className="w-full h-full inset-0 fixed top-0 right-0 left-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
            {children}
        </div>
    )
}