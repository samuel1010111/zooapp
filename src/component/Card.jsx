import { useState } from 'react';
import { Link } from 'react-router-dom';

const Card = ({ name, category, onLike, onDislike, onClose }) => {
  const [count, setCount] = useState(0);

  const handleLike = () => {
    setCount(count + 1);
    onLike();
  };

  const handleDislike = () => {
    setCount(count - 1);
    onDislike();
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-sm mx-auto my-4 border border-gray-200 hover:shadow-lg transition-all duration-300 relative">
      <button
        className="absolute top-2 right-2 text-red-600 hover:text-red-800 font-bold text-xl"
        onClick={onClose}
      >
        X
      </button>
      <div className="h-48 overflow-hidden">
        <img 
          src={`https://source.unsplash.com/600x400/?${name}`} 
          alt={name} 
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <div className="flex justify-between items-center mt-4">
          <div className="flex space-x-4">
            <button 
              className="text-green-600 hover:text-green-800 font-semibold" 
              onClick={handleLike}
            >
              👍 {count}
            </button>
            <button 
              className="text-red-600 hover:text-red-800 font-semibold" 
              onClick={handleDislike}
            >
              👎
            </button>
          </div>
        </div>
        <Link 
          to={`/details/${category}/${name}`} 
          className="block mt-4 bg-blue-500 hover:bg-blue-700 text-white text-center py-2 rounded-md transition"
        >
          See more
        </Link>
      </div>
    </div>
  );
};

export default Card;
