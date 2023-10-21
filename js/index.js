function GetValue(custom){

    const people = document.querySelector(".people");

    const bill = document.querySelector(".bill");

    if (custom==1){

        const input_porcent = document.getElementById("custom")

        if(input_porcent.value<=999 && input_porcent.value>0)
        {
            localStorage.setItem("porcent", input_porcent.value);

        } else 
        {
            if (input_porcent.value<0) 
            {
                var text = "value negative are invalid :("

                AlertMsg(text);
                
            } else if (input_porcent.value>999) 
            {

                var text = "value above from three type are invalid :("

                AlertMsg(text);


            } else 
            {
                
                var text = "value invalid :("

                AlertMsg(text);

            }

            localStorage.setItem("porcent", 0);
            input_porcent.value=""
            //console.log(document.querySelector(".msg"));
        }
    }

    if ((people.value || bill.value)<0){

        var text = "value negative are invalid :("


        AlertMsg(text)


        if(people.value<0)
        {

            people.value=''

        } else 
        {

            bill.value=''

        }
    }
    
    calc(people.value, bill.value)

    return

}

document.querySelectorAll(".buttons").forEach(button => {
    button.addEventListener('click', ()=>{
        
        color(button.children[0]);
    
        if(button.classList.contains("li_custom") && button.childNodes[1].classList.contains("bu_custom"))
        {

           InputCustom(button);

        } 
        
        if (!button.classList.contains("li_custom")) {

            ButtonCustom();



            localStorage.setItem("porcent", button.children[0].id)

            GetValue()
            
        }
        //console.log(button.children[0].id)

        calc()
        
    })
});



function AlertMsg(text) {
    const div = document.createElement("div");

    div.setAttribute("class", "msg");

    div.appendChild(document.createTextNode(text));

    const fother = document.querySelector(".data-collect");

    fother.appendChild(div);


    setTimeout(() => {

        const div = document.querySelector(".msg");

        div.parentNode.removeChild(div);

    }, 3000);
}

function ButtonCustom() {
    const newbuttom = document.createElement("button");


    newbuttom.setAttribute("id", "custom");

    newbuttom.setAttribute("class", "bu_custom");

    newbuttom.appendChild(document.createTextNode("Custom"));


    const oldbutton = document.getElementById("custom");

    const fother = oldbutton.parentNode;

    fother.replaceChild(newbuttom, oldbutton);


    document.querySelector(".porcent").style.display="none";
}

function InputCustom(button) {
    const input = document.createElement("input");


    input.setAttribute("oninput", "GetValue(1)");

    input.setAttribute("id", "custom");

    input.setAttribute("class", "in_custom");

    input.setAttribute("type", "number");


    button.replaceChild(input, button.childNodes[1]);
    

    document.querySelector(".porcent").style.display = "block";
}

function color(button) {

    //console.log(button);
    const active = document.querySelector(".active")

    if (active)
    {
        active.classList.remove("active")
    }

    if (button)
    {

    button.classList.add("active")

    }

    return
}


function calc(people, bill){

    //console.log(typeof(localStorage.getItem("porcent")));

    let amount = (localStorage.getItem("porcent") * bill) / 100  / people

    let total =  bill / people + amount

    //console.log(typeof(total, amount));


    if (!isNaN(amount, total) && isFinite(amount, total))
    {
        document.getElementById("total").innerHTML=`${total.toFixed(2)}`;

        document.getElementById("amount").innerHTML=`${amount.toFixed(2)}`;

    }
}

document.getElementById("reset").addEventListener("click", ()=> {
    //console.log(1);

    var text = "Calculator reset :)"


    const inputs = document.querySelectorAll("input")

    for (let index = 0; index < inputs.length; index++) 
    {

        inputs[index].value=''
        
    }

    //console.log(inputs);
    localStorage.setItem("porcent", '')

    
    document.getElementById("total").innerHTML=`0.00`;

    document.getElementById("amount").innerHTML=`0.00`;

    //console.log(document.querySelector(".people").value, document.querySelector(".bill").value, localStorage.getItem("porcent"));
    calc()
    color()
    ButtonCustom()
    AlertMsg(text)
}) 


