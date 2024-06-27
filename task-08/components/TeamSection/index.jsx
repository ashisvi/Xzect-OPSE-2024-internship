import SectionHeading from "../lib/SectionHeading"
import MemberCard from "./MemberCard"
import teamImage1 from "@/assets/images/team-img-1.jpg"
import teamImage2 from "@/assets/images/team-img-2.jpg"
import teamImage3 from "@/assets/images/team-img-3.jpg"
import teamImage4 from "@/assets/images/team-img-4.jpg"

export default function TeamSection() {
  const team = [
    {
      name: "Cameron Williamson",
      role: "CEO@Company",
      image: teamImage1,
    },
    {
      name: "Leslie Alexander",
      role: "Senior SEO Manager",
      image: teamImage2,
    },
    {
      name: "Esther Howard",
      role: "WP Developer",
      image: teamImage3,
    },
    {
      name: "Kristin Watson",
      role: "SEO Executive",
      image: teamImage4,
    },
  ]

  return (
    <div className="min-h-screen py-10 px-3 md:px-[50px]">
      <div className="my-[50px]">
        <SectionHeading
          headingText="Our SEO experts are available to assist you"
          className="!text-left"
        />
        <a
          href="#"
          className="inline-block my-5 bg-ColorAtomicTangerine border-2 border-ColorAtomicTangerine px-6 py-3 rounded text-[18px] font-semibold hover:bg-white transition"
        >
          <span>Meet All Members</span>
        </a>
      </div>
      <div className="grid overflow-hidden rounded-[10px] sm:grid-cols-2 lg:grid-cols-4">
        {team.map((item, index) => (
          <MemberCard
            key={index}
            name={item.name}
            role={item.role}
            image={item.image}
          />
        ))}
      </div>
    </div>
  )
}
