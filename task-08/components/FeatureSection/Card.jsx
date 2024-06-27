import Image from "next/image"

export default function Card({ cardImg, cardHeading, cardBody }) {
  return (
    <div className="flex flex-col justify-center items-center gap-3 flex-1 min-w-[300px] w-full md:max-w-[50%] text-center">
      <Image src={cardImg} alt={cardHeading} />
      <h3 className="font-semibold text-xl md:text-2xl my-3">{cardHeading}</h3>
      <p className="leading-7 text-lg text-gray-600">{cardBody}</p>
    </div>
  )
}
