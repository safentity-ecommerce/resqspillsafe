export default function Banner() {
  return (
    <section className="w-full bg-surface-dark my-[8rem] py-[6rem] text-center">
      <div className="container">
        <div className="w-full h-full flex items-center">
          <div className="flex flex-col gap-[1.5rem] w-full text-white">
            <h2 className="text-[4.4rem] leading-[1.3] max-[550px]:text-[4.2rem]">
              Get high quality spill protection from your trusted brand.
            </h2>
            <p className="text-[2.4rem] max-[550px]:text-[2rem]">
              Order Now.{" "}
              <span className="text-primary font-medium">Get Fast.</span>{" "}
              Reliable Shipping.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
