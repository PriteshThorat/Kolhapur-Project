# 🏛️ Kolhapur Tourism Website

A modern, responsive web application showcasing the rich cultural heritage and tourist attractions of Kolhapur, Maharashtra, India. Built with React and Vite, featuring a beautiful dark/light theme toggle and an intuitive booking system.

![Kolhapur Tourism](https://img.shields.io/badge/Kolhapur-Tourism-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-6.2.2-646CFF?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.11-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🌟 Features

### 🎯 Core Features

- **🏛️ Destination Showcase**: Explore popular tourist destinations in Kolhapur
- **🎒 Trip Planning**: Browse curated trip packages with detailed information
- **📅 Online Booking**: Interactive booking modal with form validation
- **🔍 Smart Search**: Location-based search functionality
- **📱 Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **🌙 Dark/Light Theme**: Toggle between themes with smooth transitions
- **⚡ Fast Performance**: Built with Vite for optimal loading speeds

### 🏛️ Tourist Attractions

- **New Palace Museum** - Royal architecture and historical artifacts
- **Rankala Lake** - Boating and sunset views
- **Jyotiba Temple** - Sacred pilgrimage site
- **Panhala Fort** - Historic fort with panoramic mountain views
- **Mahalakshmi Temple** - Spiritual heritage center
- **Kolhapuri Chappal Workshop** - Traditional handicraft experience

### 🎒 Trip Categories

- **Heritage Tours** - Historical sites and cultural experiences
- **Nature Escapes** - Lakes, gardens, and scenic spots
- **Spiritual Journeys** - Temples and religious sites
- **Adventure Trips** - Trekking and outdoor activities
- **Cultural Experiences** - Local crafts and traditions

## 🚀 Live Demo

🌐 **[Visit Kolhapur Tourism Website](https://tripozy.vercel.app)**

## 🛠️ Technology Stack

### Frontend Framework

- **React 18.3.1** - Modern React with hooks and concurrent features
- **React Router DOM 6.26.2** - Client-side routing
- **React Query 5.56.2** - Server state management

### Styling & UI

- **Tailwind CSS 3.4.11** - Utility-first CSS framework
- **Tailwind Animate** - Animation utilities
- **React Loading Skeleton** - Loading placeholders
- **Lucide React** - Beautiful icon library

### UI Components

- **Radix UI** - Accessible, unstyled UI primitives
  - Labels, Slots, Toast notifications, Tooltips
- **Sonner** - Toast notifications
- **Class Variance Authority** - Component variants

### Build Tools

- **Vite 6.2.2** - Next-generation frontend tooling
- **SWC** - Super-fast TypeScript/JavaScript compiler
- **TypeScript 5.5.3** - Type safety and developer experience

### Development Tools

- **Prettier 3.5.3** - Code formatting
- **Vitest 3.1.4** - Unit testing framework
- **TSX 4.7.0** - TypeScript execution

## 🏗️ Project Structure

```
Kolhapur-Project/
├── public/
│   ├── Logo.png                 # Tourism logo
│   └── placeholder.svg          # Fallback images
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Navigation header
│   │   └── ui/                  # Reusable UI components
│   │       ├── BookingModal.jsx # Trip booking modal
│   │       ├── LocationDropdown.jsx # Location search
│   │       ├── Slideshow.jsx    # Image carousel
│   │       ├── button.jsx       # Button component
│   │       ├── card.jsx         # Card component
│   │       ├── input.jsx        # Input component
│   │       ├── label.jsx        # Label component
│   │       ├── sonner.jsx       # Toast notifications
│   │       ├── toast.jsx        # Toast component
│   │       ├── toaster.jsx      # Toast container
│   │       └── tooltip.jsx      # Tooltip component
│   ├── pages/
│   │   ├── Index.jsx            # Homepage
│   │   ├── Destinations.jsx     # Tourist destinations
│   │   ├── DestinationDetails.jsx # Destination details
│   │   ├── Trips.jsx            # Trip packages
│   │   ├── TripTypes.jsx        # Trip categories
│   │   ├── TripType.jsx         # Specific trip type
│   │   ├── Search.jsx           # Search results
│   │   ├── About.jsx            # About page
│   │   ├── Contact.jsx          # Contact form
│   │   ├── Explore.jsx          # Exploration page
│   │   └── NotFound.jsx         # 404 page
│   ├── Skeletons/
│   │   ├── DestinationCardSkeleton.jsx
│   │   ├── TripCardSkeleton.jsx
│   │   └── index.js
│   ├── hooks/
│   │   ├── use-mobile.js        # Mobile detection
│   │   └── use-toast.js         # Toast hook
│   ├── lib/
│   │   └── utils.js             # Utility functions
│   ├── App.jsx                  # Main app component
│   └── global.css               # Global styles
├── components.json              # shadcn/ui config
├── tailwind.config.js           # Tailwind configuration
├── vite.config.js               # Vite configuration
├── package.json                 # Dependencies
└── README.md                    # Project documentation
```