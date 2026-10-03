import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import Layout from "./components/Layout"

const NotFoundPage = () => (
  <Layout>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NotFoundPage />
  </StrictMode>
)
