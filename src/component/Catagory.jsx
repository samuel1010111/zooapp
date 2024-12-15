import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from './Card';
import { animals, birds, insects, fish } from '../AnimalList'; 
import Header from '../root/Header';
import Footer from '../root/Footer';

const Category = () => {
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredAnimals, setFilteredAnimals] = useState([]);
  const [removedAnimals, setRemovedAnimals] = useState(new Set()); // Track removed animals

  const filterAnimals = () => {
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

    const filtered = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter((item) => !removedAnimals.has(item.name)); // Exclude removed animals

    setFilteredAnimals(filtered);
  };

  useEffect(() => {
    filterAnimals();
  }, [category, searchTerm, removedAnimals]); // Re-filter on search, category, or removal

  const handleCardClose = (name) => {
    setRemovedAnimals((prev) => new Set(prev).add(name)); // Mark animal as removed
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container mx-auto py-6 flex-grow">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          {category ? category.charAt(0).toUpperCase() + category.slice(1) : 'All Animals'}
        </h1>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search animals..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAnimals.map((animal) => (
            <Card
              key={animal.name}
              name={animal.name}
              category={category}
              likes={animal.likes}
              onLike={() => console.log(`Liked ${animal.name}`)}
              onDislike={() => console.log(`Disliked ${animal.name}`)}
              onClose={() => handleCardClose(animal.name)} // Handle individual card removal
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Category;
