import { FaArrowRightLong } from "react-icons/fa6"

export default function StrategyCard({ number, heading, body, slug }) {
  return (
    <div className="group flex h-full flex-col text-[#FDFBF9]">
      <span className="block text-xl font-semibold leading-[1.4] transition-all duration-300 group-hover:text-ColorAtomicTangerine lg:text-2xl xl:text-3xl">
        0{number}.
      </span>
      <div className="relative my-[30px] h-[2px] w-full bg-[#FDFBF9]/10 after:absolute after:inset-0 after:scale-x-0 after:bg-ColorAtomicTangerine after:transition-all after:duration-300 group-hover:after:scale-x-100"></div>
      <div className="mb-[15px] text-xl font-semibold leading-[1.4] lg:text-[22px] xl:text-3xl">
        {heading}
      </div>
      <p className="mb-5 line-clamp-3 text-[#FDFBF9]/80">{body}</p>
      <a
        className="mt-auto inline-flex items-center gap-x-4 text-base font-semibold group-hover:text-ColorAtomicTangerine"
        href={`${slug}`}
      >
        Discover More
        <span className="text-3xl transition-all duration-300 ease-in-out group-hover:translate-x-2">
          <FaArrowRightLong
            size={28}
            color="white"
            className="group-hover:fill-ColorAtomicTangerine"
          />
        </span>
      </a>
    </div>
  )
}
