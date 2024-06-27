import FooterBottom from "./FooterBottom"
import FooterMid from "./FooterMid"
import FooterTop from "./FooterTop"

export default function FooterSection() {
  return (
    <footer className="overflow-hidden">
      <div className="bg-[#1B1C1D]">
        <FooterTop />
        <FooterMid />
        <div className="border-t border-t-white/20 w-[95%] mx-auto"></div>
        <FooterBottom />
      </div>
    </footer>
  )
}
