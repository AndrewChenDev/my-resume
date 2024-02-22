import { TbMailOpenedFilled } from "react-icons/tb";
import { BsPhoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { MdWeb } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { Contact } from "@/components";

export default function Contacts() {
  return (
    <section className="contact-section">
      <div className="info flex justify-center gap-3.5 py-1.5">
        {/*Email*/}
        <Contact Icon={TbMailOpenedFilled} info={"andrew@andrew.ac"} />
        {/*Phone*/}
        <Contact Icon={BsPhoneFill} info={"778-982-2607"} />
        {/*Location*/}
        <Contact Icon={FaLocationDot} info={"Coquitlam, BC"} />
        {/*website*/}
        <Contact Icon={MdWeb} hyperlink={true} info={"https://andrew.ac"} />
        {/*github*/}
        <Contact
          Icon={FaGithub}
          hyperlink={true}
          info={"https://github.com/andrew840513"}
          alternativeDisplay={"andrew840513"}
        />
      </div>
    </section>
  );
}
