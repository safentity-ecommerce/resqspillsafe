import Link from "next/link"

export default function TopBar() {
  return (
    <div className="bg-primary h-[6vh] max-[800px]:h-[9vh] max-[800px]:py-[0.8rem]">
      <div className="container">
        <div className="flex items-center justify-between max-[800px]:flex-col">
          <ul className="flex items-center gap-[2rem] h-[6vh] list-none max-[800px]:flex-wrap max-[800px]:gap-[1rem]">
            <li className="text-[1.4rem] list-none">
              <a href="tel:7827258487" className="text-text-primary font-medium no-underline">
                <i className="fa-solid fa-phone" />&nbsp; 7827258487
              </a>
            </li>
            <li className="text-[1.4rem] list-none">
              <a
                href="mailto:prateek@safentity.in"
                className="text-text-primary font-medium no-underline"
              >
                <i className="fa-solid fa-envelope" />&nbsp; prateek@safentity.in
              </a>
            </li>
            <li className="text-[1.4rem] list-none">
              <a href="#" className="text-text-primary font-medium no-underline">
                <i className="fa-sharp fa-solid fa-clock" />&nbsp; Mon - Sun: Anytime
              </a>
            </li>
          </ul>
          <ul className="flex items-center gap-[2rem] h-[6vh] list-none max-[800px]:gap-[1rem]">
            <li>
              <a href="/" target="_blank" className="text-text-primary text-[1.8rem]">
                <i className="fa-brands fa-facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/resqspillsafe/"
                target="_blank"
                className="text-text-primary text-[1.8rem] max-[800px]:hidden"
              >
                <i className="fa-brands fa-instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/+917827258487"
                target="_blank"
                className="text-text-primary text-[1.8rem] max-[800px]:hidden"
              >
                <i className="fa-brands fa-whatsapp" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
