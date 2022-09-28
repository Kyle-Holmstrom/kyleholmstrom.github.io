
const AboutMe = () => {
    return (
        <div className="AboutMe bg-gray-900 pt-8 pb-44">
            <h1 className="pb-10 flex justify-center font-mono text-4xl leading-loose text-gray-200">About Me</h1>
            <div className="flex justify-center font-serif text-xl leading-relaxed text-gray-100">
                <p className="text-justify break-words indent-9 px-6">
                    I have studied software development in college where I have received my bachelors degree in Computer Science.
                    Aside from learning software development in college I have been studying and learning on my own.
                    And through this hard work and dedication I have been awarded the deans list on two separate occasions.
                    I am currently pursuing my career path as a software developer! 
                    <strong className="animate-pulse text-emerald-400">
                        <a href="mailto:holmstrom.kyle@yahoo.com?subject=Job%20Offer%20From%20Web%20Portfolio" className="pl-2">Hire Me! :)</a>
                    </strong>
                </p>
            </div>
        </div>
    )
}

export default AboutMe;