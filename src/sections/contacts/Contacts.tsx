import { TbMailOpenedFilled } from "react-icons/tb";
import { BsPhoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { MdWeb } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Contact } from "@/components";

export default function Contacts({ className = "" }: { className?: string }) {
  return (
    <section className={`contact-section ${className}`}>
      <div className="info flex justify-center gap-3.5 py-1.5">
        {/*Phone*/}
        <Contact info={"778-982-2607"} />
        {/*Email*/}
        <Contact info={"andrew@andrew.ac"} />
        {/*linkedin*/}
        <Contact Icon={FaLinkedin} info={"linkedin.com/in/Andrewc-Dev/"} />
        {/*github*/}
        <Contact Icon={FaGithub} info={"github.com/AndrewChenDev"} />
      </div>
    </section>
  );
}
