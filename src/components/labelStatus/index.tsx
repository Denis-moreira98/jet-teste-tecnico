import { FaCheckCircle } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";

export function LabelStatus({ status }: { status: boolean }) {
   return (
      <div
         className={`font-medium p-2 rounded-md flex max-w-[85px] text-center ${
            status ? "text-green-800 bg-green-200" : "text-gray-900 bg-red-400"
         }`}
      >
         {status ? "Available" : "Blocked"}
      </div>
   );
}

export function LabelStatusMobile({ status }: { status: boolean }) {
   return (
      <div>
         {status ? (
            <FaCheckCircle size={21} color="green" />
         ) : (
            <IoIosCloseCircle size={21} color="#ff6060" />
         )}
      </div>
   );
}
