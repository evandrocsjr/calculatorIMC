const calculate = document.getElementById('calculate')

function imc(){
    const name = document.getElementById('name').value
    const height = document.getElementById('height').value
    const weight = document.getElementById('weight').value
    const result = document.getElementById('result')
    
    if(name !== '' && height !== '' && weight !== ''){
        alert('Tudo ok')
    }else{
        alert('Por favor, preencha todos os dados!')
    }
}

calculate.addEventListener('click', imc);