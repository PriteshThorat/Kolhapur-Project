
import { useState } from 'react';

export default function BookingModal({ isOpen, onClose, tourPackage }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: 1,
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the booking data to your backend
    console.log('Booking submitted:', { ...formData, packageId: tourPackage?.id });

    // Show success message and close modal
    alert(`Thank you ${formData.name}! Your booking request for "${tourPackage?.name}" has been submitted. We'll contact you soon!`);
    onClose();

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      guests: 1,
      message: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[200] p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-travel-blue-dark dark:text-travel-blue-light">
              Book Your Trip
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
            >
              ×
            </button>
          </div>
          {tourPackage && (
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {tourPackage.name} - {tourPackage.price}
            </p>
          )}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label htmlFor="booking-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="booking-name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              autoComplete="name"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-travel-blue-light dark:bg-gray-800 dark:text-white"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="booking-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="booking-email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              autoComplete="email"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-travel-blue-light dark:bg-gray-800 dark:text-white"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="booking-phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              id="booking-phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              autoComplete="tel"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-travel-blue-light dark:bg-gray-800 dark:text-white"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label htmlFor="booking-date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Preferred Date *
            </label>
            <input
              type="date"
              id="booking-date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-travel-blue-light dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="booking-guests" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Number of Guests *
            </label>
            <select
              id="booking-guests"
              name="guests"
              value={formData.guests}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-travel-blue-light dark:bg-gray-800 dark:text-white"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="booking-message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Special Requirements
            </label>
            <textarea
              id="booking-message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-travel-blue-light dark:bg-gray-800 dark:text-white"
              placeholder="Any special requirements or questions?"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-tr from-travel-blue-light via-travel-purple-light to-travel-blue-dark dark:from-travel-blue-dark dark:via-travel-purple-dark dark:to-travel-blue-light text-white font-semibold py-3 rounded-xl hover:opacity-90 transition-all duration-200 shadow-md"
          >
            Submit Booking Request
          </button>
        </form>

        {/* Footer */}
        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-b-2xl">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            We'll contact you within 24 hours to confirm your booking
          </p>
        </div>
      </div>
    </div>
  );
}