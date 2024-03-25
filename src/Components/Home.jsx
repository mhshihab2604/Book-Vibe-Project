import Books from "./Books";
import myImage from '../assets/book.png'
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div >
            <div className="hero min-h-screen bg-[#1313130D] rounded mt-12">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={myImage}
                        className="max-w-sm"/>
                    <div className="space-y-10">
                        <h1 className="text-2xl lg:text-6xl font-bold text-[#131313]">Books to freshen <br /> up your bookshelf</h1>
                        <Link className="btn w-32 bg-[#23BE0A] text-white" to="/listedBooks">View The List</Link>
                    </div>
                </div>
            </div>
            <Books></Books>
        </div>
    );
};

export default Home;