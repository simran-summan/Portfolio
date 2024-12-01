// import React from "react";
import Swal from "sweetalert2";

const onSubmit = async (event) => {
  event.preventDefault();

  // Get the form element
  const form = event.target;

  // Create FormData and add your access key
  const formData = new FormData(form);
  formData.append("access_key", "c490fe65-f506-4f7e-b0fe-ca5e78aa8777");

  // Convert form data to JSON
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  // Submit the form
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  }).then((res) => res.json());

  // Handle success response
  if (res.success) {
    Swal.fire({
      title: "Good job!",
      text: "Your message has been sent!",
      icon: "success",
      className: 'backgroundColor-black'
    });

    // Reset the form fields
    form.reset();
  }
};

const Contact = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-20 w-full dark:bg-grid-black/[0.2] bg-grid-white/[0.2] relative flex items-center justify-center font">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] "></div>
      <div className="container mx-auto p-8 rounded-xl shadow-lg md:space-x-16 flex flex-col md:flex-row items-start">
        {/* Contact Information */}
        <div className="md:w-[50%] md:pr-8 space-y-6 md:pl-10 pt-[4rem]">
          <div className="space-y-4 ">
            <h2 className="text-4xl font-bold text-[#6C63E1] mb-3 font-serif">
              Contact Me
            </h2>
            <p className="text-lg text-gray-300">
            I'm always open to discussing new opportunities or collaborations.
            Feel free to get in touch via the form or through the links below.
          </p>
            <div className="flex items-center space-x-4 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 7.88 7 13 7 13s7-5.12 7-13c0-3.87-3.13-7-7-7zm0 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
              </svg>
              <p className="text-md">Kolkata, India</p>
            </div>
            <div className="flex items-center space-x-4 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white"
              >
                <path d="M20.99 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-2 4l-7 4.5L4 8V6l7 4.5L19 6v2z" />
              </svg>
              <p className="text-md">simransumman7@gmail.com</p>
            </div>


            <div className="flex space-x-12  md:ml-24 md:absolute md:bottom-[10rem]">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/simran-summan-42b747246/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#6C63E1] transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-8 h-14"
                >
                  <path d="M22.23 0H1.77C.79 0 0 .774 0 1.729v20.542C0 23.226.79 24 1.77 24h20.46c.98 0 1.77-.774 1.77-1.729V1.729C24 .774 23.21 0 22.23 0zM7.07 20.452H3.56V9.035h3.51v11.417zM5.316 7.645a2.028 2.028 0 110-4.056 2.028 2.028 0 010 4.056zm15.137 12.807h-3.51v-5.919c0-1.413-.029-3.233-1.97-3.233-1.97 0-2.27 1.537-2.27 3.125v6.027h-3.51V9.035h3.37v1.55h.05c.47-.88 1.617-1.812 3.33-1.812 3.56 0 4.22 2.344 4.22 5.392v6.288z" />
                </svg>
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/simran-summan"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#6C63E1] transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-8 h-14"
                >
                  <path d="M12 2a10 10 0 00-3.16 19.48c.5.09.68-.22.68-.48v-1.68c-2.78.6-3.37-1.34-3.37-1.34a2.66 2.66 0 00-1.11-1.46c-.91-.62.07-.6.07-.6a2.11 2.11 0 011.53 1.03 2.14 2.14 0 002.92.84 2.14 2.14 0 01.64-1.33c-2.22-.25-4.56-1.11-4.56-4.94a3.86 3.86 0 011-2.68 3.6 3.6 0 01.1-2.65s.84-.27 2.75 1a9.41 9.41 0 015 0c1.91-1.32 2.75-1 2.75-1a3.6 3.6 0 01.1 2.65 3.86 3.86 0 011 2.68c0 3.84-2.35 4.69-4.59 4.94a2.4 2.4 0 01.69 1.88v2.8c0 .26.18.57.69.47A10 10 0 0012 2z" />
                </svg>
              </a>
              {/* Twitter Icon */}
              <a
                href="https://twitter.com/simscodes"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#6C63E1] transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-8 h-14"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 14.01-7.496 14.01-13.985 0-.21 0-.42-.015-.63A10.025 10.025 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <div className="w-full md:w-[40%] md:space-y-6 mt-16">
          {/* <h2 className="text-4xl font-bold text-[#6C63E1] mb-3 font-serif">
            Send Me A Message
          </h2> */}
          
          <form onSubmit={onSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full mt-1 px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-[#6C63E1]"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full mt-1 px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-[#6C63E1]"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                name="message"
                className="w-full mt-1 px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-[#6C63E1]"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-[#6C63E1] text-white rounded-lg hover:bg-[#5753c7] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
