import { Children, cloneElement, useEffect, useRef, useState } from "react"

// Lightweight replacement for react-reveal's <Fade bottom cascade>, keeping
// its timing (1s fade-up, log-scaled cascade up to 2s) and its rule that
// several children are each revealed on their own.
const DURATION = 1000
const ANIMATION = "fade-in-bottom"

const cascadeDuration = (index, count) =>
  Math.round(
    Math.exp(
      Math.log(DURATION) +
        ((Math.log(DURATION * 2) - Math.log(DURATION)) / count) * index
    )
  )

const animationStyle = duration => ({
  animationName: ANIMATION,
  animationDuration: `${duration}ms`,
  opacity: 1,
})

const cascadeChildren = children => {
  const items =
    typeof children === "string"
      ? children.split("").map((ch, index) => (
          <span
            key={index}
            style={{ display: "inline-block", whiteSpace: "pre" }}
          >
            {ch}
          </span>
        ))
      : Children.toArray(children)

  return items.map((item, index) =>
    item && typeof item === "object"
      ? cloneElement(item, {
          style: {
            ...item.props.style,
            ...animationStyle(cascadeDuration(index, items.length)),
          },
        })
      : item
  )
}

const Reveal = ({ children, cascade }) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > 0) {
          observer.disconnect()
          setVisible(true)
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Components (not DOM elements) get a wrapping div to attach the ref to
  const child =
    typeof children.type === "string" ? children : <div>{children}</div>
  const { style, children: grandChildren } = child.props

  if (!visible) {
    return cloneElement(child, { ref, style: { ...style, opacity: 0 } })
  }
  if (cascade && grandChildren) {
    return cloneElement(
      child,
      { ref, style: { ...style, opacity: 1 } },
      cascadeChildren(grandChildren)
    )
  }
  return cloneElement(child, {
    ref,
    style: { ...style, ...animationStyle(DURATION) },
  })
}

const Fade = ({ children, cascade = false }) => (
  <>
    {Children.map(children, child => (
      <Reveal cascade={cascade}>{child}</Reveal>
    ))}
  </>
)

export default Fade
