import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'; 
import Home from './root/Home';
import About from './root/About';
import Error from './root/Error';
import Category from './component/Catagory';
import { animals, birds, insects, fish } from './AnimalList'; 
import SinglePage from './component/SinglePage';
import './index.css';


const App = () => {
  
  return (

    <Router>
      <div className="app">
    
        
        <Routes> {/* Use Routes for routing */}
        <Route path="/" element={<Home />} /> {/* Home page */}
          <Route path="/about" element={<About />} />
          
          {/* Route to handle category with dynamic param */}
          <Route path="/category/:category" element={
            <Category 
              animals={animals} 
              birds={birds} 
              insects={insects} 
              fish={fish} 
            />
          } />

          {/* Route to handle individual item details */}
          <Route 
            path="/details/:category/:name" 
            element={<SinglePage />} 
          />

          {/* Catch-all for unmatched routes */}
          <Route path="*" element={<Error />} />
        </Routes>

      
      </div>
    </Router>
  );
};

export default App;
