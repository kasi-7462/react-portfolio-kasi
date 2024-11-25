import logo from "../assets/logo.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt="" />
      </div>
      <div className="m-8 flex items-center justify-center gap-3 text-xl text-white">
        <a href="http://linkedin.com/in/kasi-viswanathan-k"><FaLinkedin /></a>
        <a href="https://github.com/kasi-7462"><FaGithub/></a>
        <a href="https://wa.me/+919360687462"><FaWhatsapp/></a>
        <a href="https://www.instagram.com/im_kasi_tn_57_rider?igsh=ZjltaWtyYjBldGpn"><FaInstagram/></a>
      </div>
    </nav>
  )
}

export default Navbar
