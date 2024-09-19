import { useRef } from 'react';

import QuoteCard from './components/QuoteCard';

function App() {
  const dialogRef = useRef();
  return (
    <main className="p-12">
      <section>
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
      </section>

      <section className="mt-8 grid grid-cols-4 gap-4">
        <div className="container1 bg-indigo-400 p-4 rounded-md">
          <p>This p-tag has padding relative to the query container`s width.</p>
        </div>
        <div className="container2 bg-indigo-400 rounded-md p-2">
          <p>
            This p-tag has bold font when container width is greater than 250px
          </p>
        </div>
        <div className="container3 bg-indigo-400 rounded-md p-2">
          <p>
            Styling of this p-tag doenst work because the query checks the
            height of the container, but the container is using inline-size
          </p>
        </div>
        <div className="container4 bg-indigo-400 rounded-md p-2">
          <p>
            This p-tag has bold font when container width is greater than 100px
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
    </main>
  );
}

export default App;
