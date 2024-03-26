const Contact = () => {
    return (
        <div>
            <div
                className="grid border-x-2 border-[#23BE0A] max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800 mt-20">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Lets talk!</h2>
                        <div className="dark:text-gray-600">Drop us an email at contact@example.com and our team will get back to you as soon as possible. Whether it is a query about our products, services, or partnerships, we are always ready to assist</div>
                    </div>
                    <img src="https://i.ibb.co/VQgnpVN/bookss.webp" alt="" className="p-6 h-52 md:h-64"/>
                </div>
                <form className="space-y-6">
                    <div>
                        <label className="text-sm">Full name</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="your name"
                            className="border-2 w-full p-3 rounded-lg dark:bg-gray-100"/>
                    </div>
                    <div>
                        <label className="text-sm">Email</label>
                        <input placeholder="your email" id="email" type="email" className="border-2  w-full p-3 rounded-lg dark:bg-gray-100"/>
                    </div>
                    <div>
                        <label className="text-sm">Message</label>
                        <textarea placeholder="message" id="message" rows="3" className="border-2 w-full p-3 rounded-lg dark:bg-gray-100"></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-[#23BE0A] dark:text-gray-50">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;