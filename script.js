let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let job = document.querySelector('.job');
let calculator = document.querySelector('.calculator');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            string = eval(string);
            // input.value = string;
            // input.value = "Hello World";
            let result = eval(string);
                    input.value = result;
                    string = result.toString();
                    
                    // Sembunyikan kalkulator dan tampilkan meme
                    calculator.style.display = 'none';
                    job.style.display = 'block';
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }

    })
});