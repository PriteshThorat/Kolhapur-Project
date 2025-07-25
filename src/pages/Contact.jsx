import { Header } from "../components/Header.jsx";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        package: "General Inquiry"
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted:", formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-travel-blue-light via-travel-purple-light to-white dark:from-travel-blue-dark dark:via-travel-purple-dark dark:to-gray-900 transition-colors duration-500">
            <Header />

            <main className="pt-16 pb-16">
                <div className="max-w-screen-xl mx-auto px-4">
                    {/* Header Section */}
                    <div className="text-center mb-16 animate-fade-in">
                        <h1 className="font-passion text-[56px] md:text-[72px] font-normal text-travel-blue-dark dark:text-travel-purple-light leading-tight drop-shadow-lg dark:glow-heading mb-4">
                            Get In Touch
                        </h1>
                        <p className="text-xl md:text-2xl text-travel-purple-dark dark:text-travel-purple-light">
                            Ready to explore Kolhapur? Let's plan your perfect trip together!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-fade-in">
                        {/* Contact Form */}
                        <div className="bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl p-8 border border-travel-blue-light dark:border-travel-purple-dark">
                            <h2 className="text-2xl font-bold text-travel-blue-dark dark:text-travel-blue-light mb-6 dark:glow-heading">
                                Send us a Message
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="contact-name" className="block text-travel-purple-dark dark:text-travel-purple-light font-medium mb-2">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="contact-name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            autoComplete="name"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-travel-blue-dark dark:text-travel-blue-light focus:outline-none focus:ring-2 focus:ring-travel-purple-light dark:focus:ring-travel-purple-dark"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="contact-email" className="block text-travel-purple-dark dark:text-travel-purple-light font-medium mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="contact-email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            autoComplete="email"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-travel-blue-dark dark:text-travel-blue-light focus:outline-none focus:ring-2 focus:ring-travel-purple-light dark:focus:ring-travel-purple-dark"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="contact-phone" className="block text-travel-purple-dark dark:text-travel-purple-light font-medium mb-2">
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            id="contact-phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            autoComplete="tel"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-travel-blue-dark dark:text-travel-blue-light focus:outline-none focus:ring-2 focus:ring-travel-purple-light dark:focus:ring-travel-purple-dark"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="contact-package" className="block text-travel-purple-dark dark:text-travel-purple-light font-medium mb-2">
                                            Package Interest
                                        </label>
                                        <select
                                            id="contact-package"
                                            name="package"
                                            value={formData.package}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-travel-blue-dark dark:text-travel-blue-light focus:outline-none focus:ring-2 focus:ring-travel-purple-light dark:focus:ring-travel-purple-dark"
                                        >
                                            <option value="General Inquiry">General Inquiry</option>
                                            <option value="New Palace Museum">New Palace Museum</option>
                                            <option value="Rankala Lake">Rankala Lake</option>
                                            <option value="Jyotiba Temple">Jyotiba Temple</option>
                                            <option value="Panhala Fort">Panhala Fort</option>
                                            <option value="Mahalakshmi Temple">Mahalakshmi Temple</option>
                                            <option value="Custom Package">Custom Package</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="contact-subject" className="block text-travel-purple-dark dark:text-travel-purple-light font-medium mb-2">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        id="contact-subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-travel-blue-dark dark:text-travel-blue-light focus:outline-none focus:ring-2 focus:ring-travel-purple-light dark:focus:ring-travel-purple-dark"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="contact-message" className="block text-travel-purple-dark dark:text-travel-purple-light font-medium mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-travel-blue-dark dark:text-travel-blue-light focus:outline-none focus:ring-2 focus:ring-travel-purple-light dark:focus:ring-travel-purple-dark resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-tr from-travel-blue-light via-travel-purple-light to-travel-blue-dark dark:from-travel-blue-dark dark:via-travel-purple-dark dark:to-travel-blue-light text-white font-inter font-semibold py-4 rounded-xl hover:opacity-90 transition-all duration-200 shadow-md"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            {/* Quick Contact */}
                            <div className="bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl p-8 border border-travel-blue-light dark:border-travel-purple-dark">
                                <h2 className="text-2xl font-bold text-travel-blue-dark dark:text-travel-blue-light mb-6 dark:glow-heading">
                                    Quick Contact
                                </h2>

                                <div className="space-y-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-travel-purple-light dark:bg-travel-purple-dark rounded-full flex items-center justify-center">
                                            <span className="text-2xl">📱</span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-travel-blue-dark dark:text-travel-blue-light">WhatsApp</h3>
                                            <p className="text-gray-600 dark:text-gray-300">+91 98765 43210</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-travel-purple-light dark:bg-travel-purple-dark rounded-full flex items-center justify-center">
                                            <span className="text-2xl">📞</span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-travel-blue-dark dark:text-travel-blue-light">Phone</h3>
                                            <p className="text-gray-600 dark:text-gray-300">+91 98765 43210</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-travel-purple-light dark:bg-travel-purple-dark rounded-full flex items-center justify-center">
                                            <span className="text-2xl">📧</span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-travel-blue-dark dark:text-travel-blue-light">Email</h3>
                                            <p className="text-gray-600 dark:text-gray-300">info@kolhapur-travel.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl p-8 border border-travel-blue-light dark:border-travel-purple-dark">
                                <h2 className="text-2xl font-bold text-travel-blue-dark dark:text-travel-blue-light mb-6 dark:glow-heading">
                                    Visit Us
                                </h2>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-travel-purple-light dark:bg-travel-purple-dark rounded-full flex items-center justify-center">
                                        <span className="text-2xl">📍</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-travel-blue-dark dark:text-travel-blue-light">Office Address</h3>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            Travel Kolhapur<br />
                                            123, Main Street<br />
                                            Kolhapur, Maharashtra 416001<br />
                                            India
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Business Hours */}
                            <div className="bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl p-8 border border-travel-blue-light dark:border-travel-purple-dark">
                                <h2 className="text-2xl font-bold text-travel-blue-dark dark:text-travel-blue-light mb-6 dark:glow-heading">
                                    Business Hours
                                </h2>

                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-300">Monday - Friday</span>
                                        <span className="font-semibold text-travel-blue-dark dark:text-travel-blue-light">9:00 AM - 7:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-300">Saturday</span>
                                        <span className="font-semibold text-travel-blue-dark dark:text-travel-blue-light">9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-300">Sunday</span>
                                        <span className="font-semibold text-travel-blue-dark dark:text-travel-blue-light">10:00 AM - 4:00 PM</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
} 