var myQuestions = [
	{
		question: "Ce ora ai Luni de la 9:00?",
		answers: {
			a: 'Geografie',
			b: 'Matematica',
			c: 'Fizica'
		},
		correctAnswer: 'a'
	},
	{
		question: "Dar de la 11:10?",
		answers: {
			a: 'Informatica',
			b: 'Geografie',
			c: 'Fizica'
		},
		correctAnswer: 'c'
	},
    {
		question: "Prima ora Marti, de la 8:00? (aia la care nu intarziu niciodata)",
		answers: {
			a: 'Biologie',
			b: 'Matematica',
			c: 'Informatica'
		},
		correctAnswer: 'c'
	},
    {
		question: "Ce ai ultima ora Miercuri? (aia la care ramanem mereu)",
		answers: {
			a: 'Germana/Franceza',
			b: 'Engleza',
			c: 'Chimie'
		},
		correctAnswer: 'b'
	},
    {
		question: "Dar Joi ultima ora? (alta la care suntem mereu toti)",
		answers: {
			a: 'Germana/Franceza',
			b: 'Informatica',
			c: 'Engleza'
		},
		correctAnswer: 'a'
	},
    {
		question: "Una mai grea, Vineri de la 10:00?",
		answers: {
			a: 'Fizica',
			b: 'Biologie',
			c: 'Romana'
		},
		correctAnswer: 'b'
	},
    {
		question: "Ultima ora?",
		answers: {
			a: 'Eng|eza',
			b: 'Englza',
			c: 'Engleza'
		},
		correctAnswer: 'c'
	}
];
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){

        var output = [];
        var answers;
    
        for(var i=0; i<questions.length; i++){
            
            answers = [];
    
            for(letter in questions[i].answers){
    
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + questions[i].answers[letter]
                        +' '
                    + '</label>'
                );
            }
    
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
    
        quizContainer.innerHTML = output.join('');
    }

	function showResults(questions, quizContainer, resultsContainer){
	
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        var userAnswer = '';
        var numCorrect = 0;
        
        for(var i=0; i<questions.length; i++){
    
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            if(userAnswer===questions[i].correctAnswer){
                numCorrect++;
                
                answerContainers[i].style.color = 'lightgreen';
            }
            else{
                answerContainers[i].style.color = 'crimson';
            }
        }
    
        resultsContainer.innerHTML = numCorrect + ' din ' + questions.length + ' corecte';
    }

	showQuestions(questions, quizContainer);

	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}
generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);