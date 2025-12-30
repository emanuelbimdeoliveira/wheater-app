# Weather App

A simple and modular web application that displays real-time weather information for cities around the world. The user can search for any city and instantly see current temperature, humidity, wind speed, and more — powered by the OpenWeather API.

---

## 🌍 Live Preview
(You can add your deployed link here later)

---

## 🔎 How It Works
Type the name of a city in the search bar and the app will:

- ✔ Fetch live data from the **OpenWeather API**  
- ✔ Normalize the API response  
- ✔ Update the global state  
- ✔ Display the information on screen in a clean UI  

If the city is not found or the request fails, a fallback state is shown gracefully.

---

## 🛠 Tech Stack
- **HTML**
- **CSS**
- **JavaScript (Vanilla)**
- **OpenWeather API**
- **Modular architecture**

---

The project follows a **separation-of-concerns approach**, keeping API logic, UI updates, state management, and utilities organized and independent.

---

## ✨ Features
- 🔍 Search weather by city name  
- 🌡 Real-time temperature data  
- 💧 Humidity information  
- 🌬 Wind speed  
- 🏳 Country flag based on API data  
- 🖼 Weather condition icon  
- ⚠ Error handling & fallback UI  
- 🧠 Clean global state pattern  

---

## 🚀 Running the Project
Clone the repository and simply open the `index.html` file in your browser:
```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```

## 📁 Project Structure
```
weather-app
│   index.html
│   index.js
│   style.css
└───src
    ├───api
    │       weather.api.js
    ├───controller
    │       controller.js
    ├───display
    │       updateScreen.js
    ├───events
    │       events.js
    ├───formaters
    │       formatters.js
    ├───state
    │       normalizeData.js
    │       state.js
    │       updateState.js
    └───utils
            utils.js
```

---

That’s it — no build tools required.
🔑 **You will need an OpenWeather API key inside your API request file.**

## 📚 What I Learned
While building this project I strengthened my understanding of:
- Working with REST APIs
- Handling errors and invalid data
- Managing a global state
- Updating the UI based on API responses
- Writing modular and reusable JavaScript

## 🔮 Future Improvements
Some ideas I plan to explore:
- 📍 Detect user location automatically
- ⏱ Show hourly and weekly forecast
- 🏙 Compare weather across multiple cities
- ⭐ Save favorite locations
- 📱 Improve responsive behavior and UI animations

## 📌 Status
This project is complete but open for future enhancements.

## 👍 Thanks for checking out this project!
