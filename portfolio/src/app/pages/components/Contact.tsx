"use client";

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // success or error

  const handleClick = (e: any) => {
    e.preventDefault();
    const isEmailValid = e.target.user_email.value.match(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    );
    if (!isEmailValid) {
      setMessage('Please enter a valid email address.');
      setMessageType('error');
      return;
    }

    const isOnlyText = e.target.user_name.value.match(/^[a-zA-Z\s]*$/);
    if (!isOnlyText) {
      setMessage('Please enter a valid name.');
      setMessageType('error');
      return;
    }

    const isMessageValid = e.target.message.value.length > 0 && e.target.message.value.length < 1000 && e.target.message.value.match(/^[a-zA-Z0-9\s.,!?]*$/);
    if (!isMessageValid) {
      setMessage('Please enter a message with less than 1000 characters.');
      setMessageType('error');
      return;
    }

    emailjs
      .sendForm('service_fj8ozyj', 'template_8u1v979', e.target, 'b7FRwz63NrocElGQi')
      .then(
        (result) => {
          setMessage('Message sent successfully! See you soon.');
          setMessageType('success');
        },
        (error) => {
          setMessage("Sorry, we couldn't send your message. Please try again later.");
          setMessageType('error');
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="py-16 text-center min-h-screen md:mt-28">
      <h2 className="text-4xl md:text-6xl font-bold mb-12">Contact Me</h2>
      <form className="mx-auto md:w-2/3" onSubmit={handleClick}>
        <div className="mb-4 md:mb-12">
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            className="w-full p-4 border border-gray-300 rounded-3xl text-primary text-xl"
            required
          />
        </div>
        <div className="mb-4 md:mb-12">
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            className="w-full p-4 border border-gray-300 rounded-3xl text-primary text-xl"
            required
          />
        </div>
        <div className="mb-4 md:mb-12">
          <textarea
            name="message"
            placeholder="Message"
            className="w-full p-4 border border-gray-300 rounded-3xl h-60 text-primary text-xl"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="text-lg md:text-2xl bg-gray-800 hover:bg-gray-500 text-white font-bold py-4 px-8 rounded-full"
        >
          Send me
        </button>
      </form>

      {message && (
        <div
          className={`mt-8 p-4 rounded-3xl ${messageType === 'success'
            ? 'bg-green-100 text-green-800'
            : 'bg-red-100 text-red-800'
            }`}
        >
          {message}
        </div>
      )}
    </section>
  );
};

export default Contact;
