import ModalOverlay from "./ModalOverlay";
import { MdClose, MdDeleteOutline } from "react-icons/md";

export default function DeleteModal({hideModal, confirmDelete}) {

    return(
      <ModalOverlay>
        <div className="max-w-xs px-4 py-2 bg-white shadow-md border border-gray-200 rounded-md">
            <div className="flex justify-end">
                <button className="inline-flex items-center justify-center size-8 rounded-lg bg-gray-100 hover:bg-gray-200"
                    onClick={hideModal}
                >
                    <MdClose className="size-5"/>
                </button>
            </div>
            <div className="flex items-center flex-col text-center mb-4">
                <MdDeleteOutline className="size-8 text-gray-500 mb-2"/>
                <span className="text-base font-normal text-gray-600">
                    Expense will be permanently deleted, proceed?
                </span>
            </div>
            <div className="flex items-center justify-center gap-3 mb-4">
                <button className="px-4 py-2 text-sm font-medium cursor-pointer bg-gray-50 border border-gray-200 text-gray-800 rounded-md hover:bg-gray-100"
                    onClick={hideModal}
                >
                    Cancel
                </button>
                <button className="px-4 py-2 text-sm font-medium cursor-pointer bg-red-500 text-gray-50 rounded-md hover:bg-red-400"
                    onClick={confirmDelete}
                >
                    Delete
                </button>
            </div>
        </div>
      </ModalOverlay>
    )
}