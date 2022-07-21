import React from 'react';
import { createRoot } from 'react-dom/client';
import {RouterCenter} from "./routes/router";
import './assets/styles/constants.css'

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
      <RouterCenter />
  </React.StrictMode>
);