function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    if (user === "student" && pass === "green123") {
        document.getElementById("login-screen").classList.add("hidden");
        document.getElementById("main-content").classList.remove("hidden");
    } else {
        document.getElementById("login-msg").textContent = "Invalid username/password!";
    }
}

// QUIZ QUESTIONS
const questions = [
    { q: "Which reduces carbon footprint most?", a: "Public transport" },
    { q: "Recycling helps the environment?", a: "Yes" },
    { q: "Composting turns waste into?", a: "Nutrients" },
    { q: "Saving water is important?", a: "Yes" },
    { q: "Planting trees increases oxygen?", a: "Yes" },
    { q: "Using cigarettes reduces waste?", a: "No" },
    { q: "Lights should be...", a: "Turned off when unused" },
    { q: "Reusable bags reduce...", a: "Plastic waste" },
    { q: "Bikes help reduce...", a: "Air pollution" },
    { q: "Solar panels provide...", a: "Clean energy" },
    { q: "Tap leaks should be...", a: "Fixed" },
    { q: "Paper should be...", a: "Reused" },
    { q: "Plant flowers for...", a: "Pollinators" },
    { q: "Rainwater can be...", a: "Harvested" },
    { q: "Campus clean-up improves...", a: "Hygiene" }
];

let current = 0;

// SHOW FIRST QUESTION
function showQuestion() {
    const c = questions[current];
    document.getElementById("quiz-container").innerHTML =
        `<p>${c.q}</p>
         <input type="text" id="ans" placeholder="Your answer">
         <button onclick="checkAnswer()">Submit</button>`;
}

function checkAnswer() {
    const userAns = document.getElementById("ans").value.trim();
    const correct = questions[current].a.toLowerCase();
    const result = document.getElementById("quiz-result");
    if (userAns.toLowerCase() === correct.toLowerCase()) {
        result.textContent = "✔️ Correct!";
    } else {
        result.textContent = ❌ Incorrect! Correct: ${questions[current].a};
    }
    document.getElementById("next-btn").classList.remove("hidden");
}

function nextQuestion() {
    current++;
    if (current < questions.length) {
        showQuestion();
        document.getElementById("quiz-result").textContent = "";
        document.getElementById("next-btn").classList.add("hidden");
    } else {
        document.getElementById("quiz-container").innerHTML = "<p>🎉 You completed the quiz!</p>";
        document.getElementById("next-btn").classList.add("hidden");
    }
}

// Start
showQuestion();
