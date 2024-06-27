import Image from "next/image"
import { FaCheckCircle } from "react-icons/fa"
import Button from "../lib/Button"

export default function ServiceCard({
  image,
  planName,
  monthlyPrice,
  yearlyPrice,
  points,
  isBtnBlue,
  isYearly,
}) {
  return (
    <div className="rounded-[5px] bg-[#FDFBF9] p-7 xl:p-10">
      <div className="mb-[30px]">
        <Image
          src={image}
          alt="plan"
          width="107"
          height="60"
          className="h-10 w-auto lg:h-[60px]"
        />
      </div>
      <div className="text-left">
        <span className="font-GeneralSans text-xl font-semibold text-ColorBlack">
          {planName}
        </span>
        <div className="month">
          <span className="font-GeneralSans text-[48px] font-semibold leading-[1.3] text-ColorBlack xl:text-[72px]">
            ${isYearly ? yearlyPrice : monthlyPrice}
          </span>
          /Per {isYearly ? "year" : "month"}
        </div>
      </div>
      <div className="my-[30px] h-px w-full bg-black/10"></div>
      <ul className="flex flex-col gap-y-3 font-semibold xl:px-[18px]">
        {points.map((item, index) => (
          <li className="flex gap-x-3" key={index}>
            <span className="text-xl text-ColorBlack">
              <FaCheckCircle size={20} />
            </span>
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-10 flex justify-center">
        <Button
          href="#"
          className={
            isBtnBlue
              ? "bg-ColorBlack border-ColorBlack text-white hover:text-ColorBlack"
              : null
          }
        >
          <span className="w-full text-center inline-block">Choose Plan</span>
        </Button>
      </div>
    </div>
  )
}
