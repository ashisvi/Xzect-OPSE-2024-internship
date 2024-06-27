"use client"

import SectionHeading from "../lib/SectionHeading"
import Card from "./Card"

import featureIcon1 from "@/assets/images/icon-tangerine-feature-1.svg"
import featureIcon2 from "@/assets/images/icon-tangerine-feature-2.svg"
import featureIcon3 from "@/assets/images/icon-tangerine-feature-3.svg"

export default function () {
  const featureContent = [
    {
      cardImg: featureIcon1,
      cardHeading: "Increases Brand Awareness",
      cardBody:
        "You want to stand out in your industry as a leader, but you also want to be seen as a relevant solution for your audience.",
    },
    {
      cardImg: featureIcon2,
      cardHeading: "Amplifies PPC Success",
      cardBody:
        "Make sure you optimize your PPC ads for both desktop and mobile search ads for focusing on desktop successfully.",
    },
    {
      cardImg: featureIcon3,
      cardHeading: "Builds Customer Trust",
      cardBody:
        "Even with a strong SEO strategy, building customer trust in your brand takes time. Invest in quality content for readers.",
    },
  ]

  return (
    <div className="bg-white px-3 md:px-[50px] py-[50px] min-h-screen flex flex-col justify-center items-center">
      <SectionHeading
        headingText={"Turn traffic with insanely SEO & growth into revenue"}
        className="my-10"
      />
      <div className="flex-1 flex justify-center items-center">
        <div className="flex flex-wrap gap-6 justify-start flex-col md:flex-row">
          {featureContent.map((item) => (
            <Card
              key={item.cardHeading}
              cardImg={item.cardImg}
              cardHeading={item.cardHeading}
              cardBody={item.cardBody}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
