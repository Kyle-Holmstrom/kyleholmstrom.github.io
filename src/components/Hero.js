import me from '../images/me.jpg';

const Hero = () => { 
    return (
        <div className="bg-black pt-24">
            <span>
                <img src={me} alt="pic" 
                className="w-64 rounded-full mr-auto ml-auto"
                />
            </span>
            <h1 className="text-slate-100 font-mono flex justify-center text-6xl leading-loose">Hi, I'm Kyle</h1> 
            <div className="pl-11 text-gray-400 font-serif flex justify-center text-3xl leading-relaxed pb-20">
                <h2>
                    A <span className=" text-emerald-400 font-bold">Software Developer</span> from Long Island, NY.
                </h2>
            </div>      
        </div>
    )
}
export default Hero;