    let string ="";
    const input = document.querySelector('#display');
    const buttons = document.querySelectorAll('.button');
    // const numbers = document.querySelectorAll('#numbers');
    // const calculate = document.querySelector(".calculate")
        

    buttons.forEach(number => {
        number.addEventListener("click", (e) => {
            let value = e.target.innerHTML;
        console.log(e)
            if (value === '=') {
                try {
                    string = eval(string);
                    input.value = string;
                } catch (err) {
                    input.value = "Error";
                }
            } else if (value === 'C') {
                string = '';
                input.value = string;
            } else {
                string += value;
                input.value = string;
            }
            
        });
    });