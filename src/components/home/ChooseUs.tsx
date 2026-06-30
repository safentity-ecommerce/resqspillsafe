import Link from "next/link"
import Image from "next/image"

const features = [
  {
    img: "/images/chooseUs/icon1.png",
    title: "Premium Quality",
    desc: "Our spill kits are made with high-quality materials to ensure maximum efficiency and effectiveness.",
  },
  {
    img: "/images/chooseUs/icon2.png",
    title: "Nationwide Availability",
    desc: "We offer nationwide shipping and distribution, making it easy for customers to access our products anywhere in the country.",
  },
  {
    img: "/images/chooseUs/icon3.png",
    title: "Affordable Prices",
    desc: "We believe in providing the best value for your money, which is why our spill kits are priced competitively without sacrificing quality.",
  },
]

export default function ChooseUs() {
  return (
    <section className="bg-white py-[2rem_0_10rem_0]">
      <div className="container">
        <div className="flex flex-col">
          <Image
            src="/images/chooseUs/chooseus-img.png"
            alt="spill_img"
            width={500}
            height={500}
            className="w-[60%] h-auto mx-auto max-[550px]:w-full"
          />

          <div className="flex justify-around mt-[3rem] w-full max-[1000px]:flex-col max-[1000px]:items-center max-[1000px]:text-center max-[1000px]:gap-[5.5rem]">
            <div className="text-left flex flex-col max-w-[50rem] text-text-primary max-[1000px]:items-center max-[1000px]:text-center">
              <h4 className="text-[2.2rem] mb-[0.7rem] font-semibold font-rubik">
                Why Choose Us
              </h4>
              <h2 className="text-[4.2rem] leading-[1.2] mb-[2rem]">
                Discover unbeatable value with our spill kit deals.
              </h2>
              <p className="text-[1.6rem] font-rubik leading-[1.5] text-text-secondary mb-[3.3rem]">
                Experience unbeatable deals for top-quality spill kits.
                We&apos;re dedicated to providing the best value for your money,
                so you can enjoy a superior spill protection experience without
                overspending. Don&apos;t miss out on our offers and save big on
                your spill kit needs.
              </p>
              <Link
                href="/spillkits"
                className="bg-primary text-text-primary font-bold px-[2.5rem] py-[1.5rem] rounded-[0.3rem] no-underline transition-all duration-300 text-[1.6rem] w-fit hover:bg-primary-hover"
              >
                Order Now &nbsp;
                <i className="fa-solid fa-angle-right"></i>
              </Link>
            </div>

            <div className="flex flex-col gap-[4.5rem] max-w-[44rem]">
              {features.map((feature) => (
                <div key={feature.title} className="flex max-[550px]:flex-col max-[550px]:items-center">
                  <Image
                    src={feature.img}
                    alt={`${feature.title}-img`}
                    width={80}
                    height={80}
                    className="w-[8rem] h-[8rem] mr-[1.1rem]"
                  />
                  <div className="flex flex-col gap-[1rem] justify-center">
                    <h4 className="text-[2.4rem]">{feature.title}</h4>
                    <p className="text-[1.6rem] text-text-secondary font-rubik leading-[1.3]">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
