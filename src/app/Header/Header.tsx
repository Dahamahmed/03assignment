export default function Header(){
    return(
        <header className="bg-black-900 text-white py-5">
            <nav className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">This is My Landing page</div>
                <ul className="flex space-x-6 text-xl">
                    <li>
                        <a href="#about" className="hover:text-green-500">
                            About Me
                        </a>
                        <li>
                    </li>
                    <a href="#skills" className="hover:text-green-500">
                        Skills
                        </a>
                        </li>   
                </ul>
            </nav>
        </header>
    )
}