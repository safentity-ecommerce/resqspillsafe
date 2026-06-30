import Image from "next/image"

const testimonials = [
  {
    quote:
      "These spill kits have exceeded our expectations. They are well-designed, easy to use, and the cleanup process is a breeze. Our team feels more confident and prepared with these kits on hand. We highly recommend them.",
    name: "Aarav Patel",
    company: "EcoGuard Industries LLP.",
  },
  {
    quote:
      "We've been using these spill kits for a while now, and they never disappoint. They are reliable, efficient, and have become an essential part of our safety protocols. We couldn't be happier with the results and the level of support we've received from the team",
    name: "Aisha Sharma",
    company: "GreenEarth Chemicals Pvt. Ltd.",
    hideMobile: true,
  },
]

export default function Testimonial() {
  return (
    <section className="bg-white py-[10rem] text-[#010103]">
      <div className="container">
        <div className="flex flex-col">
          <div className="flex flex-col mx-auto text-center max-w-[70rem] mb-[5rem]">
            <h4 className="text-[2.2rem] font-rubik font-medium">
              Reviewed by People
            </h4>
            <h2 className="text-[4.2rem] mb-[1.4rem]">Client&apos;s Testimonial</h2>
            <p className="text-[1.6rem] font-rubik text-text-secondary leading-[1.4]">
              Read our clients&apos; testimonial and discover the positive impact
              we&apos;ve made. They&apos;ve experienced our exceptional service and
              results firsthand and are excited to share their satisfaction with
              you.
            </p>
          </div>

          <div className="flex gap-[3rem] w-full justify-center px-[3rem] max-[1000px]:px-0">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className={`bg-white shadow-[0_20px_40px_0_rgba(0,0,0,0.08)] w-[54rem] p-[5.5rem] relative max-[1000px]:p-[5rem_3rem] ${
                  t.hideMobile ? "max-[900px]:hidden" : ""
                }`}
              >
                <span className="text-[6.2rem] text-primary absolute bottom-[33px] right-[60px] max-[470px]:hidden">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p className="text-[2.2rem] font-medium leading-normal">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-[2rem] mt-[3rem]">
                  <Image
                    src="/images/testimonial/default_profile.png"
                    alt="user_img"
                    width={70}
                    height={70}
                    className="w-[7rem] h-[7rem] rounded-full"
                  />
                  <span>
                    <h4 className="text-[1.8rem]">{t.name}</h4>
                    <p className="text-[1.6rem] font-rubik font-normal text-text-secondary">
                      {t.company}
                    </p>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
