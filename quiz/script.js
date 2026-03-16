function checkQuiz() {
    let score = 0;

    // Question 1
    const q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value === "Naruto Uzumaki") {
        document.getElementById("result1").innerHTML = "Correct!";
        document.getElementById("result1").style.color = "green";
        score++;
    } else {
        document.getElementById("result1").innerHTML = "Wrong!";
        document.getElementById("result1").style.color = "red";
    }

    // Question 2
    const q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === "Attack on Titan") {
        document.getElementById("result2").innerHTML = "Correct!";
        document.getElementById("result2").style.color = "green";
        score++;
    } else {
        document.getElementById("result2").innerHTML = "Wrong!";
        document.getElementById("result2").style.color = "red";
    }

    // Question 3
    const q3Checked = document.querySelectorAll('input[name="q3"]:checked');
    let q3Answers = [];
    for (let i = 0; i < q3Checked.length; i++) {
        q3Answers.push(q3Checked[i].value);
    }
    q3Answers.sort();

    const q3Correct = ["Itachi", "Kisame", "Pain"];
    q3Correct.sort();

    if (JSON.stringify(q3Answers) === JSON.stringify(q3Correct)) {
        document.getElementById("result3").innerHTML = "Correct!";
        document.getElementById("result3").style.color = "green";
        score++;
    } else {
        document.getElementById("result3").innerHTML = "Wrong!";
        document.getElementById("result3").style.color = "red";
    }

    // Question 4
    const q4Checked = document.querySelectorAll('input[name="q4"]:checked');
    let q4Answers = [];
    for (let i = 0; i < q4Checked.length; i++) {
        q4Answers.push(q4Checked[i].value);
    }
    q4Answers.sort();

    const q4Correct = ["Jujutsu Kaisen", "Jujutsu Kaisen Zero"];
    q4Correct.sort();

    if (JSON.stringify(q4Answers) === JSON.stringify(q4Correct)) {
        document.getElementById("result4").innerHTML = "Correct!";
        document.getElementById("result4").style.color = "green";
        score++;
    } else {
        document.getElementById("result4").innerHTML = "Wrong!";
        document.getElementById("result4").style.color = "red";
    }

    // Score
    document.getElementById("score").innerHTML = "You scored " + score + " out of 4";
}