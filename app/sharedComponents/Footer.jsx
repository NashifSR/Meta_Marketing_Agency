import React from 'react'

const Footer = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-6">
            <div>
                <h4 className="text-2xl font-bold">Frame House Creative</h4>
                <p className="text-white/50 mt-2 max-w-sm">
                    Modern creative solutions for businesses and individuals.
                </p>
            </div>

            <div className="text-white/60 space-y-2">
                <p>Email: hello@framehousecreative.com</p>
                <p>Facebook: /framehousecreative</p>
                <p>Available Worldwide</p>
            </div>
        </div>
    )
}

export default Footer
