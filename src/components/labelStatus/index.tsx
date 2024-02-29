import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

export function LabelStatus({ status }: { status: boolean }) {
   return (
      <label
         className={`font-medium p-[5px] flex justify-center rounded-md max-w-[97px] ${
            status ? "text-green-900 bg-green-200" : "text-red-900 bg-red-300"
         }`}
      >
         {status ? "Available" : "Unavailable"}
      </label>
   );
}
export function LabelStatusMobile({ status }: { status: boolean }) {
   return (
      <div>
         {status ? (
            <FaCheckCircle size={21} color="green" />
         ) : (
            <IoMdCloseCircle size={21} color="#ff6060" />
         )}
      </div>
   );
}
