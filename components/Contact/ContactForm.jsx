import React from 'react';

const ContactForm = () => {
  return (
    <form>
      <div className="grid w-full gap-4 py-2 md:grid-cols-2">
        <div className="flex flex-col">
          <label className="py-2 text-sm uppercase">Name</label>
          <input
            type="text"
            className="flex p-3 border-2 border-gray-300 rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <label className="py-2 text-sm uppercase">Phone Number</label>
          <input
            type="text"
            className="flex p-3 border-2 border-gray-300 rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-col py-2">
        <label className="py-2 text-sm uppercase">Email</label>
        <input
          type="email"
          className="flex p-3 border-2 border-gray-300 rounded-lg"
        />
      </div>
      <div className="flex flex-col py-2">
        <label className="py-2 text-sm uppercase">Subject</label>
        <input
          type="text"
          className="flex p-3 border-2 border-gray-300 rounded-lg"
        />
      </div>
      <div className="flex flex-col py-2">
        <label className="py-2 text-sm uppercase">Message</label>
        <textarea
          className="p-3 border-2 border-gray-300 rounded-lg"
          rows="10"
        ></textarea>
      </div>
      <button className="w-full p-4 mt-4 text-gray-100 duration-300 ease-in hover:scale-105">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
