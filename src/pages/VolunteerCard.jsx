import React from 'react';
import { MapPin, Users, Tag, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const VolunteerCard = ({ post }) => {

    const cardData = post;
    const { _id, thumbnailUrl, title, description, category, location, volunteersNeeded, organizerName } = cardData;

    const navigate = useNavigate();
    const handleImageError = (e) => {
        e.target.src = "https://i.ibb.co.com/7tQmRxYj/error-alert-failure-icon-problem-concept.jpg";
    };

    const getCategoryColor = (category) => {
        const colors = {
            environment: 'bg-green-100 text-green-700',
            education: 'bg-blue-100 text-blue-700',
            animal: 'bg-orange-100 text-orange-700',
            community: 'bg-purple-100 text-purple-700',
            health: 'bg-red-100 text-red-700',
            default: 'bg-indigo-100 text-indigo-700'
        };
        return colors[category?.toLowerCase()] || colors.default;
    };

    return (
        <div className="max-w-sm mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-100">
                <div className="relative">
                    <img
                        src={thumbnailUrl}
                        alt={title || "Volunteer opportunity"}
                        className="w-full h-56 object-cover"
                        onError={handleImageError}
                    />
                    <div className="absolute top-3 left-3">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(category)}`}>
                            <Tag size={12} className="mr-1" />
                            {category}
                        </span>
                    </div>
                    <div className="absolute top-3 right-3">
                        <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                            <Users size={12} className="mr-1" />
                            {volunteersNeeded} needed
                        </span>
                    </div>
                </div>

                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
                        {title}
                    </h3>

                    <div className="flex items-center text-gray-600 mb-3">
                        <MapPin size={14} className="mr-2 text-gray-400" />
                        <span className="text-sm truncate">{location}</span>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {description}
                    </p>

                    <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center text-gray-500">
                            <User size={14} className="mr-2" />
                            <span className="text-xs">by {organizerName}</span>
                        </div>
                    </div>

                    <div className="flex">
                        <button
                            onClick={() => navigate(`/volunteer-posts/${_id}`)}
                            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            Join This Mission
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerCard;
