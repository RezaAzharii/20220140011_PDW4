function updateClock() {
    
    let now = new Date();

    
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    
    hours = formatTime(hours);
    minutes = formatTime(minutes);
    seconds = formatTime(seconds);

    
    document.getElementById("hasil").textContent =
      hours + ":" + minutes + ":" + seconds;

    setTimeout(updateClock, 1000);
  }

  function formatTime(time) {
    
    return time < 10 ? "0" + time : time;
  }

  updateClock();