export default function ToggleBtn({ isYearly, setIsYearly }) {
  return (
    <div className="my-[50px] flex flex-row items-center justify-center gap-6">
      <span className="font-bold">Per Month</span>
      <label htmlFor="toggle" className="flex cursor-pointer items-center">
        <span className="relative h-[35px] w-[70px] rounded-[35px] bg-ColorBlack">
          <input
            id="toggle"
            type="checkbox"
            className="hidden"
            onChange={() => setIsYearly((prevState) => !prevState)}
            value={isYearly}
          />
          <span
            className={`absolute h-[35px] w-[35px] rounded-full bg-[#ff9966] transition-all duration-300 ${
              isYearly ? "right-0" : "left-0"
            }`}
          ></span>
        </span>
      </label>
      <span className="font-bold">Per Year</span>
    </div>
  )
}
