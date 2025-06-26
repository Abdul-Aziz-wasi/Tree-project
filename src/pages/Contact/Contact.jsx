import React from 'react';

const Contact = () => {
  return (
    <section className="w-11/12 mx-auto my-16">
      <h2 className="text-4xl font-bold text-green-700 text-center mb-10">Contact Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        <div>
          <form className="space-y-6 bg-white p-8 rounded-lg shadow-md">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Your email"
                className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="flex flex-col justify-center items-center text-center space-y-4">
          <img
            src="https://img.freepik.com/free-psd/contact-us-label-illustration_23-2151600824.jpg?semt=ais_hybrid&w=740"
            alt="Contact Us"
            className="w-3/4"
          />
          <div>
            <h3 className="text-xl font-semibold text-green-700">We're here to help!</h3>
            <p className="text-gray-600 mt-2">
              Need assistance or have a question about your plants? Drop us a message and our team will get back to you shortly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
