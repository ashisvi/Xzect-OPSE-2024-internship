import Image from "next/image"
import { BiMenu } from "react-icons/bi"

import logo from "@/assets/images/logo-tangerine-dark.png"
import MobileMenu from "./MobileMenu"

export default function Header() {
  return (
    <div className="flex justify-between items-center">
      <Image src={logo} alt="logo" />
      <div className="lg:hidden">
        <MobileMenu />
        <BiMenu size={36} />
      </div>
    </div>
  )
}
