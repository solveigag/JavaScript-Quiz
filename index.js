const correctAnswer = ["D", "B", "C", "C", "B"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const questions = document.querySelectorAll(".question"); //returns a NodeList

form.addEventListener("submit", event => {
    event.preventDefault();
    
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value]; //capturing all selected answers in the form
   userAnswers.forEach((answer, index) => {
        if (answer === correctAnswer[index]) {
            score++;
            questions[index].classList.add("correct")           
        } else {
            questions[index].classList.add("wrong")
        }
    });

    scrollTo(0,0); //after submit scrolls to the top of the page
    result.classList.remove("hide") // removes the hide class from the element displaying result
    result.querySelector("p").textContent = `You scored ${score}/5`//finds FIRST p in div with the result class
});

