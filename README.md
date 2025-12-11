# SkyWatch - Modern Weather Application

A beautiful, production-ready weather web application built with React, featuring real-time weather data, hourly and daily forecasts, with a stunning glassmorphism UI design.

![SkyWatch Preview](preview.png)

## ✨ Features

### Core Functionality
- **Real-time Weather Data** - Current weather conditions for any location worldwide
- **Hourly Forecast** - 24-hour detailed forecast with temperature and precipitation
- **7-Day Forecast** - Week-long weather predictions with high/low temperatures
- **Location Search** - Smart search with autocomplete suggestions
- **Geolocation Support** - Automatic weather detection based on your location
- **Favorite Locations** - Save and quickly access your favorite cities
- **Unit Toggle** - Switch between Celsius/Fahrenheit

### UI/UX Features
- **Glassmorphism Design** - Modern, premium aesthetic with frosted glass effects
- **Dark/Light Mode** - Full theme support with smooth transitions
- **Dynamic Backgrounds** - Background changes based on weather conditions and time of day
- **Animated Weather Effects** - Rain and snow particle animations
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Smooth Animations** - Framer Motion powered transitions
- **Loading States** - Skeleton loaders and shimmer effects
- **Error Handling** - User-friendly error messages

## 🛠 Tech Stack

- **Framework:** React 19
- **Styling:** Tailwind CSS with custom glassmorphism utilities
- **Animations:** Framer Motion
- **Date Handling:** date-fns
- **API:** WeatherAPI.com
- **State Management:** React Hooks (useState, useEffect, custom hooks)
- **Font:** Google Fonts (Inter)

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                      # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Input.jsx
│   │   ├── Switch.jsx
│   │   ├── Skeleton.jsx
│   │   ├── LoadingSpinner.jsx
│   │   └── ErrorAlert.jsx
│   └── layout/                  # Layout components
│       └── Navbar.jsx
├── features/
│   └── weather/
│       └── components/          # Weather-specific components
│           ├── CurrentWeatherCard.jsx
│           ├── HourlyForecastList.jsx
│           ├── DailyForecastList.jsx
│           ├── SearchBar.jsx
│           ├── WeatherBackground.jsx
│           └── FavoritesSidebar.jsx
├── hooks/                       # Custom React hooks
│   ├── useDebounce.js
│   ├── useTheme.js
│   ├── useFavorites.js
│   └── useGeolocation.js
├── lib/                         # API integration
│   └── weatherApi.js
├── utils/                       # Utility functions
│   └── formatters.js
├── config/                      # Configuration
│   └── constants.js
├── App.js                       # Main application
├── index.js                     # Entry point
└── index.css                    # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- WeatherAPI.com API key (free tier available)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd weather-app-task
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```
   
   Add your WeatherAPI.com API key to the `.env` file:
   ```
   REACT_APP_WEATHER_API_KEY=your_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm start
   ```
   
   The app will open at [http://localhost:3000](http://localhost:3000)

### Getting an API Key

1. Visit [WeatherAPI.com](https://www.weatherapi.com/)
2. Sign up for a free account
3. Navigate to your dashboard
4. Copy your API key
5. Paste it in the `.env` file

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## 🎨 Design Features

### Glassmorphism
The app uses a custom glassmorphism design system with:
- Frosted glass effect with backdrop blur
- Semi-transparent backgrounds
- Subtle borders and shadows
- Smooth hover transitions

### Dynamic Backgrounds
Backgrounds automatically adapt based on:
- **Weather Condition:** Clear, Cloudy, Rainy, Snowy, Stormy, Foggy
- **Time of Day:** Morning, Afternoon, Evening, Night

### Animations
- Smooth page transitions
- Staggered list animations
- Weather icon animations
- Particle effects for rain/snow
- Loading shimmer effects

## 🔧 Configuration

### Default Settings
Edit `src/config/constants.js` to change:
- Default city
- Default temperature unit
- Number of forecast days
- Debounce delay
- And more...

### Theme Customization
Modify `tailwind.config.js` to customize:
- Color palette
- Animations
- Spacing
- Typography

## 📱 Responsive Design

The app is fully responsive with breakpoints for:
- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Weather data provided by [WeatherAPI.com](https://www.weatherapi.com/)
- Icons from [Heroicons](https://heroicons.com/)
- Font from [Google Fonts](https://fonts.google.com/)

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

**Built with ❤️ using React and Tailwind CSS**
