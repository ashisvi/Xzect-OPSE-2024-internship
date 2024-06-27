export default function FooterLinks({ title, links }) {
  return (
    <div className="flex flex-col gap-y-7 md:col-span-1 lg:col-span-1">
      <div className="text-xl font-semibold capitalize">{title}</div>
      <ul className="flex flex-col gap-y-[10px] capitalize">
        {links.map((item, index) => (
          <Link key={index} linkText={item} />
        ))}
      </ul>
    </div>
  )
}

function Link({ linkText }) {
  return (
    <li>
      <a
        className="hover:opcity-100 text-[#FDFBF9]/80 underline-offset-4 transition-all duration-300 ease-linear hover:underline"
        href="#"
      >
        {linkText}
      </a>
    </li>
  )
}
