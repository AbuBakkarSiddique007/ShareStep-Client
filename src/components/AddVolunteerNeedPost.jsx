import axios from "axios";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from "../providers/AuthProvider";

const AddVolunteerPost = () => {

    const { user } = useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date())

    const handleAddPost = async (e) => {
        e.preventDefault();
        const form = e.target;
        const thumbnailUrl = form.thumbnailUrl.value;
        const title = form.title.value;
        const description = form.description.value;
        const category = form.category.value;
        const location = form.location.value;
        const volunteersNeeded = form.volunteersNeeded.value;
        const deadline = form.deadline.value;
        const organizerName = form.organizerName.value;
        const organizerEmail = form.organizerEmail.value;

        const formData = {
            thumbnailUrl,
            title,
            description,
            category,
            location,
            volunteersNeeded,
            deadline,
            organizerName,
            organizerEmail
        };
        console.log(formData);

        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/add-volunteer-post`, formData);
            console.log("Post added successfully:", data);
            
            form.reset();
            toast.success("Post added successfully!");
        } catch (error) {
            console.error("Error in the adding post:", error);
            toast.error("Error in the adding post");
        }

    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-10">
            <h2 className="text-2xl font-bold mb-6 text-center">
                Add Volunteer Need Post
            </h2>

            <form onSubmit={handleAddPost} className="space-y-4">
                <div>
                    <label className="block font-semibold mb-1">Thumbnail URL</label>
                    <input
                        type="url"
                        name="thumbnailUrl"
                        placeholder="Enter image URL"
                        className="w-full p-2 border rounded-lg"
                        required
                    />
                </div>

                <div>
                    <label className="block font-semibold mb-1">Post Title</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter post title"
                        className="w-full p-2 border rounded-lg"
                        required
                    />
                </div>

                <div>
                    <label className="block font-semibold mb-1">Description</label>
                    <textarea
                        name="description"
                        placeholder="Write description here..."
                        className="w-full p-2 border rounded-lg"
                        rows="3"
                        required
                    ></textarea>
                </div>

                <div>
                    <label className="block font-semibold mb-1">Category</label>
                    <select name="category" className="w-full p-2 border rounded-lg" required>
                        <option value="">Select Category</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="education">Education</option>
                        <option value="social">Social Service</option>
                        <option value="animal">Animal Welfare</option>
                    </select>
                </div>

                <div>
                    <label className="block font-semibold mb-1">Location</label>
                    <input
                        type="text"
                        name="location"
                        placeholder="Enter location"
                        className="w-full p-2 border rounded-lg"
                        required
                    />
                </div>

                <div>
                    <label className="block font-semibold mb-1">No. of Volunteers Needed</label>
                    <input
                        type="number"
                        name="volunteersNeeded"
                        placeholder="Enter number"
                        className="w-full p-2 border rounded-lg"
                        required
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label className='text-gray-700 font-medium'>Deadline</label>

                    <DatePicker
                        className='border border-gray-300 p-2 rounded-xl shadow-sm w-full focus:outline-none focus:ring focus:ring-purple-200 transition duration-300'
                        name="deadline"
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block font-semibold mb-1">Organizer Name</label>
                        <input
                            type="text"
                            name="organizerName"
                            className="w-full p-2 border rounded-lg bg-gray-100"

                            defaultValue={user?.displayName}
                            readOnly
                            required

                        />
                    </div>
                    <div>
                        <label className="block font-semibold mb-1">Organizer Email</label>
                        <input
                            type="email"
                            name="organizerEmail"
                            className="w-full p-2 border rounded-lg bg-gray-100"
                            defaultValue={user?.email}
                            readOnly
                            required
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    Add Post
                </button>
            </form>
        </div>
    );
};

export default AddVolunteerPost;
