//storing questions in array of objects...
const ques = [
    {
        question: '1. who developed javascript?',
        a: 'Dennis Ritchie',
        b: 'Brendan Eich',
        c: 'James Gosling',
        d: 'Bjarne Stroustrup',
        answer: 'Brendan Eich'
    },
    {
        question: '2. UNIVAC is?',
        a: 'Universal Automatic Computer',
        b: 'Universal Array Computer',
        c: 'Unique Automatic Computer',
        d: 'Unvalued Automatic Computer',
        answer: 'Universal Automatic Computer'
    },
    {
        question: '3. ALU is?',
        a: 'Arithmatic Logic Unit',
        b: 'Application Logic Unit',
        c: 'Array Logic Unit',
        d: 'None of the above',
        answer: 'Arithmatic Logic Unit'
    },
    {
        question: '4. VGA is?',
        a: 'Video Graphics Array',
        b: 'Visual Graphics Array',
        c: 'Volatile Graphics Array',
        d: 'Video Graphics Adapter',
        answer: 'Video Graphics Array'
    },
    {
        question: '5. IBM 1401 is?',
        a: 'First Generation Computer',
        b: 'Second Generation Computer',
        c: 'Third Generation Computer',
        d: 'Fourth Generation Computer',
        answer: 'Second Generation Computer'
    },
    {
        question: '6. MSI stands for?',
        a: 'Medium Scale Integrated  Circuits',
        b: 'Medium System Integrated  Circuits',
        c: 'Medium Scale Intelligent  Circuits',
        d: 'Medium System Intelligent  Circuits',
        answer: 'Medium Scale Integrated  Circuits'
    },
    {
        question: '7. WAN stands for?',
        a: 'Wap Area Network',
        b: 'Wide Area Network',
        c: 'Wide Array Network',
        d: 'Wireless Area Network',
        answer: 'Wide Area Network'
    },
    {
        question: '8. MICR stands for?',
        a: 'Magnetic Ink Character Reader',
        b: 'Magnetic Ink Code Reader',
        c: 'Magnetic Ink Cased Reader',
        d: 'None of the above',
        answer: 'Magnetic Ink Character Reader'
    },
    {
        question: '9. BCD is?',
        a: 'Binary Coded Degit',
        b: 'Bit Coded Decimal',
        c: 'Binary Coded Decimal',
        d: 'Bit Coded Digit',
        answer: 'Binary Coded Decimal'
    },
    {
        question: '10. FORTRAN is?',
        a: 'File Translation',
        b: 'Format Translation',
        c: 'Formula Translation',
        d: 'Floppy Translation',
        answer: 'Formula Translation'
    },
];

//getting the needed references...
let answer = document.querySelector('#answer').innerHTML;
const question = document.querySelector('#question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const option6 = document.querySelector('#option6');
const option7 = document.querySelector('#option7');
const option8 = document.querySelector('#option8');
const option9 = document.querySelector('#option9');
let ans1 = document.querySelector('#ans1');
let ans2 = document.querySelector('#ans2');
let ans3 = document.querySelector('#ans3');
let ans4 = document.querySelector('#ans4');
const textArea = document.querySelector('#ans5');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#score');
const timer = document.querySelector('#timer');
let checkedAnswer = document.querySelector('#userAnswer').innerHTML;
let userAnswers = [];

//defining and initializing needed variables
let maxLength = textArea.getAttribute('maxlength');
let resetTextArea = textArea.getAttribute('placeholder');
let count = document.querySelector('#count');
let result = document.querySelector('#result');
let questionCount = 0;
let score = 0;
let StartingTime = 0;
let time = StartingTime;

// timelimit using if- else statement
// timeLimit = () => {
//     if (questionCount == 0) {
//         StartingTime = Math.floor(Math.random() * 30 + 1);
//         time = StartingTime;
//     }
//     else if (questionCount == 1) {
//         StartingTime = Math.floor(Math.random() * 30 + 1);
//         time = StartingTime;
//     }
//     else if (questionCount == 2) {
//         StartingTime = 10;
//         time = StartingTime;
//     }
//     else if (questionCount == 3) {
//         StartingTime = 8;
//         time = StartingTime;
//     }
//     else if (questionCount == 4) {
//         StartingTime = 10;
//         time = StartingTime;
//     }
//     else if (questionCount == 5) {
//         StartingTime = 15;
//         time = StartingTime;
//     }
//     else if (questionCount == 6) {
//         StartingTime = 28;
//         time = StartingTime;
//     }
//     else if (questionCount == 7) {
//         StartingTime = 11;
//         time = StartingTime;
//     }
//     else if (questionCount == 8) {
//         StartingTime = 15;
//         time = StartingTime;
//     }
//     else if (questionCount == 9) {
//         StartingTime = 25;
//         time = StartingTime;
//     }
//     else {
//         StartingTime = 25;
//         time = StartingTime;
//     }
// }

//timer
let countDown = () => {
    let minutes = 0;
    let seconds = time;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    timer.innerHTML = `Time left ${minutes} : ${seconds}`;
    time--;

    if (time < 0) {
        clearInterval(time);
        time = StartingTime;
        displayOnClick();
        ShowQuestion();
        deselect();
    }
    else if (questionCount >= ques.length) {
        timer.innerHTML = `Time left 00:00`;
    }
}
setInterval(countDown, 1000);

// different time limit to each question using random method
let timeLimit = () => {
    for (let i = questionCount; i < ques.length; i++) {
        StartingTime = Math.floor(Math.random() * 30 + 1);
        time = StartingTime;
    }
}

// hide checkboxes
hideCheckBox = () => {
    option6.hidden = true;
    option7.hidden = true;
    option8.hidden = true;
    option9.hidden = true;
    ans6.hidden = true;
    ans7.hidden = true;
    ans8.hidden = true;
    ans9.hidden = true;
}

//show checkboxes
showCheckBox = () => {
    option6.hidden = false;
    option7.hidden = false;
    option8.hidden = false;
    option9.hidden = false;
    ans6.hidden = false;
    ans7.hidden = false;
    ans8.hidden = false;
    ans9.hidden = false;
}

// hide radiobuttons
hideRadio = () => {
    option1.hidden = true;
    option2.hidden = true;
    option3.hidden = true;
    option4.hidden = true;
    ans1.hidden = true;
    ans2.hidden = true;
    ans3.hidden = true;
    ans4.hidden = true;
}
//shows next questions
const ShowQuestion = () => {
    timeLimit();
    hideCheckBox();
    textArea.hidden = true;
    const questionList = (ques[questionCount]);
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
    option6.innerText = questionList.a;
    option7.innerText = questionList.b;
    option8.innerText = questionList.c;
    option9.innerText = questionList.d;
    // textArea.innerText = questionList.e;

    if (questionCount >= 6 && questionCount <= 10) {
        showCheckBox();
        hideRadio();
        count.hidden = true;// hides counter
    }
    else if (questionCount >= 3 && questionCount <= 5) {
        textArea.hidden = false;
        hideRadio();
        //counts the remaining characters in text area
        textArea.addEventListener('input', function (e) {
            count.innerHTML = (maxLength - textArea.value.length);
        });
        //reset text and count for next question
        textArea.value = '';
        count.innerHTML = maxLength;
    }
}
ShowQuestion();

//checks the selected input type by the user
const checkAnswer = () => {
    let ans;
    answers.forEach((currentAnswer) => {
        if (currentAnswer.checked) {
            ans = currentAnswer.id;
        }
    });
    return ans;
};

//gets the user clicked answer against input type
getAnswerOfTheQues = () => {
    let clickedAnswer;
    answer = checkAnswer();
    if (answer == 'ans1' || answer == 'ans6') {
        clickedAnswer = ques[questionCount].a;
    }
    else if (answer == 'ans2' || answer == 'ans7') {
        clickedAnswer = ques[questionCount].b;
    }
    else if (answer == 'ans3' || answer == 'ans8') {
        clickedAnswer = ques[questionCount].c;
    }
    else if (answer == 'ans4' || answer == 'ans9') {
        clickedAnswer = ques[questionCount].d;
    }
    else if (questionCount >= 3 && questionCount <= 5) {
        getUserInpFromTextarea();
    }
    else {
        clickedAnswer = "oops! You haven't clicked any option"
    }

    return clickedAnswer;

}
// Deselects the answer
const deselect = () => {
    answers.forEach((currentAnswer) => {
        currentAnswer.checked = false;
    })
};

// gets user input from text area question
getUserInpFromTextarea = () => {
    userAnswers.push(textArea.value.trim());
    let filt = userAnswers.filter(x => x);
    userAnswers = filt;
}

// click event on submit button

submit.addEventListener('click', displayOnClick);
function displayOnClick() {
    checkedAnswer = getAnswerOfTheQues();
    userAnswers.push(checkedAnswer); //pushing user checked answer to an array
    console.log(userAnswers); //showing an array to console
    if (checkedAnswer == ques[questionCount].answer) {
        score++;
    };
    questionCount++;
    deselect();
    if (questionCount < ques.length) {
        ShowQuestion();
    }
    else {
        displayResult();
    }
};

//Generate the results
displayResult = () => {
    let filt = userAnswers.filter(x => x);
    userAnswers = filt;
    document.querySelector('#box').hidden=true;
    let output = '';
    output += `<button class = 'btn' onclick = 'location.reload()'>Play Again</button><br><h3> You scored:-  ${score}/${ques.length}<br><br>`;
    for (let i = 0; i < ques.length; i++) {
        output += `${ques[i].question} <br> a)${ques[i].a} <br> b)${ques[i].b} <br> c)${ques[i].c}<br> d)${ques[i].d}<br>Answer:- ${ques[i].answer}<br>Your answer:-${userAnswers[i]}<br><br>`
        result.innerHTML = output;
    }
}