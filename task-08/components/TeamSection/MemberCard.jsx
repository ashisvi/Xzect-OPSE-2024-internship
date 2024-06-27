import Image from "next/image"
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa"

export default function MemberCard({ name, role, image }) {
  return (
    <div className="group relative overflow-hidden">
      <Image
        src={image}
        alt="team-img-1"
        width="324"
        height="320"
        className="h-auto w-full transition-all duration-300 group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-5 right-5 translate-y-full rounded-[5px] bg-[#F5F3EA] p-5 transition-all duration-300 group-hover:-translate-y-5">
        <a
          href="#"
          className="mb-1 block font-bold leading-[1.44] text-ColorBlack transition-all duration-300 hover:text-ColorAtomicTangerine"
        >
          {name}
        </a>
        <div className="text-sm">
          <span>{role}</span>
          <div className="mt-2 flex gap-x-[10px]">
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ColorBlack transition-all duration-300 hover:text-ColorAtomicTangerine"
            >
              <FaTwitter size={15} />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ColorBlack transition-all duration-300 hover:text-ColorAtomicTangerine"
            >
              <FaFacebook size={15} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ColorBlack transition-all duration-300 hover:text-ColorAtomicTangerine"
            >
              <FaInstagram size={15} />
            </a>
            <a
              href="https://www.github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ColorBlack transition-all duration-300 hover:text-ColorAtomicTangerine"
            >
              <FaGithub size={15} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
