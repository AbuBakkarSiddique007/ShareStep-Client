import { Link } from "react-router-dom";

const VolunteerNeeds = () => {
    return (
        <div>
            <div className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Volunteer Needs Now
                        </h2>
                        <p className="text-gray-600 mt-2">
                            Join the causes that matter — check out the latest volunteer opportunities.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {[1, 2, 3, 4, 5, 6].map((card) => (
                            <div
                                key={card}
                                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
                            >
                                <img
                                    src="https://i.ibb.co.com/RTjDbGDH/sylhet-recovery.jpg"
                                    alt="Volunteer Thumbnail"
                                    className="w-full h-48 object-cover"
                                />

                                <div className="p-5">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        Volunteer Post Title {card}
                                    </h3>
                                    <p className="text-sm text-indigo-600 mt-1">Category: Education</p>
                                    <p className="text-sm text-gray-500 mt-1">
                                        Deadline: 25 Aug 2025
                                    </p>

                                    <div className="mt-4">
                                        <Link
                                            to={`/volunteer/${card}`}
                                            className="inline-block px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-10">
                        <Link
                            to="/all-posts"
                            className="px-6 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-xl shadow hover:bg-indigo-700 transition"
                        >
                            See All
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default VolunteerNeeds;
