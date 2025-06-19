import React from 'react';
// You might want to import your SERVICES_DATA and ServiceCard here
// to display all services on this dedicated page.
// For now, it's a simple placeholder.
import { Link } from 'react-router-dom';
interface AllServicesPageProps {
  // If you pass a navigation function from App.tsx
  onNavigate?: (page: string) => void;
}

const AllServicesPage: React.FC<AllServicesPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">All Our Services</h1>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">
        Explore the full range of comprehensive pest management solutions we offer to ensure your peace of mind.
      </p>

      {/* You would typically render a list of all your services here.
          For example, by mapping over your SERVICES_DATA array and rendering ServiceCard components. */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {/* Example placeholder for services. Replace with actual ServiceCard mapping. */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Service Item 1</h3>
          <p className="text-gray-600">Detailed description for service item 1.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Service Item 2</h3>
          <p className="text-gray-600">Detailed description for service item 2.</p>
        </div>
        {/* ... add more service items or map over your actual SERVICES_DATA ... */}
      </div>

      <Link
        to="/"
        className="mt-12 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default AllServicesPage;