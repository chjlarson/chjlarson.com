// Same behaviour as gatsby-plugin-smoothscroll
const scrollTo = selector => {
  document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" })
}

export default scrollTo
