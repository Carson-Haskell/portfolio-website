'use client';
import React from 'react';

const ContactForm = () => {
  const [name, setName] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [error, setError] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name === '' ||
      number === '' ||
      email === '' ||
      subject === '' ||
      message === ''
    ) {
      setError(true);
      return;
    }

    setSubmitted(true);

    setError(false);
    setName('');
    setNumber('');
    setEmail('');
    setSubject('');
    setMessage('');

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid w-full gap-4 py-2 md:grid-cols-2">
        <div className="flex flex-col">
          <label className="py-2 text-sm uppercase">Name</label>
          <input
            type="text"
            className={`flex p-3 border-2 ${
              !name && error ? 'border-red-400' : 'border-gray-300'
            } rounded-lg`}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="py-2 text-sm uppercase">Phone Number</label>
          <input
            type="text"
            className={`flex p-3 border-2 ${
              !number && error ? 'border-red-400' : 'border-gray-300'
            } rounded-lg`}
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col py-2">
        <label className="py-2 text-sm uppercase">Email</label>
        <input
          type="email"
          className={`flex p-3 border-2 ${
            !email && error ? 'border-red-400' : 'border-gray-300'
          } rounded-lg`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col py-2">
        <label className="py-2 text-sm uppercase">Subject</label>
        <input
          type="text"
          className={`flex p-3 border-2 ${
            !subject && error ? 'border-red-400' : 'border-gray-300'
          } rounded-lg`}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div className="flex flex-col py-2">
        <label className="py-2 text-sm uppercase">Message</label>
        <textarea
          className={`flex p-3 border-2 ${
            !message && error ? 'border-red-400' : 'border-gray-300'
          } rounded-lg`}
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      {error && <p className="text-red-400">All fields required</p>}
      <button
        className="w-full p-4 mt-4 text-gray-100 transition-transform transform active:scale-95 "
        disabled={submitted}
      >
        {submitted ? 'Sent!' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;
