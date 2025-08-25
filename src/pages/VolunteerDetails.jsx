import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';
const VolunteerDetails = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {

        const fetchPost = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/volunteer-posts/${id}`);
                setPost(data);
            } catch (error) {
                setError('Failed to fetch post details.');
                console.error('Error fetching post details:', error);
            } finally {
                setLoading(false);
            }

        };

        fetchPost();
    }, [id]);

    if (loading) return <LoadingSpinner />;
    if (error) return <div className="text-center text-red-500 py-10">{error}</div>;
    if (!post) return <div className="text-center py-10">No post found.</div>;

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-2xl mt-10 flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-6 items-center">
                <img
                    src={post.thumbnailUrl}
                    alt={post.title || 'Volunteer Post'}
                    className="w-full md:w-72 h-64 object-cover rounded-xl border shadow-md"
                    onError={e => {
                        e.target.onerror = null;
                        e.target.src = "https://i.ibb.co/7tQmRxYj/error-alert-failure-icon-problem-concept.jpg";
                    }}
                />
                <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-2 text-blue-800 flex items-center gap-2">
                        {post.title}
                    </h2>
                    <div className="flex flex-wrap gap-2 mb-2">
                        <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                            {post.category}
                        </span>
                        <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                            {post.location}
                        </span>
                        <span className="inline-block bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold">
                            Needed: {post.volunteersNeeded}
                        </span>
                        <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                            Deadline: {post.deadline}
                        </span>
                    </div>
                    <div className="mb-2 text-gray-600 text-sm">
                        <span className="font-semibold">Organizer:</span> {post.organizerName} <span className="text-gray-400">|</span> <span className="font-mono">{post.organizerEmail}</span>
                    </div>
                    <button
                        type="button"
                        className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
                        onClick={() => navigate('/be-a-volunteer', { state: { post } })}
                    >
                        Be a Volunteer
                    </button>
                </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 shadow-inner">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Description</h3>
                <p className="text-gray-700 leading-relaxed">{post.description}</p>
            </div>

        </div>
    );
};

export default VolunteerDetails;
