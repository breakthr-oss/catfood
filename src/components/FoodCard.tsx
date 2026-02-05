import Image from 'next/image';
import { Food } from '@/types';

interface FoodCardProps {
  food: Food;
}

export default function FoodCard({ food }: FoodCardProps) {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-lg">★</span>
        ))}
        {hasHalfStar && <span className="text-yellow-400 text-lg">☆</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={i} className="text-gray-300 text-lg">★</span>
        ))}
        <span className="ml-2 text-sm text-gray-600">({rating})</span>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full h-48 bg-gray-200">
        <Image
          src={food.image}
          alt={`${food.brand} ${food.name}`}
          fill
          className="object-cover"
        
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{food.name}</h3>
        <p className="text-sm text-gray-500 mb-3">{food.brand}</p>
        {renderStars(food.rating)}
        <p className="text-sm text-gray-600 mt-4 line-clamp-3">{food.description}</p>
      </div>
    </div>
  );
}
