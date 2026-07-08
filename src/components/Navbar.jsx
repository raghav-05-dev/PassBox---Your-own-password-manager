import React from 'react'

const Navbar = () => {
    return (
        <nav className="bg-slate-800 text-white">
            <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
                <div className="logo font-bold text-white text-2xl">
                    <span className="text-green-500"> &lt;</span>
                    Pass
                    <span className="text-green-500">Box/&gt;</span>
                </div>
                {/* <ul>
                    <li className="flex gap-4">
                        <a className="hover:text-green-600" href="/">Home</a>
                        <a className="hover:text-green-600" href="/about">About</a>
                        <a className="hover:text-green-600" href="/contact">Contact</a>
                    </li>
                </ul> */}
                <a
                    href="https://github.com/raghav-05-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="text-white bg-slate-800 my-5 px-1 rounded-full flex gap-1 items-center justify-center">
                        <img className='invert p-1 w-10' src="/icons/github.svg" alt="github" />
                        <span className="font-bold">Github</span>
                    </button>
                </a>
            </div>
        </nav>
    )
}

export default Navbar
