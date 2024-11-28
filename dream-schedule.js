document.addEventListener("DOMContentLoaded", () => {
    const background = document.getElementById("background");
    const greeting = document.getElementById("greeting");
    const thought = document.getElementById("thought");
    const doodle = document.getElementById("doodle");

    const thoughts = {
        morning: "The morning is full of possibilities. Seize the day!",
        day: "This is your time to shine. Stay focused!",
        evening: "Reflect on your progress and enjoy the sunset.",
        night: "Relax and recharge. You’ve earned this.",
        midnight: "The stars are watching. Dream big!"
    };

    const doodles = {
        morning: "morning-sun.png",
        day: "day-cloud.png",
        evening: "sunset.png",
        night: "moon-stars.png",
        midnight: "stars.png"
    };

    const updateTheme = () => {
        const hours = new Date().getHours();
        let themeClass = "";
        let greetingText = "";
        let thoughtText = "";
        let doodleSrc = "";

        if (hours >= 5 && hours < 12) {
            themeClass = "morning-theme";
            greetingText = "Good Morning, V! 🌞";
            thoughtText = thoughts.morning;
            doodleSrc = doodles.morning;
        } else if (hours >= 12 && hours < 17) {
            themeClass = "day-theme";
            greetingText = "Good Afternoon, V! ☀️";
            thoughtText = thoughts.day;
            doodleSrc = doodles.day;
        } else if (hours >= 17 && hours < 20) {
            themeClass = "evening-theme";
            greetingText = "Good Evening, V! 🌅";
            thoughtText = thoughts.evening;
            doodleSrc = doodles.evening;
        } else if (hours >= 20 || hours < 2) {
            themeClass = "night-theme";
            greetingText = "Good Night, V! 🌙";
            thoughtText = thoughts.night;
            doodleSrc = doodles.night;
        } else {
            themeClass = "midnight-theme";
            greetingText = "Welcome to Midnight, V! 🕛";
            thoughtText = thoughts.midnight;
            doodleSrc = doodles.midnight;
        }

        // Update theme, greeting, thought, and doodle
        background.className = themeClass;
        greeting.textContent = greetingText;
        thought.textContent = thoughtText;
        doodle.src = doodleSrc;
    };

    updateTheme();
    setInterval(updateTheme, 60000); // Update every minute
});
