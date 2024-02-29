import { FaRegStar, FaStar } from "react-icons/fa";

export function RatingStar({ rating }: { rating: number }) {
   const stars = Array.from({ length: 5 }, (_, index) => (
      <span key={index} className="text-xl">
         {index < rating ? (
            <FaStar className="text-gray-900" />
         ) : (
            <FaRegStar className="text-gray-300" />
         )}
      </span>
   ));

   return <div className="flex flex-row">{stars}</div>;
}
