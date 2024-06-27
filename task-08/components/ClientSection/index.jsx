import Image from "next/image"

import quoteImage from "@/assets/images/icon-tangerine-quote.svg"
import clientImage from "@/assets/images/testimonial-user.png"
import SectionHeading from "../lib/SectionHeading"
import Button from "../lib/Button"

export default function ClientSection() {
  return (
    <div className="min-h-screen pb-20 pt-10 mt-10 border-t-2 border-t-ColorBlack/10">
      <div className="mb-[60px] flex flex-wrap items-center justify-between gap-8 xl:mb-10">
        <div className="mx-auto max-w-[636px]">
          <SectionHeading headingText="We are the best from our client's point of view" />
        </div>
      </div>

      <div className="grid items-center gap-x-[60px] gap-y-[40px] text-center md:grid-cols-[1fr_minmax(0,0.5fr)] md:text-left lg:gap-x-20 xl:grid-cols-[1fr_minmax(0,0.7fr)] xl:gap-x-40 xxl:gap-x-[220px]">
        <div className="order-2 md:order-1">
          <div className="mb-6">
            <Image
              src={quoteImage}
              alt="icon-tangerine-quote"
              width="80"
              height="71"
            />
          </div>
          <blockquote className="-traking-[0.5px] mb-6 text-xl font-semibold text-ColorBlack lg:text-2xl">
            “We are very satisfied with the SEO services we have received from
            Masco so far. Although SEO has only been around for a short time, we
            are already seeing a positive step in our page rank. We would
            recommend Masco's SEO services to anyone looking to increase their
            web exposure."
          </blockquote>
          <div className="mb-[30px] lg:mb-[50px]">
            <span className="block text-xl font-semibold text-ColorBlack">
              Anjilia Smith
            </span>
            <span>Marketing Officer at Company</span>
          </div>
          <Button
            href="#"
            className="mt-4 hidden rounded-[3px] sm:inline-block max-w-[400px]"
          >
            <span className="inline-block w-full text-center text-lg">
              View 1000+ Happy Clients Reviews
            </span>
          </Button>
        </div>

        <div className="order-1 md:order-2">
          <Image
            src={clientImage}
            alt="testimonial-image-1"
            width="364"
            height="400"
            className="mx-auto w-10/12 md:mx-0 md:w-full"
          />
        </div>
      </div>
    </div>
  )
}
