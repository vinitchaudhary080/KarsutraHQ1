// src/components/Privacy.jsx
import React from 'react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Privacy Policy
        </h1>

        <section className="mb-6">
          <p className="text-gray-600 leading-relaxed">
            <span className="font-semibold">Theta Gainers</span> values and is committed
            to safeguarding your privacy. This Privacy Policy regulates how we
            collect, process, and use data. By utilising our services, you agree to
            the data practices outlined in this statement.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Collection, Use, and Sharing of Information
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We only access and collect information that you freely provide to us.
            This information will not be sold or rented to anybody.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Security
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We make efforts to keep your information safe. When you enter sensitive
            information through the website, it is secure both online and offline.
          </p>
        </section>

        
      </div>
    </div>
  );
}
