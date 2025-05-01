async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "YOUR_API_KEY"; // 🔑 کلید API خودتو اینجا بذار

  if (!city) {
    alert("لطفاً نام شهر را وارد کنید.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fa`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("شهر پیدا نشد");
    }

    const data = await response.json();
    const temp = data.main.temp;
    const weather = data.weather[0].description;
    const icon = data.weather[0].icon;

    document.getElementById("result").innerHTML = `
        <h2 class="text-xl font-semibold">${city}</h2>
        <p>🌡 دما: ${temp} درجه سانتی‌گراد</p>
        <p>☁️ وضعیت: ${weather}</p>
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="weather icon" class="inline-block mt-2">
      `;
  } catch (error) {
    document.getElementById("result").innerHTML = `
        <p class="text-red-600 font-medium">خطا: ${error.message}</p>
      `;
  }
}
