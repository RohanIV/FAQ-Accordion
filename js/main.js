document.addEventListener('DOMContentLoaded', function(){
    const plusIcon = document.querySelectorAll('.plus');
    const minusIcon = document.querySelectorAll('.minus');
    const question = document.querySelectorAll('h2');

    function display(event){
        const questionDiv = event.target.closest('.question');
        const answerDiv = questionDiv.nextElementSibling;

        if (answerDiv.style.display === 'none' || answerDiv.style.display === '') {
            answerDiv.style.display = 'block';
            questionDiv.querySelector('.plus').style.display = 'none';
            questionDiv.querySelector('.minus').style.display = 'block'


        } else {
            answerDiv.style.display = 'none';
            questionDiv.querySelector('.plus').style.display = 'block';
            questionDiv.querySelector('.minus').style.display = 'none'
        }
    }

    function hover(){
        this.parentElement.querySelector('h2').style.color = 'hsl(293, 77%, 41%)';
    }
    function noHover() {
        this.parentElement.querySelector('h2').style.color = 'hsl(292, 42%, 14%)';
    }

    plusIcon.forEach(plus => {
        plus.addEventListener('click', display);
        plus.addEventListener('mouseover', hover);        
        plus.addEventListener('mouseout', noHover);        
    });

    minusIcon.forEach(minus =>{
        minus.addEventListener('click', display);
        minus.addEventListener('mouseover', hover);
        minus.addEventListener('mouseout', noHover);
    });

    question.forEach(header =>{
        header.addEventListener('click', display);
        header.addEventListener('mouseover', hover);
        header.addEventListener('mouseout', noHover);
    });
});
