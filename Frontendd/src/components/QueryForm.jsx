import React, { useState } from "react";

const QueryForm = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [query,setQuery] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://gift-nation.onrender.com/api/enquiry/add-enquiry",
        { name,email, query }
      );
      setName('');
      setEmail('');
      setQuery('');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };  

  return (
    <div className="flex flex-col-reverse items-center justify-center px-4 sm:px-20 sm:mx-20 my-10 gap-6">
      <div className="w-full bg-[#111827] text-[#111827] p-8 rounded-lg shadow-lg">
        <form
        onSubmit={onSubmitHandler} className="flex flex-col gap-4 items-center justify-center">
          <input
            type="text"
            name="name"
            onChange={(e)=>setName(e.target.value)}
            value={name}
            placeholder="Your Name"
            className="p-3 border bg-[#e0e0e0] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white w-full"
          />
          <input
            type="email"
            name="email"
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
            placeholder="Your Email"
            className="p-3 border bg-[#e0e0e0] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white w-full"
          />
          <textarea
            placeholder="Your Query"
            name="query"
            onChange={(e)=>setQuery(e.target.value)}
            value={query}
            rows="4"
            className="p-3 border bg-[#e0e0e0] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white w-full"
          />
          <div className="flex sm:flex-row flex-col items-center justify-center gap-6 sm:gap-3 border-white w-[60%] mt-4 sm:mt-0">
            <div className="w-fit flex items-center justify-center text-white gap-3 text-lg px-10">
                <div className="rounded-full border border-white px-[9px] py-1 bi bi-whatsapp hover:bg-white hover:text-[#111827] cursor-pointer duration-200 ease-in-out"></div>
                <div className="rounded-full border border-white px-[9px] py-1 bi bi-instagram hover:bg-white hover:text-[#111827] cursor-pointer duration-200 ease-in-out"></div>
                <div className="rounded-full border border-white px-[9px] py-1 bi bi-envelope hover:bg-white hover:text-[#111827] cursor-pointer duration-200 ease-in-out"></div>
                <div className="rounded-full border border-white px-[9px] py-1 bi bi-telephone hover:bg-white hover:text-[#111827] cursor-pointer duration-200 ease-in-out"></div>
            </div>
            <button type="submit" className="bg-[#111827] border border-white text-white font-semibold py-3 rounded-md hover:bg-white hover:text-[#111827] duration-200 ease-in-out transition w-full">
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div className="w-full flex items-center justify-center flex-col text-center md:text-left">
        <div className="text_ctr flex items-center justify-center flex-col">
          <div className="heading_ctr text-4xl font-semibold text-center">
            Got Questions? We’ve Got Answers!
          </div>
          <div className="subheading_ctr text-lg mt-1 text-center">
            Our team is here to help. Reach out to us, and we’ll get back to you
            in no time!
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryForm;
