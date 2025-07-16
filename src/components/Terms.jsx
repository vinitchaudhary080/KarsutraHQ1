import React from 'react';
import { Link } from 'react-router-dom'

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Terms &amp; Conditions
        </h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Conditions of Use
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Welcome to <span className="font-semibold">Theta Gainers</span>. These terms
            and conditions define the rules and regulations for using our website
            and Theta Gainers services. We assume you accept these terms and
            conditions in full by using this website and utilising our services.
            If you are unwilling to comply with any of the terms and conditions
            on this page, please refrain from using our website or services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Refund Policy
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Theta Gainers is committed to providing high-quality services and does
            not offer refunds. Clients are eligible for a refund based on the
            amount of the supplied service in the unusual event of
            dissatisfaction with our service.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Rights to Intellectual Property
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Theta Gainers and/or its licensors hold the intellectual property
            rights to all materials on this website unless otherwise specified.
            All rights to intellectual property are unaffected.
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Republishing material from this website without proper acknowledgement</li>
            <li>Sell, rent, or sublicense website content</li>
            <li>Replicate, copy or reproduce material from this website</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Content Ownership
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We are not liable for any information that is published on your
            website or when you use our services. You undertake to compensate
            and defend us from any and all claims arising from your website or
            our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Rights Reservation
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We have the right to request that you delete all links to our
            website or services, or any specific connection. You agree to
            remove all connections to our website immediately upon request.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Disclaimer
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We disclaim any visualisations, assurances, and terms pertaining to
            our website including the execution of our services to the fullest
            extent permissible by applicable law. We are not responsible for,
            and shall not be held accountable for, any direct, indirect,
            special, or consequential loss or damage resulting from the use of
            our website or services in any way.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Modifications to Terms and Conditions
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We retain the right to change these conditions of use without notice
            at any moment. You agree to be governed by the most recent edition
            of these rules and regulations whenever you access this website or
            our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            The Rule of Law
          </h2>
          <p className="text-gray-600 leading-relaxed">
            These terms and conditions are governed and construed in accordance
            with the laws of India, and you voluntarily submit to the exclusive
            jurisdiction of the aforementioned courts.
          </p>
        </section>
      </div>
    </div>
  );
}
export default Terms