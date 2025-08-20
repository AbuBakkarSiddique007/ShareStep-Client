import { Link } from 'react-router-dom'

const Slide = ({ image, text }) => {
    return (
        <div
            className="w-full bg-center bg-cover h-[33rem] rounded-lg overflow-hidden shadow-lg"
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <div className="flex items-center justify-center w-full h-full bg-gradient-to-b from-black/40 via-black/50 to-black/60">
                <div className="text-center px-4">

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                        {text}
                    </h1>

                    <p className="mt-4 text-gray-200 sm:text-lg md:text-xl drop-shadow-sm">
                        Join hands to create change — connect with communities, contribute your time, and make a difference together.
                    </p>

                    <Link
                        to="/volunteer-opportunities"
                        className="inline-block px-6 py-3 mt-6 text-sm sm:text-base font-semibold text-white capitalize bg-green-600 rounded-md shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-300 transform"
                    >
                        Become a Volunteer
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Slide
