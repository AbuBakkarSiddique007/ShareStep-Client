import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar bg-white shadow-md px-6 lg:px-12 sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-white rounded-box z-50 mt-3 w-52 p-2 shadow-lg"
                    >
                        <li>
                            <Link to="/" className="text-gray-700 font-medium">Home</Link>
                        </li>
                        <li>
                            <Link to="/all-posts" className="text-gray-700 font-medium">All Posts</Link>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center gap-3">
                    <img
                        className="w-12 h-12 object-cover rounded-lg border border-gray-300 shadow-sm"
                        src="/assets/logo.jpg"
                        alt="Logo"
                    />
                    <Link
                        to="/"
                        className="font-bold text-2xl text-gray-800 tracking-wide hover:text-green-600 transition"
                    >
                        ShareStep
                    </Link>
                </div>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-6 text-lg font-medium">
                    <li>
                        <Link to="/" className="hover:text-green-600 transition">Home</Link>
                    </li>
                    <li>
                        <Link to="/all-posts" className="hover:text-green-600 transition">All Posts</Link>
                    </li>
                </ul>
            </div>

            <div className="navbar-end flex items-center gap-4">
                <div className="dropdown dropdown-end">
                    <button
                        tabIndex={0}
                        className="btn btn-outline btn-sm border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition"
                    >
                        My Profile
                    </button>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-white rounded-box z-50 mt-3 w-52 p-2 shadow-lg"
                    >
                        <li>
                            <Link to="/add-post" className="text-gray-700 hover:text-green-600">
                                Add Volunteer Post
                            </Link>
                        </li>

                        <li tabIndex={0}>
                            <details>
                                <summary className="text-gray-700 hover:text-green-600">Manage My Posts</summary>
                                <ul className="p-2 bg-white rounded-lg shadow-md">
                                    <li>
                                        <Link to="/my-volunteer-posts" className="text-gray-700 hover:text-green-600">
                                            My Volunteer Need Post
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/my-request-posts" className="text-gray-700 hover:text-green-600">
                                            My Volunteer Request Post
                                        </Link>
                                    </li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>

                <div className="dropdown dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-12 h-12 rounded-full border border-gray-300 shadow-sm">
                            <img
                                alt="User Avatar"
                                src="https://i.ibb.co.com/RGqpdvJL/images.jpg"
                            />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-white rounded-box z-50 mt-3 w-52 p-2 shadow-lg"
                    >
                        <li>
                            <Link to="/settings" className="text-gray-700 hover:text-green-600">Settings</Link>
                        </li>
                        <li>
                            <Link to="/logout" className="text-gray-700 hover:text-green-600">Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
