function doCountdown() {
    const date = new Date(2025, 8, 12, 16, 30);
    function loop() {
        const now = new Date();
        let timeDiff = Math.floor((date - now) / 1000); // total seconds remaining

        if (timeDiff < 0) timeDiff = 0; // prevent negative countdown

        const days = Math.floor(timeDiff / (60 * 60 * 24));
        const hours = Math.floor((timeDiff % (60 * 60 * 24)) / (60 * 60));
        const minutes = Math.floor((timeDiff % (60 * 60)) / 60);
        const seconds = timeDiff % 60;

        document.querySelector("#days").textContent = days;
        document.querySelector("#hours").textContent = hours;
        document.querySelector("#minutes").textContent = minutes;
        document.querySelector("#seconds").textContent = seconds;
        requestAnimationFrame(loop);
    }
    loop();
}

doCountdown();