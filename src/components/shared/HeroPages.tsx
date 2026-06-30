import Link from "next/link"

export default function HeroPages({ name }: { name: string }) {
  return (
    <section className="h-[41rem] bg-[url('/images/hero/hero-bg.png')] bg-center bg-cover bg-no-repeat relative">
      <div className="absolute inset-0 bg-white/92" />
      <div className="container relative z-[3] flex items-center h-full">
        <div>
          <h3 className="text-[3.6rem] font-bold mb-[0.5rem]">{name}</h3>
          <p className="text-[1.6rem] font-semibold">
            <Link href="/" className="text-text-primary no-underline transition-colors hover:text-primary">
              Home
            </Link>{" "}
            / {name}
          </p>
        </div>
      </div>
    </section>
  )
}
