import Image from "next/image"

const clients = [
  { src: "/images/client/indian-oil.png", alt: "indian oil" },
  { src: "/images/client/reliance-industries.png", alt: "reliance industries" },
  { src: "/images/client/gail.png", alt: "gail" },
  { src: "/images/client/adani-wilmar.png", alt: "adani wilmar" },
  { src: "/images/client/ongc.jpg", alt: "ongc" },
  { src: "/images/client/ntpc.png", alt: "ntpc" },
  { src: "/images/client/chennai-petroleum.png", alt: "chennai petroleum" },
]

export default function Client() {
  return (
    <section className="bg-surface-light py-[5.3rem]">
      <div className="container">
        <div className="flex flex-col">
          <div className="mx-auto text-center text-text-primary">
            <h4 className="text-[2.2rem] font-rubik font-medium">
              Powering Success Across India
            </h4>
            <h2 className="text-[4.2rem] mb-[5rem]">
              Trusted by over 10 Lakh marketers at 20,000+ businesses around the India.
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-[5rem]">
            {clients.map((client) => (
              <Image
                key={client.alt}
                src={client.src}
                alt={client.alt}
                width={120}
                height={85}
                className="h-[8.5rem] w-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
