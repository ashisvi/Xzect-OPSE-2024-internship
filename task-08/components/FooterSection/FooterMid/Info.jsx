import Image from "next/image"

import logoLight from "@/assets/images/logo-tangerine-light.png"
import SocialLinks from "@/components/lib/SocialLinks"

export default function Info() {
  return (
    <div className="flex flex-col gap-y-7 md:col-span-3 lg:col-span-1">
      <a href="#">
        <Image src={logoLight} alt="Masco" width="109" height="24" />
      </a>
      <div>
        <div className="lg:max-w-[416px]">
          We are strategic &amp; creative digital agency who are focused on user
          experience, mobile, social, data gathering and promotional offerings.
        </div>
        <a
          href="mailto:yourdemo@email.com"
          className="my-6 block underline-offset-4 transition-all duration-300 hover:underline"
        >
          yourdemo@email.com
        </a>
        <div className="flex flex-wrap gap-5">
          <SocialLinks />
        </div>
      </div>
    </div>
  )
}
