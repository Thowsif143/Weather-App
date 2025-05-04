# Weather-Appx

This is a simple, responsive weather web application that allows users to search for the current weather in any location. It fetches real-time weather data using the WeatherAPI and displays temperature, location, local time, and weather conditions with an icon.

🧩 Features
Fetches real-time weather data from WeatherAPI.

Displays:

Temperature in Celsius

Location name

Local date and time

Weather condition and icon

Search functionality to view weather in any city.

Responsive and minimal UI design.


📁 Project Structure
bash
Copy
Edit

├── index.html       # Main HTML file (UI layout)

├── style.css        # Styling for the app

├── main.js          # JavaScript for fetching and displaying weather

🔧 How to Run
Clone or download the repository.

Open index.html in your browser.

Search for any location in the input field at the bottom of the page.

💡 Make sure you have internet access to fetch data from the WeatherAPI.

🔑 API Key

This project uses a sample API key (Your APIKEY). You are encouraged to get your own free API key from WeatherAPI.com for long-term use.

let url = `http://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${place}&aqi=no`;

🎨 UI Preview

![image](https://github.com/user-attachments/assets/957e4ddf-65c7-4828-9bdd-66fbf10f4846)


📄 License

This project is open source and free to use for educational purposes.
