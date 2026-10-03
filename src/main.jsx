import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import Layout from "./components/Layout"
// Components
import Header from "./components/Header"
import Work from "./components/Work"
import About from "./components/About"
import Skills from "./components/Skills"
import Promotion from "./components/Promotion"
import Footer from "./components/Footer"

const IndexPage = () => (
  <Layout>
    <Header></Header>
    <Work></Work>
    <About></About>
    <Skills></Skills>
    <Promotion></Promotion>
    <Footer></Footer>
  </Layout>
)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <IndexPage />
  </StrictMode>
)
