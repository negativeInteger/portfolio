import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const EMAILJS_API_KEY = import.meta.env.EMAILJS_API_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.EMAILJS_TEMPLATE_ID;
 
emailjs.init({
  publicKey: EMAILJS_API_KEY
})


export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  
 

  const formRef = useRef();
  const [status, setStatus] = useState('');

  const onSubmit = (data) => {
     emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,      // your Service ID
        EMAILJS_TEMPLATE_ID,     // your Template ID
        formRef.current,
      )
      .then((data) => setStatus('Message sent successfully!'))
      .catch((err) => {
        setStatus('Message was not sent');
        console.log(err);
      }
      );
    reset();
  };

  return (
    <section className="min-h-screen py-12 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-white text-center mb-4">
          Get in Touch
        </h2> 
        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          className="bg-gray-800/30 border border-gray-700
                     rounded-lg p-8 shadow-lg space-y-3"
        >
          <div>
            <label className="block text-gray-200 mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              {...register("name", { required: "Name is required" })}
              className="w-full rounded-md bg-gray-700 text-white px-4 py-2
                         border border-gray-600 focus:outline-none focus:border-cyan-400"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-200 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
              })}
              className="w-full rounded-md bg-gray-700 text-white px-4 py-2
                         border border-gray-600 focus:outline-none focus:border-cyan-400"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-200 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              {...register("message", { required: "Message is required" })}
              className="resize-none w-full rounded-md bg-gray-700 text-white px-4 py-2
                         border border-gray-600 focus:outline-none focus:border-cyan-400"
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-white font-semibold
                       py-3 rounded-md transition-colors duration-300"
          >
            Send Message
          </button>
          <p className=" text-gray-200 text-1xl mt-1 text-center">
                {status}
            </p>
        </form>

        {/* Social Icons */}
        <div className="mt-6 flex justify-center gap-8">
          <a
            href="https://github.com/negativeInteger"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white text-4xl transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/vishayush"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 text-4xl transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
