import { useRef } from 'react';

import QuoteCard from './components/QuoteCard';

function App() {
  const dialogRef = useRef();
  return (
    <main className="p-12">
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
