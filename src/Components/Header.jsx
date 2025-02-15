import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"><path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"/></svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-9">
                            <Link className="hover:text-[#23BE0A] hover:border-2 hover:border-[#23BE0A] p-2 rounded-lg" to="/">Home</Link>
                            <Link className="hover:text-[#23BE0A] hover:border-2 hover:border-[#23BE0A] p-2 rounded-lg" to="/listedBooks">Listed Books</Link>
                            <Link className="hover:text-[#23BE0A] hover:border-2 hover:border-[#23BE0A] p-2 rounded-lg" to="/pagesToRead">Pages to Read</Link>
                            <Link className="hover:text-[#23BE0A] hover:border-2 hover:border-[#23BE0A] p-2 rounded-lg" to="/callToAction">Gallery</Link>
                            <Link className="hover:text-[#23BE0A] hover:border-2 hover:border-[#23BE0A] p-2 rounded-lg" to="/Contact">Contact Us</Link>
                        </ul>
                    </div>
                    <h1 className="font-bold text-[#131313] text-xl lg:text-3xl">Book Vibe</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-lg px-1 gap-9">
                        <Link className="hover:text-[#23BE0A] hover:border-2 hover:border-[#23BE0A] p-2 rounded-lg" to="/">Home</Link>
                        <Link className="hover:text-[#23BE0A] hover:border-2 hover:border-[#23BE0A] p-2 rounded-lg" to="/listedBooks">Listed Books</Link>
                        <Link className="hover:text-[#23BE0A] hover:border-2 hover:border-[#23BE0A] p-2 rounded-lg" to="/pagesToRead">Pages to Read</Link>
                        <Link className="hover:text-[#23BE0A] hover:border-2 hover:border-[#23BE0A] p-2 rounded-lg" to="/callToAction">Gallery</Link>
                        <Link className="hover:text-[#23BE0A] hover:border-2 hover:border-[#23BE0A] p-2 rounded-lg" to="/Contact">Contact Us</Link>
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <a className="btn bg-[#23BE0A] w-16 lg:w-28 text-sm lg:text-lg font-semibold text-white">Sign Up</a>
                    <a className="btn bg-[#59C6D2] w-16 lg:w-28 text-sm lg:text-lg font-semibold text-white">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Home;