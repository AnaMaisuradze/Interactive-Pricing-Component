let checker = document.querySelector(".switch input");
let switcher = document.querySelector(".switch");
let duration = document.querySelector(".month");
let price = document.querySelector(".price .fixed-price");
let range = document.querySelector(".myrange");
let pageViews = document.querySelector(".pageviews span");

switcher.onclick = function() {
  if (checker.checked == true) {
    let priceInt = parseInt(price.textContent);
    price.textContent = `${(priceInt - (priceInt * 0.25)) * 12}`;
    duration.textContent = "/year";
  } else {
    refreshPrices();
    duration.textContent = "/month";
  }
};

range.addEventListener("input", refreshPrices);

function refreshPrices() {
  if (range.value == 1) {
    if (checker.checked == true) {
      price.textContent = `${(8 - (8 * 0.25)) * 12}`;
    } else {
      price.textContent = 8;
    }
    pageViews.textContent = "10k";
  } else if (range.value == 2) {
    if (checker.checked == true) {
      price.textContent = `${(12 - (12 * 0.25)) * 12}`;
    } else {
      price.textContent = 12;
    }
    pageViews.textContent = "50k";
  } else if (range.value == 3) {
    if (checker.checked == true) {
      price.textContent = `${(16 - (16 * 0.25)) * 12}`;
    } else {
      price.textContent = 16;
    }
    pageViews.textContent = "100k";
  } else if (range.value == 4) {
    if (checker.checked == true) {
      price.textContent = `${(24 - (24 * 0.25)) * 12}`;
    } else {
      price.textContent = 24;
    }
    pageViews.textContent = "500k";
  } else if (range.value == 5) {
    if (checker.checked == true) {
      price.textContent = `${(36 - (36 * 0.25)) * 12}`;
    } else {
      price.textContent = 36;
    }
    pageViews.textContent = "1M";
  }
}



range.addEventListener("input", updateRangeBackground);

function updateRangeBackground() {
  let value = (range.value - range.min) / (range.max - range.min);
  range.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${value * 100}%, hsl(224, 65%, 95%) ${value * 100}%, hsl(224, 65%, 95%) 100%)`;
}
