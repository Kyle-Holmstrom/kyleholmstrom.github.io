import icon from '../images/computerHoodie.png';

const AnimatedIcon = (props) => {
    
    if (props.showIcon === false) {
        return '';
    } else if (props.showIcon === true) {
        return (
            <div className="bg-black pt-8">
                <img src={icon} alt="computer"
                className="animate-pulse opacity-80 h-12 w-12 ml-8 mt-0 pt-0 rounded-full" />
            </div>
        )
    }
};
export default AnimatedIcon;