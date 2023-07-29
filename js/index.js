const conta = document.querySelector('#ibill');
const people = document.getElementById('ipeople');
const buttomReset = document.getElementById('reset');
const inputCustom = document.querySelector('#icustom');


function tip(){
    const porcentos = document.querySelectorAll('.buttom');
    porcentos.forEach(porcento =>
        porcento.addEventListener('click', () => {
            
            const verif = document.querySelector('.on');
            const buttomCustom = document.querySelector('.custom');

            if (verif != null){                
                verif.classList.replace('on','off')
            }
            
            porcento.classList.replace('off','on')

            console.log(porcento);
            
            if (porcento == buttomCustom || porcento == inputCustom){
                                
                inputCustom.classList.replace('custom-off','custom-on')
                buttomCustom.classList.replace('custom-on','custom-off')
                inputCustom.classList.replace('off','on')   

            }else{
                inputCustom.classList.replace('custom-on','custom-off')
                buttomCustom.classList.replace('custom-off','custom-on')
                inputCustom.value = ''
            }
            
        })  
    )
    
}

function amount(){
    buttomReset.classList.add('on-reset')

    const active = document.querySelector('.on');

    let contaValue = Number(conta.value)
    let peopleValue = Number(people.value)

    const msgAmount = document.getElementById('amount');

    if (peopleValue != '' && contaValue != '' && active != null){

        if (active == inputCustom){
            var porcValue = Number(inputCustom.value)
            
        }else{
            var porcValue = Number(active.attributes.id.value)
        }

        let calc = ((contaValue*porcValue)/100)/peopleValue

        msgAmount.innerHTML = `${calc.toFixed(2)}`
        
        return calc
        
    }

}

function total(){
    const msgTotal = document.querySelector('#total');
    let contaValue = Number(conta.value)
    let peopleValue = Number(people.value)


    if (amount() != undefined){
        let amountValue = Number(amount())
        
        let calc = (contaValue/peopleValue) + amountValue

        msgTotal.innerHTML = `${calc.toFixed(2)}`}

}

function reset(){
    const reset = document.querySelector('.on-reset');
    if (reset != null){
        reset.addEventListener('click', () => {
        location.reload();
    })}
}