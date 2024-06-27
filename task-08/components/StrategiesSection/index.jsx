import SectionHeading from "../lib/SectionHeading"
import StrategyCard from "./StrategyCard"

export default function StrategiesSection() {
  const strategyContent = [
    {
      heading: "Keyword strategy",
      body: "When developing a keyword strategy, we use a number of tools to conduct keyword research alongside years of knowledge.",
      slug: "#",
    },
    {
      heading: "Content optimization",
      body: "Ranking on page 1 &gaining rich snippets requires a detailed SEO content strategy. Everything from header tag optimization.",
      slug: "#",
    },
    {
      heading: "Technical SEO",
      body: "Creating great content is one thing, but making sure Googlebot can crawl, and index it efficiently is another! We used.",
      slug: "#"
    },
    {
      heading: "Link building & SEO audits",
      body: "When developing a keyword strategy, we use a number of tools to conduct keyword research alongside years of knowledge.",
      slug: "#"
    },
    {
      heading: "Website migrations",
      body: "Whether it’s a domain, design, or platform migration, there is always the risk of losing organic traffic. We can mitigate that risk.",
      slug: "#"
    },
    {
      heading: "E-Commerce SEO",
      body: "E-Commerce websites require a unique approach to SEO in order to maximize for product page visibility and increase sales.",
      slug: "#"
    }
  ]

  return (
    <div className="min-h-screen bg-black/90 p-5 md:px-[50px] pb-10">
      <SectionHeading
        headingText="Boost your business with advanced SEO strategies"
        className="text-white mx-auto my-[50px]"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {strategyContent.map((item, index) => (
          <StrategyCard
            key={index}
            number={index+1}
            heading={item.heading}
            body={item.body}
            slug={item.slug}
          />
        ))}
      </div>
    </div>
  )
}
