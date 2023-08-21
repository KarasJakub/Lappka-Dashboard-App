import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

import { BrowserRouter } from "react-router-dom"

import { worker } from "./mocks/browser"

worker.start()

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
