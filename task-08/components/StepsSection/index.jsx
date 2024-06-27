import SectionHeading from "../lib/SectionHeading"

export default function StepsSection() {
  return (
    <div className="min-h-screen border-t border-gray-500/50 grid place-content-center">
      <div>
        <div className="mx-auto max-w-[670px]">
          <SectionHeading
            headingText="We follow a simple, yet effective SEO ranking process"
            className="max-w-[660px] py-[30px]"
          />
        </div>
        <div className="grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-20 xxl:gap-x-[104px] mt-[30px]">
          <div className="group relative z-10 text-center after:absolute after:left-[calc(50%+_40px)] after:top-10 after:-z-10 after:hidden after:w-full after:border after:border-dashed after:border-black last:after:hidden lg:after:block xl:after:w-[calc(100%+_80px)]">
            <div className="mx-auto mb-[30px] flex h-[60px] w-[60px] items-center justify-center rounded-[50%] border border-black bg-white text-[26px] font-semibold leading-[1.2] text-black transition-all duration-300 group-hover:border-ColorAtomicTangerine group-hover:bg-ColorAtomicTangerine lg:h-20 lg:w-20 xl:text-[34px]">
              1
            </div>
            <div className="mb-[15px] text-2xl font-semibold leading-[1.4] text-black xl:text-3xl">
              Keyword Research
            </div>
            <p className="text-xl leading-[1.5]">
              Keyword research is the process of discovering valuable search
              queries
            </p>
          </div>
          <div className="group relative z-10 text-center after:absolute after:left-[calc(50%+_40px)] after:top-10 after:-z-10 after:hidden after:w-full after:border after:border-dashed after:border-black last:after:hidden lg:after:block xl:after:w-[calc(100%+_80px)]">
            <div className="mx-auto mb-[30px] flex h-[60px] w-[60px] items-center justify-center rounded-[50%] border border-black bg-white text-[26px] font-semibold leading-[1.2] text-black transition-all duration-300 group-hover:border-ColorAtomicTangerine group-hover:bg-ColorAtomicTangerine lg:h-20 lg:w-20 xl:text-[34px]">
              2
            </div>
            <div className="mb-[15px] text-2xl font-semibold leading-[1.4] text-black xl:text-3xl">
              Link Building
            </div>
            <p className="text-xl leading-[1.5]">
              Link building is a SEO technique that increases your search engine
              ranking
            </p>
          </div>
          <div className="group relative z-10 text-center after:absolute after:left-[calc(50%+_40px)] after:top-10 after:-z-10 after:hidden after:w-full after:border after:border-dashed after:border-black last:after:hidden lg:after:block xl:after:w-[calc(100%+_80px)]">
            <div className="mx-auto mb-[30px] flex h-[60px] w-[60px] items-center justify-center rounded-[50%] border border-black bg-white text-[26px] font-semibold leading-[1.2] text-black transition-all duration-300 group-hover:border-ColorAtomicTangerine group-hover:bg-ColorAtomicTangerine lg:h-20 lg:w-20 xl:text-[34px]">
              3
            </div>
            <div className="mb-[15px] text-2xl font-semibold leading-[1.4] text-black xl:text-3xl">
              Ranking
            </div>
            <p className="text-xl leading-[1.5]">
              It helps a website's 1st position in the search engine results
              page
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
