import React from "react";
import { createRoot } from "react-dom/client";
import "./app.css";

function App() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Survival Phrasebook</p>
        <h1>Разговорник для первых дней в новой стране</h1>
        <p>
          Минимальные фразы, произношение и подсказки для ситуаций, где нужно
          быстро объясниться: граница, врач, полиция, жильё, транспорт и
          магазин.
        </p>
        <button onClick={() => window.print()}>Сохранить PDF</button>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
