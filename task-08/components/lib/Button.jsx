export default function Button({ children, href, handleOnClick, className }) {
  return (
    <a
      className={
        `bg-ColorAtomicTangerine px-8 py-3 mt-6 block rounded-[3px] w-full font-semibold border-2 border-ColorAtomicTangerine hover:bg-white transition text-ColorBlack  ` +
        className
      }
      onClick={handleOnClick}
      href={href}
    >
      {children}
    </a>
  )
}
