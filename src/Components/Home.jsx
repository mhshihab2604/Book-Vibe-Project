import Books from "./Books";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div >
            <div className="hero min-h-screen bg-[#1313130D] rounded mt-12">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                    <img
                        src="https://i.ibb.co/CwVFzpx/64a59e-d83478710e1c491c88b178c31986d4d9-mv2.webp"
                        className="lg:max-w-sm w-[300px] lg:w-[500px]"/>
                    <div className="space-y-10">
                        <h1 className="text-3xl lg:text-6xl font-bold text-[#131313]">Books to freshen <br /> up your bookshelf</h1>
                        <Link className="btn w-32 bg-[#23BE0A] text-white" to="/listedBooks">View The List</Link>
                    </div>
                </div>
            </div>
            <Books></Books>
        </div>
    );
};

export default Home;