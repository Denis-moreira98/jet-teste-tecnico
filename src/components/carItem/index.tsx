import { IoEllipsisVertical } from "react-icons/io5";
import Image from "next/image";
// import carImg from "@/assets/car.png";
import { RatingStar } from "../ratingStar";
import { LabelStatus } from "../labelStatus";

export interface CarProps {
   id: number;
   model: string;
   image: any;
   date1?: string;
   date?: string;
   status: boolean;
   rating: number;
}

export function CarItem({ car }: { car: CarProps }) {
   return (
      <>
         <tr className="border-2 border-b-slate-300 h-16 last:shadow-lg bg-gray-50 hover:bg-gray-200 duration-300">
            <td className="text-left font-medium text-gray-900">
               <div className="flex flex-row items-center gap-2 pl-3">
                  <Image
                     src={car.image}
                     alt={car.model}
                     width={0}
                     height={0}
                     quality={100}
                     className="w-14 h-auto"
                  />
                  <p>{car.model}</p>
               </div>
            </td>
            <td className="text-left font-medium text-gray-500 pl-1">
               {car.date1}
            </td>
            <td className="text-left">
               <LabelStatus status={car.status} />
            </td>
            <td className="text-left ">
               <RatingStar rating={car.rating} />
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
