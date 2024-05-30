import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { VerySlowComponent } from "./VerySlowComponent.tsx";

const numbers = Array.from({ length: 50 }, (_, i) => i + 1);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App>
      {numbers.map((number) => (
        <VerySlowComponent key={number} index={number} />
      ))}
      <UIHomeOneAgainstTwo home={<PitacoWebOutcomeWrapper ... />} />
    </App>
  </React.StrictMode>
);
