let userMood;
let rating;
let navigationExperience;
let recommendation;
let experience = "";

let fantastic = document.querySelector(".fantastic");
let good = document.querySelector(".good");
let notGood = document.querySelector(".notGood");

fantastic.addEventListener("click", (e) => {
  userMood = "fantastic";

  fantastic.style.backgroundColor = "#1F51FF";
  fantastic.style.color = "white";

  good.style.color = "";
  good.style.backgroundColor = "";

  notGood.style.color = "";
  notGood.style.backgroundColor = "";
});

good.addEventListener("click", (e) => {
  userMood = "good";

  fantastic.style.backgroundColor = "";
  fantastic.style.color = "";

  good.style.backgroundColor = "#1F51FF";
  good.style.color = "white";

  notGood.style.color = "";
  notGood.style.backgroundColor = "";
});

notGood.addEventListener("click", (e) => {
  userMood = "notGood";

  fantastic.style.backgroundColor = "";
  fantastic.style.color = "";

  good.style.color = "";
  good.style.backgroundColor = "";

  notGood.style.backgroundColor = "#1F51FF";
  notGood.style.color = "white";
});

// it gets the star rating from user and save that rating in a variable name rating.
function getRating(rate) {
  rating = rate;
  let ratingStar = document.querySelectorAll("i");
  ratingStar.forEach((i, count) => {
    if (count < rate) i.style.color = "gold";
    else i.style.color = "";
  });
}

function fillRating(rate) {
  if (rating !== undefined) return;

  let ratingStar = document.querySelectorAll("i");
  ratingStar.forEach((i, count) => {
    if (count < rate) i.style.color = "#1F51FF";
    else i.style.color = "";
  });
}

function unfillRating() {
  if (rating !== undefined) return;

  let ratingStar = document.querySelectorAll("i");
  ratingStar.forEach((i) => {
    i.style.color = "";
  });
}

let easy = document.querySelector(".easy");
let normal = document.querySelector(".normal");
let difficult = document.querySelector(".difficult");

easy.addEventListener("click", (e) => {
  navigationExperience = "easy";

  easy.style.backgroundColor = "#1F51FF";
  easy.style.color = "white";

  normal.style.color = "";
  normal.style.backgroundColor = "";

  difficult.style.color = "";
  difficult.style.backgroundColor = "";
});

normal.addEventListener("click", (e) => {
  navigationExperience = "normal";

  easy.style.backgroundColor = "";
  easy.style.color = "";

  normal.style.backgroundColor = "#1F51FF";
  normal.style.color = "white";

  difficult.style.color = "";
  difficult.style.backgroundColor = "";
});

difficult.addEventListener("click", (e) => {
  navigationExperience = "difficult";

  easy.style.backgroundColor = "";
  easy.style.color = "";

  normal.style.color = "";
  normal.style.backgroundColor = "";

  difficult.style.backgroundColor = "#1F51FF";
  difficult.style.color = "white";
});

let yes = document.querySelector(".yes");
let no = document.querySelector(".no");
let mayBe = document.querySelector(".mayBe");

yes.addEventListener("click", (e) => {
  recommendation = "yes";

  yes.style.backgroundColor = "#1F51FF";
  yes.style.color = "white";

  no.style.color = "";
  no.style.backgroundColor = "";

  mayBe.style.color = "";
  mayBe.style.backgroundColor = "";
});

no.addEventListener("click", (e) => {
  recommendation = "no";

  yes.style.backgroundColor = "";
  yes.style.color = "";

  no.style.backgroundColor = "#1F51FF";
  no.style.color = "white";

  mayBe.style.color = "";
  mayBe.style.backgroundColor = "";
});

mayBe.addEventListener("click", (e) => {
  recommendation = "mayBe";

  yes.style.backgroundColor = "";
  yes.style.color = "";

  no.style.color = "";
  no.style.backgroundColor = "";

  mayBe.style.backgroundColor = "#1F51FF";
  mayBe.style.color = "white";
});

function setExperience(event) {
  experience = event.target.value;
}

let verifyButton = document.querySelector(".verifyBtn");
let clientForm = document.querySelector(".clientForm");

verifyButton.addEventListener("click", (e) => {
  let clientCode = document.querySelector(".clientCode").value.toUpperCase();
  let clientPanNumber = document.querySelector(".panNumber").value.toUpperCase();
  console.log(clientCode, clientPanNumber);

  let errorMessage = document.querySelector(".errorMsg");

  if (
    !isAlphanumeric(clientCode) &&
    (!isAlphanumeric(clientPanNumber) || clientPanNumber.length !== 10)
  ) {
    errorMessage.innerText = "Enter valid Client Details";
    errorMessage.style.display = "block";
    setTimeout(() => {
      errorMessage.style.display = "none";
    }, 1000);
  } else if (!isAlphanumeric(clientCode)) {
    errorMessage.innerText = "Enter valid Client Code";
    errorMessage.style.display = "block";
    setTimeout(() => {
      errorMessage.style.display = "none";
    }, 1000);
  } else if (
    !isAlphanumeric(clientPanNumber) ||
    clientPanNumber.length !== 10
  ) {
    errorMessage.innerText = "Enter valid Pan Number";
    errorMessage.style.display = "block";
    setTimeout(() => {
      errorMessage.style.display = "none";
    }, 1000);
  } else {
    document.querySelector(".loginPopup").style.display = "none";
    document.body.style.pointerEvents = "auto";
    localStorage.setItem("clientCode", clientCode);
    localStorage.setItem("clientPanNumber", clientPanNumber);
  }

  // $.ajax({
  //   url: "http://backoffice.ashikagroup.com:82/AshikaMobileApi/Service1.svc/GetClientDetails",
  //   method: "GET",
  //   data: {
  //     tcFinyear: "2023-2024",
  //     tcFirmfilter: "ASK-000001",
  //     tokenid: "ySXztrwYjdHJcgf/6Idj9UesqlyK1pAI",
  //     tcClientCode: clientCode,
  //     tcPanno: clientPanNumber,
  //   },
  //   success: function (result) {
  //     console.log(result);
  //   },
  //   error: function (error) {
  //     console.log(error);
  //   },
  // });
  // clientForm.style.display = "none";
  // otpForm.style.display = "block";
});

function isAlphanumeric(str) {
  return /^[a-zA-Z0-9]+$/.test(str);
}

let feedbackButton = document.querySelector(".feedbackButton");
let errorField = document.querySelector(".errorField");

feedbackButton.addEventListener("click", async (e) => {
  if (
    userMood !== undefined &&
    rating !== undefined &&
    navigationExperience !== undefined &&
    recommendation !== undefined
  ) {
    let data = {
      clientCode: localStorage.getItem("clientCode"),
      clientPanNumber: localStorage.getItem("clientPanNumber"),
      userMood: userMood,
      rating: rating,
      navigationExp: navigationExperience,
      recommendation: recommendation,
      experience: experience !== "" ? experience : "NA",
      currentDate: new Date().toDateString(),
    };

    let loadingBar = document.querySelector(".loadingBar");
    loadingBar.style.display = "flex";

    await fetch(
      "https://script.google.com/macros/s/AKfycbw1V2cOs4LXCnvkL6tFLbfuWFBRqwJWEtULD62QW1EngzzP42T1ts6bqdgGCg8YY4Yt/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => console.log(res))
      .catch((error) => console.log(error));

    loadingBar.style.display = "none";
    window.location.href = "thankYou.html";
  } else {
    errorField.style.display = "block";
    setTimeout(() => {
      errorField.style.display = "none";
    }, 3000);
  }
  e.preventDefault();
});

/* https://backoffice.ashikagroup.com:82/AshikaMobileApi/Service1.svc/GetClientDetails?tcFinyear=2023-2024&tcFirmfilter=ASK-000001&tokenid=ySXztrwYjdHJcgf/6Idj9UesqlyK1pAI&tcClientCode=C2024&tcPanno=MDCPS7881Q  */
