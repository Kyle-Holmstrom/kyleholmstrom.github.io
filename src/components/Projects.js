import Fazoolin from "../images/BastaFazoolin.jpg";
import Tea from "../images/TeaCozy.jpg";


const Projects = () => {
    const project = [
        {
            title: "OOP/Classes",
            subtitle: "Python",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
            image: Fazoolin,
            link: "www.#.com",
          }, 
          {
            title: "Tea Cozy",
            subtitle: "HTML, CSS",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
            image: Tea,
            link: "www.#.com",
          },
    ]
    
    return (
        <section id="project" className="text-gray-400 bg-gray-900">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <span className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                    Apps I've Built
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
                    facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
                    fuga dolore.
                    </p>
            </div>
            <div className="flex flex-wrap -m-4">
                {project.map((myProject) => (
                <a
                    href={myProject.link}
                    key={myProject.image}
                    className="sm:w-1/2 w-100 p-4">
                    <div className="flex relative">
                    <img
                        alt="gallery"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        src={myProject.image}
                    />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                        {myProject.subtitle}
                        </h2>
                        <h1 className="title-font text-lg font-medium text-white mb-3">
                        {myProject.title}
                        </h1>
                        <p className="leading-relaxed">{myProject.description}</p>
                    </div>
                    </div>
                </a>
                ))}
            </div>
        </div>
    </section>
    )
}
export default Projects;