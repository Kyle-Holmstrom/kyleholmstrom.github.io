import me from '../images/me.jpg';

const Hero = () => { 
    return (
        <div className="bg-black pt-24">
            <span>
                <img src={me} alt="pic" 
                className="w-64 rounded-full mr-auto ml-auto"
                />
            </span>
            <span className="text-slate-100 font-mono flex justify-center text-6xl leading-loose">Hi, I'm Kyle</span> 
            <span className="mx-4 text-gray-400 font-serif flex justify-center text-3xl leading-relaxed pb-20">I'm a software developer
                from Long Island, NY.</span>
                     
        </div>
    )
}
export default Hero;