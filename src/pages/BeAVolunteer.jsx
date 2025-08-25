import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import axios from 'axios';
import toast from 'react-hot-toast';

const BeAVolunteer = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const post = location.state?.post;

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        const form = e.target;
        const volunteerName = form.volunteerName.value;
        const volunteerEmail = form.volunteerEmail.value;
        const suggestion = form.suggestion.value;

        if (!user || !volunteerEmail) {
            setLoading(false);
            return toast.error("You must be logged in to volunteer.");
        }
        if (user.email === post.organizerEmail) {
            setLoading(false);
            return toast.error("You can't volunteer for your own post!");
        }
        if (post.volunteersNeeded <= 0) {
            setLoading(false);
            return toast.error("No more volunteers needed for this post.");
        }
        if (new Date(post.deadline) < new Date()) {
            setLoading(false);
            return toast.error("Deadline has passed. Volunteering is closed.");
        }

        const requestData = {
            postId: post._id,
            thumbnailUrl: post.thumbnailUrl,
            title: post.title,
            description: post.description,
            category: post.category,
            location: post.location,
            volunteersNeeded: post.volunteersNeeded,
            deadline: post.deadline,
            organizerName: post.organizerName,
            organizerEmail: post.organizerEmail,
            volunteerName,
            volunteerEmail,
            suggestion,
            status: "requested",
        };

        try {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/volunteer-requests`, requestData);
            const { status, message } = res.data || {};

            if (status === 'success') {
                setSuccess(message);
                toast.success(message);
                form.reset();
                setTimeout(() => navigate(-1), 1500);
            }
            else if (status === 'duplicate' || status === 'full' || status === 'error') {
                setError(message);
                toast.error(message);
            }
            else {
                setError('Unexpected response from server.');
                toast.error('Unexpected response from server.');
            }
        } catch (error) {
            console.error("Error sending request:", error);
            setError("Failed to send request.");
            toast.error("Failed to send request.");
        } finally {
            setLoading(false);
        }
    };

    if (!post) {
        return (
            <div className="text-center py-10 text-red-500">No post data found.</div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-2xl mt-10 flex flex-col gap-6">
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">Be a Volunteer</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <fieldset className="border border-gray-200 rounded-lg p-4 mb-4">
                    <legend className="text-lg font-semibold text-gray-700 px-2">Post Information</legend>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="thumbnailUrl">Thumbnail URL</label>
                            <input
                                id="thumbnailUrl"
                                name="thumbnailUrl"
                                className="input input-bordered w-full"
                                value={post.thumbnailUrl}
                                readOnly />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="title">Title</label>
                            <input
                                id="title"
                                name="title"
                                className="input input-bordered w-full"
                                value={post.title}
                                readOnly />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="description">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                className="input input-bordered w-full"
                                value={post.description}
                                readOnly />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="category">Category</label>
                            <input
                                id="category"
                                name="category"
                                className="input input-bordered w-full"
                                value={post.category}
                                readOnly />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="location">Location</label>
                            <input
                                id="location"
                                name="location"
                                className="input input-bordered w-full"
                                value={post.location}
                                readOnly />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="volunteersNeeded">Volunteers Needed</label>
                            <input
                                id="volunteersNeeded"
                                name="volunteersNeeded"
                                className="input input-bordered w-full"
                                value={post.volunteersNeeded}
                                readOnly />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="deadline">Deadline</label>
                            <input
                                id="deadline"
                                name="deadline"
                                className="input input-bordered w-full"
                                value={post.deadline}
                                readOnly />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="organizer">Organizer</label>
                            <input
                                id="organizer"
                                name="organizer"
                                className="input input-bordered w-full"
                                value={`${post.organizerName} (${post.organizerEmail})`}
                                readOnly />
                        </div>
                    </div>
                </fieldset>

                <fieldset className="border border-gray-200 rounded-lg p-4 mb-4">
                    <legend className="text-lg font-semibold text-gray-700 px-2">Your Information</legend>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="volunteerName">Your Name</label>
                            <input
                                id="volunteerName"
                                name="volunteerName"
                                className="input input-bordered w-full"
                                value={user?.displayName || ""}
                                readOnly />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="volunteerEmail">Your Email</label>
                            <input
                                id="volunteerEmail"
                                name="volunteerEmail"
                                className="input input-bordered w-full"
                                value={user?.email || ""}
                                readOnly />
                        </div>
                    </div>
                </fieldset>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="suggestion">Suggestion (optional)</label>
                    <textarea
                        id="suggestion"
                        name="suggestion"
                        className="input input-bordered w-full"
                        placeholder="Suggestion (optional)"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="status">Status</label>
                    <input
                        id="status"
                        name="status"
                        className="input input-bordered w-full"
                        value="requested"
                        readOnly />
                </div>

                {error && <div className="text-red-500 mt-2">{error}</div>}
                {success && <div className="text-green-600 mt-2">{success}</div>}

                <button
                    type="submit"
                    className="w-full mt-4 bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
                    disabled={loading}
                >
                    {loading ? "Requesting..." : "Request"}
                </button>
            </form>
        </div>
    );
};

export default BeAVolunteer;
