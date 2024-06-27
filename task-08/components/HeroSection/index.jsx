"use client"

import Image from "next/image"

import InputForm from "./InputForm"
import greenStar from "@/assets/images/icon-green-star.svg"
import heroImage1 from "@/assets/images/hero-card-1.png"
import heroImage2 from "@/assets/images/hero-card-2.png"
import heroImage3 from "@/assets/images/hero-card-3.png"

export default function HeroSection() {
  function getRatings() {
    const ratings = []
    for (let i = 0; i < 5; i++) {
      ratings.push(<Image key={i} src={greenStar} width={18} height={18} alt="star" />)
    }
    return ratings
  }

  return (
    <div className="flex flex-wrap gap-3 md:gap-8 my-8">
      <div className="min-w-[300px] flex-1">
        <h1 className="text-5xl font-bold my-5 leading-[120%]">
          Bring additional qualified traffic to your website
        </h1>
        <p className="text-gray-600 text-lg">
          SEO is a digital marketing strategy that helps your website appear in
          relevant search results in search engines. It involves various
          techniques from using to keywords on your pages to earning links to
          your site.
        </p>
        <div className="flex-1 py-6">
          <div>
            <InputForm />
            <div className="flex gap-2 mt-5">
              <div className="flex gap-1">{getRatings()}</div>
              <span>(4.8 out of 5 Rating)</span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-[100%] md:max-w-[500px]">
        <Image
          src={heroImage1}
          alt="hero-card-1"
          width="320"
          height="301"
        />
        <Image
          src={heroImage2}
          alt="hero-card-2"
          width="299"
          height="236"
          className="ml-auto mt-6 hidden sm:block"
        />
        <Image
          src={heroImage3}
          alt="hero-card-3"
          width="244"
          height="235"
          className="absolute -right-4 top-14 hidden xl:block"
        />
      </div>
    </div>
  )
}
