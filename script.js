const calculate = document.getElementById('calculate')



function imc(){
    const name = document.getElementById('name').value
    const height = document.getElementById('height').value
    const weight = document.getElementById('weight').value
    const result = document.getElementById('result')
    
    if(name !== '' && height !== '' && weight !== ''){
        const calc = weight / (height ** 2)
        let res1 = ''
        if(calc < 16.9){
            res1 = 'Você está muito abaixo do peso ideal.</br> Riscos: </br> Queda de cabelo, infertilidade, ausência menstrual.'
        }
        else if(calc < 18.4){
            res1 = 'Você está abaixo do peso ideal.</br>Riscos:</br> Fadiga, stress, ansiedade.'
        }else if(calc < 24.9){
            res1 = 'Seu peso é ideal.</br>Menor risco de doenças cardíacas e vasculares.'
        }else if(calc < 29.9){
            res1 = 'Você está acima do peso.</br>Risco:</br>Fadia, má circulação, fadiga.'
        }else if(calc < 34.9){
            res1 = 'Você está com Obesidade Grau I.</br>Riscos:</br>Diabetes, angina, infarto, aterosclerose.'
        }else if(calc < 40){
            res1 = 'Você está com Obesidade Grau II.</br>Riscos:</br>Apneia do sono, falta de ar.'
        }else{
            res1 = 'Você está com Obesidade Grau III.</br>Riscos:</br>Refluxo, dificuldade para se mover, escaras, diabetes, infarto, AVC.'
        }

        result.innerHTML = `Olá ${name}, seu IMC é de ${calc.toFixed(2)}. ${res1}`

    }else{
        result.innerHTML = "Erro, preencha os campos necessários!!"
    }
}

calculate.addEventListener('click', imc);