import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-800 text-white py-4">
                <div className="max-w-11/12 mx-auto px-4">
                    <p className="text-center">
                        &copy; {new Date().getFullYear()} ShareStep. All rights reserved.
                    </p>
                </div>
            </footer>

        </div>
    );
};

export default Footer;
