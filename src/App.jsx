import { useRef } from 'react';

import QuoteCard from './components/QuoteCard';

function App() {
  const dialogRef = useRef();
  return (
    <main className="p-12">
      <h1 className="text-center text-4xl font-bold mb-8">
        CSS and HTML Treats
      </h1>
      <section>
        <h2 className="text-center text-2xl font-bold mb-4">
          CSS Container Queries
        </h2>
        <div className="quoteContainer">
          <QuoteCard />
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="bg-indigo-400 p-4 rounded-md"
            type="button"
            onClick={() => dialogRef.current?.showModal()}
          >
            Open modal
          </button>
        </div>
        <section className="mt-8 grid grid-cols-4 gap-4">
          <div className="container1 bg-indigo-400 p-4 rounded-md">
            <p>
              This p-tag has padding relative to the query container`s width.
            </p>
          </div>
          <div className="container2 bg-indigo-400 rounded-md p-2">
            <p>
              This p-tag has bold font when container width is greater than
              250px
            </p>
          </div>
          <div className="container3 bg-indigo-400 rounded-md p-2">
            <p>
              Trying to style this based on container heigh, but the
              `container-type` is using `inline-size` so it doenst work.
            </p>
          </div>
          <div className="container4 bg-indigo-400 rounded-md p-2">
            <p>
              This p-tag has bold font when container width is greater than
              100px
            </p>
          </div>
          <div className="container5 bg-indigo-400 rounded-md p-2">
            <div>
              <p>
                This p-tag has bold font when container width is greater than
                100px
              </p>
            </div>
          </div>
        </section>

        <dialog ref={dialogRef} className="w-64">
          <button autoFocus onClick={() => dialogRef.current?.close()}>
            Close
          </button>
          <div className="quoteContainer">
            <QuoteCard />
          </div>
          <form method="dialog">
            <button>Ok</button>
          </form>
        </dialog>
      </section>
      <section>
        <h2 className="text-center text-2xl font-bold mb-4">:has selector</h2>
        <div className="concur rounded rounded-lg border border-2 p-8">
          <div className="flex gap-2">
            <input type="checkbox" id="has-checkbox" />
            <label htmlFor="has-checkbox">Do you concur?</label>
          </div>
          <div className="concur-warning italic text-lg">
            <div className="overflow-hidden">
              By concuring you agree to my terms and conditions. Your entire
              life is now mine. Thank you, come again!
            </div>
          </div>
        </div>
        <div className="after-concur rounded rounded-md my-4 p-2">
          Well, hello there!
        </div>
        <div className="flex">
          <div className="square rounded rounded-md w-10 h-10  bg-indigo-400 m-4"></div>
          <div className="square rounded rounded-md w-10 h-10  bg-indigo-400 m-4"></div>
          <div className="circle rounded rounded-full w-10 h-10  bg-indigo-400 m-4"></div>
          <div className="square rounded rounded-md w-10 h-10  bg-indigo-400 m-4"></div>
        </div>
      </section>
    </main>
  );
}

export default App;
