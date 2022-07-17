import icon from '../images/computerHoodie.png';

const AnimatedIcon = () => {
    return (
        <div className="bg-black pt-8">
            <img src={icon} alt="computer"
            className="animate-bounce h-12 w-12 ml-8 mt-0 pt-0 rounded-full" />
        </div>
    )
};
export default AnimatedIcon;