//Dados Iniciais
let currentQuention = 0; //Array começa no 0.

showQuestion();

//Funções
function showQuestion(){
    if(questions[currentQuention]){
        let q = questions[currentQuention];

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

    }
}

function optionClickEvent(e){
    let clickedOption = e.target.gettAtribute('data-op');
}
