import Button from "../lib/Button"
import SectionHeading from "../lib/SectionHeading"

export default function FooterTop() {
  return (
    <div className="">
      <div className="pt-[60px] lg:pt-20 xl:pt-[100px] px-3 md:px-10 pb-10">
        <div className="flex flex-col items-center justify-between gap-x-9 gap-y-2 rounded-[5px] bg-ColorAtomicTangerine p-10 md:flex-row lg:gap-x-20 lg:p-[50px]">
          <div className="max-w-none md:max-w-[60%] lg:max-w-[62%] xl:max-w-[636px]">
            <SectionHeading
              headingText="Are you ready to increase your SEO ranking?"
              className="md:!text-left md:!leading-[1.3]"
            />
          </div>
          <div className="">
            <Button
              href="#"
              className="bg-ColorBlack text-white border-ColorBlack hover:text-ColorBlack inline-block w-full rounded-[3px] border-2"
            >
              <span>Let's Get Started</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
