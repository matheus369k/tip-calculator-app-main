const conta = document.querySelector('#ibill');
const people = document.getElementById('ipeople');

function tip(){
    const porcentos = document.querySelectorAll('.buttom');
    porcentos.forEach(porcento =>
        porcento.addEventListener('click', () => {

            const verif = document.querySelector('.on');
            if (verif != null){
                verif.classList.replace('on','off')
            }
            
            porcento.classList.replace('off','on') 
            
        })
    )
}

function amount(){
    let active = document.querySelector('.on');
    let contaValue = Number(conta.value)
    let peopleValue = Number(people.value)

    const msgAmount = document.getElementById('amount');

    if (peopleValue != '' && contaValue != '' && active != null){

        let porcentoId = Number(active.attributes.id.value)

        let calc = ((contaValue*porcentoId)/100)/peopleValue

        msgAmount.innerHTML = `${calc.toFixed(2)}`
    
        return calc
    
        
    }

}

function total(){
    const msgTotal = document.querySelector('#total');
    let contaValue = Number(conta.value)
    let peopleValue = Number(people.value)

    console.log(amount());

    if (amount() != undefined){
        let amountValue = Number(amount())
        
        let calc = (contaValue/peopleValue) + amountValue

        msgTotal.innerHTML = `${calc.toFixed(2)}`}

}