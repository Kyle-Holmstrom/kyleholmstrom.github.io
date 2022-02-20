import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="pl-3 pt-14 pb-3 text-sm text-center font-serif bg-black">
            {/* <div className="flex justify-center">
                <form id="contact" className="box-border h-96 w-96 p-4 border-2 border-emerald-600 text-slate-100 bg-gray-900">
                    <label for="name">Name:</label> <br/>
                    <input type="text" id="name" className="text-black" /> <br/>
                    <label for="email">E-Mail:</label> <br/>
                    <input type="email" id="email" className="text-black" /> <br/>
                    <label for="message">Message:</label> <br/>
                    <textarea type="text" id="message" className="text-black"/> <br/>
                    <button 
                    type="submit"
                    className="mt-20 p-1 rounded-full bg-emerald-600 text-gray-100">
                        Contact
                    </button>
                </form>
            </div> */}
            <div className="pt-7 pb-12 flex justify-center">
                <ul className="flex justify-inline">
                    <li className="mx-2">
                        <a href="https://github.com/Kyle-Holmstrom?tab=repositories" rel="noreferrer" target="_blank" >
                            {/* <img 
                            className="w-20 bg-white"
                            src={GitLogo} alt="GitHub" /> */}
                            <FontAwesomeIcon className="h-12 text-white" icon={faGithub} />
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="https://www.linkedin.com/in/kyle-holmstrom-7a2665127/" rel="noreferrer" target="_blank">
                            <FontAwesomeIcon className="h-12 text-white" icon={faLinkedinIn} />
                        </a>
                    </li>
                </ul>
            </div>
            <section className="my-3 text-gray-400 text-l font-serif">
                © Kyle Holmstrom, 2022 
            </section>
        </footer>
    )
}

export default Footer;