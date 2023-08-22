//import MeUniform from '../images/MeUniform.jpg';
import Portrait from '../images/softwareDeveloper.jpg';

const Hero = () => { 
    return (
        <div className="bg-black py-36">
            <span>
                <img src={Portrait} alt="pic" 
                className="z-1 h-96 rounded mr-auto ml-auto"
                />
            </span>
            <h1 className="text-slate-100 font-mono flex justify-center text-6xl leading-loose">
                Hi, <span className="pl-3">I'm</span><span className="pl-3 animate-pulse text-emerald-400">Kyle</span></h1> 
            <div className="pl-11 text-gray-100 font-serif flex justify-center text-3xl leading-relaxed pb-20">
                <h2>
                    A <span className="text-emerald-400 font-bold">Software Developer</span> from Long Island, NY.
                </h2>
            </div>
            <div className="pl-11 text-gray-100 font-serif flex justify-center text-3xl leading-relaxed">
                <mark>This site was created with React.js 😎</mark>
            </div>
            <br/>          
        </div>
    )
}
export default Hero;
