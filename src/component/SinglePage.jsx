import { useParams } from 'react-router-dom';
import { animals, birds, insects, fish } from '../AnimalList'; 
import { useState } from 'react';
import Header from '../root/Header';
import Footer from '../root/Footer';

const SinglePage = () => {
  const { category, name } = useParams();
  const [count, setCount] = useState(0);

  let data = [];
  switch (category) {
    case 'animals':
      data = animals;
      break;
    case 'birds':
      data = birds;
      break;
    case 'insects':
      data = insects;
      break;
    case 'fish':
      data = fish;
      break;
    default:
      data = [...animals, ...birds, ...insects, ...fish];
  }

  const animal = data.find((item) => item.name === name);

  const handleLike = () => setCount(count + 1);
  const handleDislike = () => setCount(count - 1);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto py-8 flex-grow">
        {animal ? (
          <div className="flex flex-col items-center">
            {/* Image */}
            <img 
              src={`https://source.unsplash.com/800x800/?${animal.name}`} 
              alt={animal.name} 
              className="w-96 h-96 object-cover rounded-lg shadow-lg mb-6"
            />

            {/* Animal Name */}
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">{animal.name}</h2>

            {/* Like/Dislike buttons */}
            <div className="flex space-x-6 mb-4">
              <button 
                onClick={handleLike} 
                className="bg-green-500 hover:bg-green-700 text-white py-2 px-6 rounded-lg font-bold"
              >
                👍 Like 
              </button>
              <button 
                onClick={handleDislike} 
                className="bg-red-500 hover:bg-red-700 text-white py-2 px-6 rounded-lg font-bold"
              >
                👎 Dislike
              </button>
            </div>

            {/* Likes Count */}
            <p className="text-xl font-medium text-gray-600">Likes: {count}</p>
          </div>
        ) : (
          <p className="text-xl font-bold text-red-600">Animal not found!</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SinglePage;
