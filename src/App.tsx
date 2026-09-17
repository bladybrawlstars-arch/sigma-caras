import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="page">
      <header className="hero">
        <h1>Bem-vindo</h1>
        <p>Sua página está pronta e funcionando.</p>
      </header>

      <main className="content">
        <div className="card">
          <h2>Contador</h2>
          <p className="count">{count}</p>
          <div className="buttons">
            <button onClick={() => setCount((c) => c - 1)}>-</button>
            <button onClick={() => setCount(0)}>Zerar</button>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
          </div>
        </div>
      </main>

      <footer>
        <p>Construído com React + Vite</p>
      </footer>
    </div>
  );
}
