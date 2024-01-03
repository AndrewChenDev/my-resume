import { TbMailOpenedFilled } from "react-icons/tb";
import { BsPhoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { MdWeb } from "react-icons/md";
import { Contact } from "@/components";

export default function Contacts() {
  return (
    <section className="contact-section">
      <div className="info flex justify-center gap-3.5 py-1.5">
        <Contact Icon={TbMailOpenedFilled} info={"andrew@andrew.ac"} />

        <Contact Icon={BsPhoneFill} info={"778-982-2607"} />

        <Contact Icon={FaLocationDot} info={"Coquitlam, BC"} />

        <Contact Icon={MdWeb} hyperlink={true} info={"https://andrew.ac"} />
      </div>
    </section>
  );
}
