// JavaScript Object
const workoutPlan = {
  day: "Saturday",
  exercises: [
    "DB Heel Raises - 5x25",
    "DB Goblet Squat - 5x15",
    "DB Row - 5x12",
    "DB Shrugs - 5x12",
    "DB Bent-Over Side Raise - 5x12",
    "DB Side Raise - 5x12",
    "DB Front Raise - 5x12",
    "Crunch/Leg Raise - 5x10",
  ]
};

function showWorkoutPlan() {
  const output = document.getElementById("workoutOutput");
  if (output) {
    let html = "<h4>" + workoutPlan.day + " Plan</h4><ul>";
    for (let i = 0; i < workoutPlan.exercises.length; i++) {
      html += "<li>" + workoutPlan.exercises[i] + "</li>";
    }
    html += "</ul>";
    output.innerHTML = html;
  }
}

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const goal = document.getElementById("goal").value;
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  if (name === "" || email === "" || goal === "" || message === "") {
    formMessage.innerHTML = "Please fill in all fields.";
    formMessage.style.color = "red";
    return false;
  }

  if (!email.includes("@") || !email.includes(".")) {
    formMessage.innerHTML = "Please enter a valid email address.";
    formMessage.style.color = "red";
    return false;
  }

  formMessage.innerHTML = "Form submitted successfully!";
  formMessage.style.color = "green";
  return false;
}

function saveFavoriteProgram() {
  const program = document.getElementById("favoriteProgram").value;
  const savedMessage = document.getElementById("savedMessage");

  if (program === "") {
    savedMessage.innerHTML = "Please choose a program first.";
    savedMessage.style.color = "red";
  } else {
    sessionStorage.setItem("favoriteProgram", program);
    savedMessage.innerHTML = "Saved favorite program: " + program;
    savedMessage.style.color = "green";
  }
}

function loadFavoriteProgram() {
  const savedProgram = sessionStorage.getItem("favoriteProgram");
  const savedMessage = document.getElementById("savedMessage");

  if (savedProgram && savedMessage) {
    savedMessage.innerHTML = "Your saved favorite program is: " + savedProgram;
    savedMessage.style.color = "blue";
  }
}