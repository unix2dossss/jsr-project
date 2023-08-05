function timer() {
        setInterval(dispatchEvent("timerFired"), 1000);
}