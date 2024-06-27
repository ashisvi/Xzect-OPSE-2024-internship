"use client"

import { useState } from "react"

import SectionHeading from "../lib/SectionHeading"
import ServiceCard from "./ServiceCard"
import ToggleBtn from "./ToggleBtn"

import image1 from "@/assets/images/icon-black-home-5-pricing-1.svg"
import image2 from "@/assets/images/icon-black-home-5-pricing-2.svg"
import image3 from "@/assets/images/icon-black-home-5-pricing-3.svg"

export default function ServiceSection() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <div className="min-h-screen px-3 md:px-[50px] py-5">
      <div className="my-8">
        <SectionHeading
          headingText="Explore our SEO service plans and choose your plan"
          className="mx-auto"
        />
        <ToggleBtn isYearly={isYearly} setIsYearly={setIsYearly} />
      </div>
      <div className="mx-auto grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        <ServiceCard
          image={image1}
          planName="Silver Plan"
          monthlyPrice={30}
          yearlyPrice={300}
          points={[
            "50 key phrases optimized",
            "30 pages optimized",
            "6 CRO assets per quarter",
            "8 custom dashboards",
            "Revenue tracking dashboard",
          ]}
          isBtnBlue={true}
          isYearly={isYearly}
        />
        <ServiceCard
          image={image2}
          planName="Gold Plan"
          monthlyPrice={50}
          yearlyPrice={540}
          points={[
            "200 key phrases optimized",
            "40 pages optimized",
            "12 CRO assets per quarter",
            "10 custom dashboards",
            "Revenue tracking dashboard",
          ]}
          isYearly={isYearly}
        />
        <ServiceCard
          image={image3}
          planName="Diamond Plan"
          monthlyPrice={80}
          yearlyPrice={840}
          points={[
            "300 key phrases optimized",
            "60 pages optimized",
            "24 CRO assets per quarter",
            "12 custom dashboards",
            "Revenue tracking dashboard",
          ]}
          isBtnBlue={true}
          isYearly={isYearly}
        />
      </div>
    </div>
  )
}
