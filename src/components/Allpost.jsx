import React, { useEffect, useState } from 'react';
import VolunteerCard from '../pages/volunteerCard';
import axios from 'axios';

const Allpost = () => {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/volunteer-posts`);
                setPosts(data);
            } catch (error) {
                console.error("Error fetching volunteer posts:", error);
            }
        };

        fetchPosts();
    }, []);

    const filteredPosts = posts.filter(post => {
        const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase())
            || post.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="px-6 lg:px-12 py-8">
            <div className="bg-white shadow-md rounded-2xl p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Find Volunteer Opportunities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block font-semibold mb-1">Search</label>
                        <input
                            type="text"
                            placeholder="Search by title or description..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block font-semibold mb-1">Category</label>
                        <select
                            name="category"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">All Categories</option>
                            <option value="healthcare">Healthcare</option>
                            <option value="education">Education</option>
                            <option value="social">Social Service</option>
                            <option value="animal">Animal Welfare</option>
                        </select>
                    </div>
                </div>
            </div>

            {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredPosts.map(post => (
                        <VolunteerCard key={post._id} post={post} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-12">
                    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">No posts found</h3>
                        <p className="text-gray-500">
                            Try adjusting your search terms or category filter to find more opportunities.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Allpost;
