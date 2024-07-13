import React from 'react';

const Page = () => {
  // actin
  return (
    <main className="w-full min-h-screen p-5 bg-gray-100 flex flex-col items-center justify-center">

      <header className="mb-8 text-center">
        <h1 className="text-6xl font-bold mb-2 text-black capitalize">So You Want to Freelance with Us</h1>
        <p className="text-lg text-gray-600">
          Fill out the form accurately and honestly, and you may get a chance to work in the real world accepting requests and earning tokens for your service.
        </p>
      </header>

      <form className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg space-y-6">
        <div className="flex flex-col">
          <label htmlFor="username" className="mb-2 font-semibold text-gray-700">
            Username:
          </label>
          <input
            type="text"
            placeholder="Enter username"
            id="username"
            name="username"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 font-semibold text-gray-700">
            Email:
          </label>
          <input
            type="email"
            placeholder="Enter email"
            id="email"
            name="email"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="skillSetPreference" className="mb-2 font-semibold text-gray-700">
            SkillSet:
          </label>
          <select
            name="skillSetPreference"
            id="skillSetPreference"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="---">---</option>
            <option value="electric">Electric</option>
            <option value="plumbing">Plumbing</option>
            <option value="tech">Tech</option>
            <option value="installation">Installation</option>
            <option value="assistant">Assistant</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="skillSummary" className="mb-2 font-semibold text-gray-700">
            Tell me about your skill set:
          </label>
          <textarea
            name="skillSummary"
            id="skillSummary"
            className="w-full h-[800px] resize-none overflow-auto p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="In a few paragraphs, tell me what it is that you can do on the work field"
          ></textarea>
        </div>

        <button className="w-full p-3 bg-blue-600 text-white text-xl rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Submit
        </button>
      </form>

    </main>
  );
};

export default Page;
