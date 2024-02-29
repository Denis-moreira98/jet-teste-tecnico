import ImgCar from "@/assets/car.png";
import Image from "next/image";
import { IoEllipsisVertical } from "react-icons/io5";
import { RatingStar } from "../ratingStar";
import { LabelStatusMobile } from "../labelStatus";

export function CarItemMobile() {
   return (
      <>
         <tr className="w-full border-b p-2 text-left flex flex-row items-center max-sm:justify-between">
            <div>
               <td className="pl-3">
                  <Image
                     src={ImgCar}
                     width={0}
                     height={0}
                     alt="carro"
                     className="w-24 h-auto"
                  />
               </td>
            </div>
            <div className="flex flex-col ml-3">
               <td className="font-semibold text-gray-900 mb-2">
                  Mini Cooper 2020
               </td>
               <td className="text-xs font-medium text-gray-500 mb-2">
                  Next reservation: 12/12
               </td>

               <td>
                  <RatingStar rating={4} />
               </td>
            </div>
            <td className="absolute">
               <label className="relative left-3 bottom-8">
                  <LabelStatusMobile status={true} />
               </label>
            </td>
            <div className="float-right">
               <td className="p-3">
                  <button className="relative bottom-7">
                     <IoEllipsisVertical size={18} />
                  </button>
               </td>
            </div>
         </tr>
      </>
   );
}
