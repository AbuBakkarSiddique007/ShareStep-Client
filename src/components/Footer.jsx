import { Link } from "react-router-dom"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-blue-800 to-blue-900 text-gray-200 py-12 mt-12 rounded-t-2xl shadow-inner">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

                <div>
                    <h2 className="text-xl font-bold text-white mb-4">About Us</h2>
                    <p className="text-sm leading-relaxed text-gray-300">
                        We are a volunteer-driven platform connecting people who care with
                        organizations that need support. Join us and make a difference
                        today!
                    </p>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-white mb-4">Quick Links</h2>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link to="/" className="hover:text-white transition">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/volunteer-opportunities" className="hover:text-white transition">
                                Opportunities
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-white transition">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-white transition">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-bold text-white mb-4">Contact</h2>
                    <ul className="text-sm space-y-2">
                        <li>Email: support@volunteer.org</li>
                        <li>Phone: +880 123-456-789</li>
                        <li>Address: Dhaka, Bangladesh</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-bold text-white mb-4">Follow Us</h2>
                    <div className="flex space-x-4 text-2xl">
                        <a href="#" className="hover:text-blue-400 transition">
                            <FaFacebook />
                        </a>
                        <a href="#" className="hover:text-blue-400 transition">
                            <FaTwitter />
                        </a>
                        <a href="#" className="hover:text-pink-400 transition">
                            <FaInstagram />
                        </a>
                        <a href="#" className="hover:text-blue-400 transition">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} Volunteer Platform. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer
