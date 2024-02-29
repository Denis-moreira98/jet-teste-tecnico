import Image from "next/image";
import { IoEllipsisVertical } from "react-icons/io5";
import { RatingStar } from "../ratingStar";
import { LabelStatusMobile } from "../labelStatus";
import { CarProps } from "@/components/carItem/index";

export function CarItemMobile({ car }: { car: CarProps }) {
   return (
      <>
         <tr className="w-full border-b p-2 text-left flex flex-row items-center max-sm:justify-between">
            <div>
               <td className="pl-3">
                  <Image
                     src={car.image}
                     width={90}
                     height={65}
                     alt={car.model}
                  />
               </td>
            </div>
            <div className="flex flex-col">
               <td className="font-semibold text-gray-900 mb-2">{car.model}</td>
               <td className="text-xs font-medium text-gray-500 mb-2">
                  Next reservation: {car.date}
               </td>

               <td>
                  <RatingStar rating={car.rating} />
               </td>
            </div>
            <td className="absolute">
               <label className="relative left-3 bottom-6">
                  <LabelStatusMobile status={car.status} />
               </label>
            </td>
            <div className="float-right">
               <td className="p-3">
                  <button className="relative bottom-6">
                     <IoEllipsisVertical size={18} />
                  </button>
               </td>
            </div>
         </tr>
      </>
   );
}
