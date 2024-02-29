import { IoEllipsisVertical } from "react-icons/io5";
import Image from "next/image";
import carImg from "@/assets/car.png";
import { RatingStar } from "../ratingStar";
import { LabelStatus } from "../labelStatus";

export function CarItem() {
   return (
      <>
         <tr className="border-2 border-b-slate-300 h-16 last:shadow-lg bg-gray-50 hover:bg-gray-200 duration-300">
            <td className="text-left font-medium text-gray-900">
               <div className="flex flex-row items-center gap-2 pl-3">
                  <Image
                     src={carImg}
                     alt="car"
                     width={50}
                     height={25}
                     quality={100}
                  />
                  <p>Mini Cooper 2020</p>
               </div>
            </td>
            <td className="text-left font-medium text-gray-500 pl-1">
               jul 6 - jul 12
            </td>
            <td className="text-left">
               <LabelStatus status={false} />
            </td>
            <td className="text-left ">
               <RatingStar rating={4} />
            </td>
            <td className="text-center">
               <button>
                  <IoEllipsisVertical size={25} color="#111827" />
               </button>
            </td>
         </tr>
      </>
   );
}
