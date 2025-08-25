import axios from "axios";
import { Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import VolunteerCard from '../pages/VolunteerCard';

const VolunteerNeeds = () => {
    const [volunteerPosts, setVolunteerPosts] = useState([]);

    useEffect(() => {
        const fetchVolunteerPosts = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/volunteer-posts?limit=6&sort=deadline`);
                console.log('Fetched volunteer posts:', data);
                setVolunteerPosts(data);

            } catch (error) {
                console.error('Error fetching volunteer posts:', error);
            }
        };

        fetchVolunteerPosts();
    }, []);


    return (
        <div>
            <div className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <Clock className="w-8 h-8 text-indigo-600" />
                            <h2 className="text-3xl font-bold text-gray-800">
                                Volunteer Needs Now
                            </h2>
                        </div>
                        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                            Join the causes that matter — check out the latest volunteer opportunities with upcoming deadlines.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {volunteerPosts.map(post => (
                            <VolunteerCard key={post._id} post={post} showDeadline />
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
