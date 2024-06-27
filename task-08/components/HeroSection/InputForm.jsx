export default function InputForm() {
  return (
    <form
      action="#"
      className="relative mx-auto flex w-full items-center lg:mx-0 lg:mt-5 lg:max-w-md"
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full rounded-[3px] bg-white px-5 py-[18px] pr-40 text-base font-semibold text-opacity-50 outline-none"
      />
      <button
        type="submit"
        className="btn absolute right-[5px] rounded-[3px] py-[10px] px-[25px] font-semibold bg-orange-500/70 border-2 border-orange-400/50 hover:bg-white transition-all"
      >
        Subscribe
      </button>
    </form>
  )
}
