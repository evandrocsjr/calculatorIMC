const calculate = document.getElementById('calculate')

function imc(){
    const name = document.getElementById('name').value
    const height = document.getElementById('height').value
    const weight = document.getElementById('weight').value
    const result = document.getElementById('result')
    
    if(name !== '' && height !== '' && weight !== ''){
        const calc = weight / (height ** 2)
        let res1 = ''
        if(calc < 18.4){
            res1 = 'Você está abaixo do peso ideal!'
        }else if(calc > 18.4 && calc < 24.9){
            res1 = 'Seu peso é ideal!'
        }else{
            res1 = 'Você está acima do peso!'
        }

        result.innerHTML = `Olá ${name}, seu IMC é de ${calc.toFixed(2)}. ${res1}`

    }else{
        result.innerHTML = "Erro, preencha os campos necessários!!"
    }
}

calculate.addEventListener('click', imc);