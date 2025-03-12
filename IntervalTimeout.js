// Start a repeating task every 2 seconds
const intervalId = setInterval(() => {
    console.log("Repeating task - Every 2 seconds");
  }, 2000);
  
  // Stop the repeating task after 10 seconds
  setTimeout(() => {
    clearInterval(intervalId); // Stops the interval
    console.log("Interval stopped after 10 seconds.");
  }, 10000);
  