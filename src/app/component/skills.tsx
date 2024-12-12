export default function Skills() {
    const skills = [
      {
        name: "HTML & CSS",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-12 h-12 text-red-500"
            viewBox="0 0 24 24"
          >
            <path d="M3 3h18l-1.5 13.5-7.5 2.5-7.5-2.5L3 3z" />
            <path d="M10 8h4v2h-2v2h2v2h-4z" />
          </svg>
        ),
        proficiency: 100,
        color: "bg-red-500",
      },
      {
        name: "JavaScript",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-12 h-12 text-yellow-500"
            viewBox="0 0 24 24"
          >
            <path d="M10 2h4v20h-4z" />
            <path d="M4 8h16M4 16h16" />
          </svg>
        ),
        proficiency: 80,
        color: "bg-yellow-500",
      },
      {
        name: "TypeScript",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-12 h-12 text-blue-500"
            viewBox="0 0 24 24"
          >
            <path d="M10 2h4v20h-4z" />
            <path d="M8 8h8M8 16h8" />
          </svg>
        ),
        proficiency: 80,
        color: "bg-blue-500",
      },
      {
        name: "Next.js",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-12 h-12 text-gray-800"
            viewBox="0 0 24 24"
          >
            <path d="M3 12h18M12 3v18" />
            <path d="M3 3l18 18" />
          </svg>
        ),
        proficiency: 60,
        color: "bg-gray-800",
      },
    ];
  
    return (
      <section id="Skills" className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-4xl text-3xl font-bold title-font text-gray-900">
              {`My Skills`}
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            {`Explore the technologies that define my expertise, showcased with precise proficiency levels and a passion for crafting seamless digital experiences.`}
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {skills.map((skill, index) => (
              <div key={index} className="p-4 lg:w-1/2 md:w-full">
                <div className="flex items-center p-6 border-2 border-gray-200 rounded-lg">
                  <div
                    className={`w-16 h-16 inline-flex items-center justify-center rounded-full ${skill.color} bg-opacity-10 text-opacity-100`}
                  >
                    {skill.icon}
                  </div>
                  <div className="flex-grow ml-4">
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                      {skill.name}
                    </h2>
                    <p className="leading-relaxed text-base mb-2">
                      Proficiency: {skill.proficiency}%
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className={`${skill.color} h-2.5 rounded-full`}
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  