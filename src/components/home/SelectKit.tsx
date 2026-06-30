import Image from "next/image"

const steps = [
  {
    img: "/images/select/spill.png",
    title: "Select Kit",
    desc: "Choose from our wide range of spill kits to keep your workplace safe and compliant.",
  },
  {
    img: "/images/select/customer-operator.png",
    title: "Contact Operator",
    desc: "Get in touch with our knowledgeable and friendly operators for assistance with any questions or concerns.",
  },
  {
    img: "/images/select/cleanit.png",
    title: "Clean it up!",
    desc: "Quickly and effectively clean up spills with our high-quality spill kits designed for easy use and disposal.",
  },
]

export default function SelectKit() {
  return (
    <section className="bg-white py-[5.3rem]">
      <div className="container">
        <div className="flex flex-col">
          <div className="mx-auto text-center text-text-primary">
            <h3 className="text-[2.4rem] font-rubik font-medium">
              Quick and Easy Purchasing
            </h3>
            <h2 className="text-[4.2rem] font-poppins font-bold mx-[1.3rem_0_3rem_0]">
              Buy now with just a few clicks!
            </h2>
          </div>

          <div className="grid grid-cols-3 mt-[3.7rem] px-[3rem] max-[1021px]:grid-cols-2 max-[1021px]:gap-y-[2rem] max-[800px]:grid-cols-1 max-[800px]:mt-[1rem]">
            {steps.map((step) => (
              <div key={step.title} className="text-center px-[6rem] py-[1rem] max-[500px]:px-[1rem]">
                <Image
                  src={step.img}
                  alt="icon_img"
                  width={120}
                  height={120}
                  className="w-[12rem] h-auto mb-[1rem] mx-auto"
                />
                <h3 className="text-[2.4rem] mb-[1rem]">{step.title}</h3>
                <p className="text-[1.6rem] font-rubik text-text-secondary leading-[1.43]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
