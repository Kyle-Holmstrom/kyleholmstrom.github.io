import MeUniform from '../images/MeUniform.jpg';

const Hero = () => { 
    return (
        <div className="bg-black py-44">
            <span>
                <img src={MeUniform} alt="pic" 
                className="z-1 h-96 rounded-full mr-auto ml-auto"
                />
            </span>
            <h1 className="text-slate-100 font-mono flex justify-center text-6xl leading-loose">Hi, I'm Kyle</h1> 
            <div className="pl-11 text-gray-100 font-serif flex justify-center text-3xl leading-relaxed pb-20">
                <h2>
                    A <span className=" text-emerald-400 font-bold">Software Developer</span> from Long Island, NY.
                </h2>
            </div>      
        </div>
    )
}
export default Hero;