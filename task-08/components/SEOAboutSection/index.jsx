import Image from "next/image"

import contentImage2 from "@/assets/images/content-img-2.png"
import SectionHeading from "../lib/SectionHeading"

export default function SEOAboutSection() {
  return (
    <div className="min-h-screen grid place-content-center">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-24">
          <div>
            <SectionHeading
              headingText="SEO gains momentum by increasing your investment"
              className="!text-left"
            />
            <p className="leading-[1.4] text-gray-600 text-lg my-8">
              SEO is often referred to as the 'long-term game' in the marketing
              world. The more time you invest, the faster the benefits of SEO
              will accrue. As your website content (ie blog, service pages,
              etc.)
            </p>
            <p className="leading-[1.4] text-gray-600 text-lg">
              Search engine optimization ensures that your online presence is
              both articulated properly and discoverable to potential customers.
            </p>
            <a
              className="bg-ColorAtomicTangerine px-8 py-3 mt-6 hidden sm:inline-block rounded-[3px] font-semibold border-2 border-ColorAtomicTangerine hover:bg-white transition"
              href="#"
            >
              <span>Explore More</span>
            </a>
          </div>
          <Image
            src={contentImage2}
            alt="content-img-2"
            className="h-auto w-full rounded-[10px] border-2 border-ColorBlack"
          />
          <div className="absolute inset-0 left-0 -z-10 translate-x-1 translate-y-1 rounded-md bg-ColorBlack"></div>
        </div>
      </div>
  )
}
