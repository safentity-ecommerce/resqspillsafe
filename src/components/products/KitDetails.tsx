import Image from "next/image"
import type { ProductData } from "@/types"

export default function KitDetails({ product }: { product: ProductData }) {
  return (
    <div className="mb-[14rem]">
      <h3 className="text-[3rem] text-center uppercase mt-[10rem] mb-[3rem] max-md:text-[2rem]">
        {product.name}
      </h3>
      <div className="flex flex-row justify-center items-center gap-[5em] mx-[2rem] max-md:flex-col max-md:gap-[3rem] max-md:mx-[1rem]">
        <div className="w-[45%] max-md:w-full">
          <div className="w-full flex justify-center">
            <Image
              src={product.image}
              alt="product"
              width={400}
              height={400}
              className="w-[90%] h-auto"
            />
          </div>
        </div>

        <main className="w-[60%] h-[70vh] shadow-[0_0.4rem_0.8rem_rgba(0,0,0,0.03)] rounded-[0.8rem] max-md:w-full max-md:h-[50vh] max-[450px]:h-[70vh]">
          <div className="w-full h-full bg-white rounded-[0.6rem] overflow-auto overflow-overlay">
            <table className="w-full text-[1.4rem] border-collapse">
              <thead>
                <tr>
                  <th className="sticky top-0 bg-primary p-[1rem] text-left uppercase">#</th>
                  <th className="sticky top-0 bg-primary p-[1rem] text-left uppercase">description</th>
                  <th className="sticky top-0 bg-primary p-[1rem] text-left uppercase">qty</th>
                </tr>
              </thead>
              <tbody>
                {product.rows.map((row) => (
                  <tr
                    key={row.id}
                    className="even:bg-surface-muted uppercase transition-all duration-[0.5s]"
                  >
                    <td className="p-[1rem]">{row.id}</td>
                    <td className="p-[1rem]">{row.description}</td>
                    <td className="p-[1rem]">{row.qty}</td>
                  </tr>
                ))}
                <tr className="uppercase">
                  <td></td>
                  <td className="p-[1rem] font-bold">total contents</td>
                  <td className="p-[1rem] font-bold">{product.specs.totalContents}</td>
                </tr>
                <tr className="uppercase">
                  <td></td>
                  <td className="p-[1rem] font-bold">dimensions (l X w X h)</td>
                  <td className="p-[1rem] font-bold">{product.specs.dimensions}</td>
                </tr>
                <tr className="uppercase">
                  <td></td>
                  <td className="p-[1rem] font-bold">weight</td>
                  <td className="p-[1rem] font-bold">{product.specs.weight}</td>
                </tr>
                <tr className="uppercase">
                  <td></td>
                  <td className="p-[1rem] font-bold">price</td>
                  <td className="p-[1rem]">{product.specs.price}</td>
                </tr>
                <tr className="uppercase">
                  <td></td>
                  <td className="p-[1rem] font-bold">gst extra</td>
                  <td className="p-[1rem] font-bold">{product.specs.gstExtra}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  )
}
