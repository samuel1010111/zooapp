import Header from './Header';
import Footer from './Footer';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto flex-grow py-10 px-6">
        <section className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">About This Project</h1>
          <p className="text-gray-700 leading-relaxed mb-6">
            This single-page application (SPA) showcases various animals, birds, insects, and fish.
            Users can browse, like, and search through categorized cards.
          </p>

          <h2 className="text-2xl font-semibold text-blue-500 mb-4">Features</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
            <li>Category</li>
            <li>Like/dislike functionality</li>
            <li>Error handling</li>
            <li>Card</li>
          </ul>

          <h2 className="text-2xl font-semibold text-blue-500 mb-4">What I Learned</h2>
          <p className="text-gray-700 leading-relaxed">
            I gained experience in React components, state management, and user interaction features.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
