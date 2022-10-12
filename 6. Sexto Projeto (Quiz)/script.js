//Dados Iniciais
let currentQuention = 0; //Array começa no 0.
let correctAnswers = 0;

showQuestion();

//Funções
function showQuestion(){
    if(questions[currentQuention]){
        let q = questions[currentQuention];

        let pct = Math.floor((currentQuention / questions.length) * 100);
        document.querySelector('.progress--bar').style.width = `${pct}%`;

        document.querySelector('.scoreArea').style.display = 'none';
        document.querySelector('.questionArea').style.display = 'block';

        document.querySelector('.question').innerHTML = q.question;
        document.querySelector('.options').innerHTML = '';

        let optionsHtml = '';
        for(let i in q.options){
            optionsHtml += `<div data-op="${i}" class="option">
                <span>${parseInt(i)+1}</span>${q.options[i]}</div>`;
        }
        document.querySelector('.options').innerHTML = optionsHtml;

        document.querySelectorAll('.options .option').forEach(item =>{
            item.addEventListener('click', optionClickEvent);
        });

    } else {
        finishQuiz();
    }
}

function optionClickEvent(e){
    let clickedOption = parseInt(e.target.gettAtribute('data-op'));

    if(question[currentQuention].answer === clickedOption){
        correctAnswers++;
    }

    currentQuention++;
    showQuestion();
}

function finishQuiz(){
    document.querySelector('.scoreArea').style.display = 'block';
    document.querySelector('.questionArea').style.display = 'none';
}
