
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
            
            <p className="my-3 text-gray-400 text-l">
            © <span>Kyle Holmstrom</span>, 2022 
            </p>

        </footer>
    )
}

export default Footer;