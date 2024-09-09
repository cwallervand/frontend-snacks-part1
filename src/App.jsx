function App() {
  return (
    <main className="p-12">
      <div className="quoteContainer">
        <div className="quote bg-indigo-400 text-white flex flex-col items-center rounded-lg p-12 w-full">
          <div className="quotationMark w-12 h-12">
            <svg
              className="w-full h-full"
              version="1.1"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              color="white"
              stroke="currentColor"
              fill="currentColor"
            >
              <g>
                <path d="m77.906 48.086c-2.4766-0.24609-7.9219-0.24609-7.9219-3.7109 0-4.7031 6.9297-10.891 18.066-17.57 3.4648-2.2266 10.645-5.6914 10.645-10.395 0-3.7109-2.7227-6.4336-8.4141-5.6914-5.4453 0.74219-13.859 4.4531-24.996 13.859-11.633 9.6484-22.52 25.734-22.52 41.574 0 16.086 10.891 32.176 28.461 32.176 14.105 0 26.234-10.641 26.234-25.246 0-11.137-7.6719-24.008-19.555-24.996z"></path>
                <path d="m43.117 41.125c-2.0312-1.0625-4.2617-1.7578-6.668-1.957-2.4766-0.24609-7.9219-0.24609-7.9219-3.7109 0-4.7031 6.9297-10.891 18.066-17.57 3.4648-2.2266 10.641-5.6914 10.641-10.395 0-3.7109-2.7227-6.4336-8.4141-5.6914-5.4453 0.74219-13.859 4.4531-24.996 13.859-11.633 9.6484-22.523 25.734-22.523 41.574 0 16.086 10.891 32.176 28.461 32.176 4.1328 0 8.0898-0.91797 11.625-2.5781-3.4688-6.2695-5.3164-13.523-5.3164-20.68 0.007813-8.8398 2.8516-17.414 7.0469-25.027z"></path>
              </g>
            </svg>
          </div>
          <div className="quoteText">
            <blockquote className="italic my-4">
              <p>
                I put my phone in airplane mode, but it’s not flying. I think I
                need a refund.
              </p>
            </blockquote>
          </div>
          <div className="quoteeInfo flex items-center gap-4">
            <div className="quoteeInfo-profilePicture flex border-2 rounded-full p-2 w-12 h-12 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-10"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <cite>ChatGPT</cite>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
