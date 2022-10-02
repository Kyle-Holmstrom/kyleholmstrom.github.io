
const AboutMe = () => {
    return (
        <div className="AboutMe bg-gray-900 pt-8 pb-44">
            <h1 className="pb-10 flex justify-center font-mono text-4xl leading-loose text-gray-200">About Me</h1>
            <div className="flex justify-center font-serif text-xl leading-relaxed text-gray-100">
                <p className="break-words indent-9 px-6">
                    I am a software developer who specializes in the MERN stack. I have a bachelors degree in computer science with 
                    a major in software development. Aside from learning software development in college I have been studying and learning 
                    on my own. On my free time, I enjoy learning and playing guitar <strong className="text-3xl">🎸</strong>. I am currently pursuing my career path as a software developer!.. 
                    oh did I mention that I am currently looking for work! 
                    <strong className="animate-pulse text-emerald-400">
                        <a href="mailto:holmstrom.kyle@yahoo.com?subject=Job%20Offer%20From%20Web%20Portfolio" className="pl-2">Hire Me! :)</a>
                    </strong>
                </p>
            </div>
        </div>
    )
}

export default AboutMe;