// const bg1 = document.getElementById("black");
// bg1.addEventListener("click", () => {
//   document.body.style.backgroundColor = "black";

//   if (document.body.style.backgroundColor == "black") {
//     document.getElementById("theme-style").href = "black.css";
//   }
// });

// const white = document.getElementById("white");
// white.addEventListener("click", () => {
//   document.body.style.backgroundColor = "white";
//   if (document.body.style.backgroundColor == "white") {
//     document.getElementById("theme-style").href = "white.css";
//   }
// });

const x = document.querySelector(".switch");

x.addEventListener("change", () => {
  document.body.classList.toggle("lights-on");
});

// email working
function sendEmail() {
  var params = {
    from_name: document.getElementById("name").value,
    subject: document.getElementById("sub").value,
    email: document.getElementById("email").value,
    message: document.getElementById("msg").value,
  };

  emailjs.send("service_sra5aqo", "template_cs2gbuj", params).then(
    function (response) {
      alert("SUCCESS!", response.status, response.text);
      document.getElementById("name").value = "";
      document.getElementById("sub").value = "";
      document.getElementById("email").value = "";
      document.getElementById("msg").value = "";
    },
    function (error) {
      alert("FAILED...", error);
    }
  );
}
