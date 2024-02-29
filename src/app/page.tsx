// import Image from "next/image";
import { CarItem } from "@/components/carItem";
import { CarItemMobile } from "@/components/carItemMobile";
import { Container } from "@/components/container";

import { carsData } from "@/utils/CarsData";

export default function Home() {
   return (
      <Container>
         <main className="w-full flex-col h-screen flex items-center justify-center">
            <table className="w-full mx-1 max-sm:hidden">
               <thead className="bg-gray-200 w-full h-14 border-2 border-b-slate-300">
                  <tr>
                     <th className="text-left pl-3 font-semibold text-gray-500">
                        CAR
                     </th>
                     <th className="text-left font-semibold text-gray-500">
                        NEXT RESERVATION
                     </th>
                     <th className="text-left font-semibold text-gray-500">
                        STATUS
                     </th>
                     <th className="text-left font-semibold text-gray-500 ">
                        RATING
                     </th>
                     <th className="font-semibold text-gray-500">ACTIONS</th>
                  </tr>
               </thead>
               <tbody>
                  {carsData.map((car) => (
                     <CarItem key={car.id} car={car} />
                  ))}
               </tbody>
            </table>

            <table className="w-full flex flex-col items-center justify-center sm:hidden">
               <tbody className="w-full">
                  {carsData.map((car) => (
                     <CarItemMobile key={car.id} car={car} />
                  ))}
               </tbody>
            </table>
         </main>
      </Container>
   );
}
