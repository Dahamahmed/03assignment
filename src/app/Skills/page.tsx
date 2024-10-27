export default function Skills(){
    return(
        <section id="skills" className="py-10 bg-fuchsia-400 rounded-lg shadow-lg">
            <div className="container mx-auto text-center">
                <h1 className="text-3xl font-bold mb-10 text-gray-900">My Skills</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-black p-10 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4 text-fuchsia-600">
                        HTML & CSS
                    </h2>
                    <p className="text-fuchsia-300 text-xl">
                        Building and structured web pages.
                    </p>
                  </div>
                  <div className="bg-black p-10 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-6 text-fuchsia-600">
                        JavaScript
                    </h2>
                    <p className="text-fuchsia-300 text-xl">
                        Creating daynamic and web applications.
                    </p>
                  </div>
                  <div className="bg-black p-10 rounded-lg shadow-sm">
                    <h3 className="text-2xl font-bold mb-6 text-fuchsia-600">
                        TypeScript
                    </h3>
                    <p className="text-fuchsia-300 text-xl">
                        Enhance JavaScripy with safty and better.
                    </p>
                    <div className="bg-blue p-10 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-5 text-fuchsia-600">
                            Next.Js
                        </h3>
                        <p className="text-red-300 text-xl">
                            Developing server web and apps with ease
                        </p>
                    </div>
                    <div className="bg-green-400 p-10 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold mb-6 text-red-600">
                            Tailwind CSS
                        </h3>
                        <p className="text-blac-800 text-xl ">
                            Modern Buildilng UIs quickly with styling.
                        </p>
                    </div>
                  </div>
                </div>
            </div>
        </section>
    )
}