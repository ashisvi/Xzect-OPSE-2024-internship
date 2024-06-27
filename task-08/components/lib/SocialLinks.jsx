import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa"

export default function SocialLinks() {
  const socialIcons = [
    <FaTwitter />,
    <FaFacebook />,
    <FaInstagram />,
    <FaGithub />,
  ]

  return (
    <>
      {socialIcons.map((icon) => (
        <a
          href="#"
          className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-[#FDFBF9]/10 text-sm text-white transition-all duration-300 hover:bg-ColorAtomicTangerine hover:text-[#1B1C1D]"
        >
          {icon}
        </a>
      ))}
    </>
  )
}
