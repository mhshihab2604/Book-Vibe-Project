import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <section
            className="flex items-center h-full sm:p-16 dark:bg-gray-50 dark:text-gray-800">
            <div
                className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
                <img className="w-60" src="https://i.ibb.co/9VMR778/errorrr.png" alt="" />
                <p className="text-3xl">Looks like our services are currently offline</p>

                <Link className="px-8 py-3 font-semibold rounded dark:bg-[#23BE0A] dark:text-gray-50" t0="/">Back to homepage</Link>
            </div>
        </section>
    );
};

export default ErrorPage;