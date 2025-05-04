# 🌤️ Weather-Appx

**Weather-Appx** is a simple, responsive weather web application that allows users to search for the current weather in any location. It fetches real-time data using the [WeatherAPI](https://www.weatherapi.com/) and displays temperature, location, local time, and weather conditions with an icon.

---

## 🧩 Features

✅ Fetches real-time weather data from **WeatherAPI**  
✅ Displays:
- 🌡️ Temperature (°C)
- 📍 Location name
- 🕒 Local date and time
- ☁️ Weather condition with an icon

✅ Search functionality for any city  
✅ Fully responsive and minimal UI design

---

## 📁 Project Structure

weather-appx/

├── index.html # Main HTML structure

├── style.css # App styling

└── main.js # JavaScript logic for API call and DOM update

##🔑 API Key
Replace YOUR_API_KEY in main.js with your own free key from WeatherAPI.com:

let url = `http://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${place}&aqi=no`;

🎨 UI Preview
![image](https://github.com/user-attachments/assets/b1ba81c7-fc41-4ac5-a2a7-7cb81d162d20)

📄 License
This project is open source and free to use for educational purposes.
