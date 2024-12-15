import { Link } from 'react-router-dom';

// Centralized categories data
const categories = [
  { 
    name: 'Animals', 
    image: 'https://images.unsplash.com/photo-1480554840075-72cbdabbf689?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    link: '/category/animals' 
  },
  { 
    name: 'Birds', 
    image: 'https://media.istockphoto.com/id/1489154382/fi/valokuva/lintupunarinta-istuu-kirsikan-oksilla-valkoisilla-kukilla-aurinkoisena-kev%C3%A4tp%C3%A4iv%C3%A4n%C3%A4.jpg?s=1024x1024&w=is&k=20&c=jvDhGtW13wrwwHwWdRpdi7yX5hvZZltM33Ma6s2ndSs=', 
    link: '/category/birds' 
  },
  { 
    name: 'Insects', 
    image: 'https://images.unsplash.com/photo-1460400213328-a214131cb764?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGluc2VjdHxlbnwwfHwwfHx8MA%3D%3D', 
    link: '/category/insects' 
  },
  { 
    name: 'Fish', 
    image: 'https://plus.unsplash.com/premium_photo-1661936371108-6765cb65b4d6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmlzaHxlbnwwfHwwfHx8MA%3D%3D', 
    link: '/category/fish' 
  },
];

const Home = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 h-screen">
      {categories.map((category) => (
        <Link
          key={category.name}
          to={category.link} // Using Link to navigate to the category page
          className="relative block"
        >
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover rounded-lg"
          />
          <h2 className="absolute inset-0 flex items-center justify-center text-4xl font-semibold text-white bg-black bg-opacity-50 transition-opacity duration-300 group-hover:bg-opacity-75">
            {category.name}
          </h2>
        </Link>
      ))}
    </div>
  );
};

export default Home;
