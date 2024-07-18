export default function Title({ children, logo = false, videoTitle = false, videoSpan = false }) {

  let size = null
  if (videoTitle) { size = "text-3xl" }
  if (logo) { size = "text-6xl" }
  if (videoSpan) { size = "text-xl" }

  return <h2 className={`font-txTitle ${size}`}>{children}</h2>;
}
