const Footer = () => {
    return (
        <footer className="p-10 bg-[#1A1919] text-white mt-40">
            <div className="footer max-w-7xl mx-auto">
                <aside>
                    <img className="w-28" src="https://i.ibb.co/k2PN3MV/icon.png" alt="" />
                    <p className="text-2xl">Book Vibe</p>
                    <p>A book is a written or printed work of literature or information,<br /> typically bound together and serving various purposes such as <br /> entertainment,education, or reference.</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;