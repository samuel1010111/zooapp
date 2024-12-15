import { Link } from 'react-router-dom';


const Error = () => {
  return (
    <div className="error-container">
      <h1 className="error-title">404 Not Found</h1>
      <p className="error-message">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="error-link">Go Back to Home</Link>
    </div>
  );
};

export default Error;
