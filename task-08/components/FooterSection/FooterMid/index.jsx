import FooterLinks from "./FooterLinks"
import Info from "./Info"

export default function FooterMid() {
  const primary = ["Home", "About Us", "Services", "Pricing", "Contact"]
  const utility = ["Signup", "Login", "404 Not Found", "Password Reset"]
  const resources = [
    "Support",
    "Privacy Policy",
    "Terms & Conditions",
    "Strategic Finance",
    "Video Guide",
  ]

  return (
    <div className="py-[60px] lg:py-20 xl:py-[100px] text-white px-3 md:px-[50px]">
      <div className="grid gap-x-16 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1fr_repeat(3,_auto)] xl:gap-x-24 xxl:gap-x-[134px] text-lg">
        <Info />
        <FooterLinks title="Primary Pages" links={primary} />
        <FooterLinks title="Utility Pages" links={utility} />
        <FooterLinks title="Resources" links={resources} />
      </div>
    </div>
  )
}
