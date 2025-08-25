import { Tag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const VolunteerCard = ({ post }) => {

    const cardData = post;
    const { _id, thumbnailUrl, title, category, deadline } = cardData;

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
                <img
                    src={thumbnailUrl}
                    alt={title || "Volunteer opportunity"}
                    className="w-full h-56 object-cover"
                    onError={handleImageError}
                />
                <div className="p-6 flex flex-col gap-3">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 line-clamp-2 leading-tight">
                        {title}
                    </h3>
                    <div className="flex items-center gap-2 mb-1">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(category)}`}>
                            <Tag size={12} className="mr-1" />
                            {category}
                        </span>
                        <span className="inline-block bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                            Deadline: {deadline}
                        </span>
                    </div>
                    <button
                        onClick={() => navigate(`/volunteer-posts/${_id}`)}
                        className="w-full mt-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VolunteerCard;
