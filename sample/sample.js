class Exam {
    constructor(profName, examName, examTime) {
        this.profName = profName;
        this.examName = examName;
        this.examTime = examTime;
        this.questions = [];
    }

    addQuestion(question) {
        this.questions.push(question);
    }
}

class Question {
    constructor(title, answers, correct) {
        this.title = title;
        this.answers = answers;
        this.correct = correct;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const createForm = document.forms['exam-info'];
    const headDiv = document.getElementById('head-section');
    let exam;

    document.getElementById('createButton').addEventListener('click', () => {
        const profName = document.getElementById('profName').textContent;
        const examName = createForm['examName'].value;
        const examTime = createForm['examTime'].value;
        exam = new Exam(profName, examName, examTime);
        headDiv.remove();
        console.log('Exam created:', exam);
    });

    document.getElementById('nextButton').addEventListener('click', () => {
        const questionTitle = document.getElementById('questionTitle').value;
        const answers = [
            document.getElementById('answer1').value,
            document.getElementById('answer2').value,
            document.getElementById('answer3').value,
            document.getElementById('answer4').value
        ];
        const correctIndex = Array.from(document.getElementsByName('answer')).findIndex(radio => radio.checked);

        const question = new Question(questionTitle, answers, correctIndex);
        exam.addQuestion(question);

        console.log('Question added:', question);
        console.log('Current exam state:', exam);

        // Clear the question form for the next question
        document.getElementById('questionTitle').value = '';
        document.getElementById('answer1').value = '';
        document.getElementById('answer2').value = '';
        document.getElementById('answer3').value = '';
        document.getElementById('answer4').value = '';
        document.getElementsByName('answer').forEach(radio => radio.checked = false);

        // Increment the question number
        const questionNumberElement = document.getElementById('questionNumber');
        let questionNumber = parseInt(questionNumberElement.textContent);
        questionNumberElement.textContent = questionNumber + 1;
    });
});
