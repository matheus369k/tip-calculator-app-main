const conta = document.querySelector('#ibill');
const people = document.getElementById('ipeople');
const porcentos = document.querySelectorAll('.buttom');


function amount(){
    porcentos.forEach(porcento =>
        porcento.addEventListener('click', () => {

            const verif = document.querySelector('.on');
            if (verif != null){
                verif.classList.replace('on','off')
            }
            
            porcento.classList.replace('off','on')

            const porcentoId = Number(porcento.attributes.id.value)
            const contaValue = Number(conta.value)
            const peopleValue = Number(people.value)

            let calc = ((contaValue*porcentoId)/100)/peopleValue

            const msgAmount = document.getElementById('amount');
            msgAmount.innerHTML = `${calc.toFixed(2)}`

            console.log(calc);
            
        })
    )
}