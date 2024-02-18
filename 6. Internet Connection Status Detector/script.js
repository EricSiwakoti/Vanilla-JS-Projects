const image = document.getElementById("image");
const statusDisplay = document.getElementById("status");
const bgColor = document.getElementById("main");

function setColor() {
  bgColor.classList.add("online");
}

async function checkStatus() {
  try {
    const fetchResult = await fetch(
      "https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Lenna_%28test_image%29.png/440px-Lenna_%28test_image%29.png?time=" +
        new Date().getTime()
    );
    image.src = "./assets/online.png";
    setColor();
    return fetchResult.status >= 200 && fetchResult.status < 300;
  } catch (error) {
    console.error(error);
    statusDisplay.textContent =
      "You are offline! Please check your internet connection.";
    image.src = "./assets/offline.png";
    bgColor.classList.remove("online");
    return false;
  }
}

// Monitor the network status
setInterval(async () => {
  const status = await checkStatus();
  if (status) {
    statusDisplay.textContent =
      "You are online! You are connected to the internet.";
    setColor();
  }
}, 5000);

// Check the network status on load
window.addEventListener("load", () => {
  if (checkStatus()) {
    statusDisplay.textContent = "Online! You are connected to the internet.";
  } else {
    statusDisplay.textContent =
      "You are offline! Please check your internet connection.";
  }
});
