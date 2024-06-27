export default function SectionHeading({ headingText, className }) {
  return (
    <h2 className={`text-center text-3xl font-bold md:text-4xl xl:text-5xl my-5 max-w-[650px] ${className}`}>
      {headingText}
    </h2>
  )
}
