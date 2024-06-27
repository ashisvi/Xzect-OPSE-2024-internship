import Image from "next/image"
import SectionHeading from "../lib/SectionHeading"

import contentImage1 from "@/assets/images/content-img-1.png"

export default function ProfitSection() {
  return (
    <div className="min-h-screen bg-[#F5F3EA] px-5 py-10 flex justify-center">
      <div className="mx-auto flex justify-center items-center flex-wrap lg:flex-nowrap gap-8 max-w-[600px] lg:max-w-[100%]">
        <div className="min-w-[400px] lg:order-2">
          <SectionHeading
            headingText="SEO agency that will evolve your search performance"
            className="text-start"
          />
          <p className="text-gray-700 leading-7 text-lg">
            These days, no business can’t to ignore Search Engine Optimization.
            SEO should plays a part in your online marketing strategy as it helps
            people to find you online. Over time that leads to more sales.
          </p>
          <div className="flex flex-cols sm:flex-row gap-6 my-10">
            <div>
              <div className="text-orange-500/70 text-6xl font-bold">98%</div>
              <p className="text-lg text-gray-600">Average Conversion Rate</p>
            </div>
            <div>
              <div className="text-orange-500/70 text-6xl font-bold">60M</div>
              <p className="text-lg text-gray-600">Traffic Generated</p>
            </div>
          </div>
        </div>
        <div className="min-w-[45%] flex-1">
          <Image src={contentImage1} className="w-full" alt="content-image-1" />
        </div>
      </div>
    </div>
  )
}
