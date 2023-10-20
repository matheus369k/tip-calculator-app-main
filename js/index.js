function GetValue(custom){

    const people = document.querySelector(".people").value;

    const bill = document.querySelector(".bill").value;

    if (custom==1){

        const input_porcent = document.getElementById("custom").value;

        if(input_porcent<=999)
        {
            localStorage.setItem("porcent", input_porcent);

        } else 
        {
            alert("Numbers above from 999 are invalid!!")
        }
    }
    
    calc(people, bill)

    return

}

document.querySelectorAll(".buttons").forEach(button => {
    button.addEventListener('click', ()=>{
        
        color(button.children[0]);
    
        if(button.classList.contains("li_custom") && button.childNodes[1].classList.contains("bu_custom")){
           const input = document.createElement("input");


           input.setAttribute("oninput","GetValue(1)");

           input.setAttribute("id", "custom");

           input.setAttribute("class", "in_custom");

           input.setAttribute("type", "number");

           
           button.replaceChild(input, button.childNodes[1]);

           document.querySelector(".porcent").style.display="block"


        } 
        
        if (!button.classList.contains("li_custom")) {

            const newbuttom = document.createElement("button");


            newbuttom.setAttribute("id", "custom");

            newbuttom.setAttribute("class", "bu_custom");

            newbuttom.appendChild(document.createTextNode("Custom"));


            const oldbutton = document.getElementById("custom");

            const fother = oldbutton.parentNode;

            fother.replaceChild(newbuttom, oldbutton);



            localStorage.setItem("porcent", button.children[0].id)

            document.querySelector(".porcent").style.display="none";

            GetValue()
            
        }
        //console.log(button.children[0].id)

        calc()
        
    })
});

function color(button) {

    //console.log(button);
    const active = document.querySelector(".active")

    if (active)
    {
        active.classList.remove("active")
    }

    button.classList.add("active")

    return
}


function calc(people, bill){

    //console.log(typeof(Number(localStorage.getItem("porcent"))));


    let amount = ((localStorage.getItem("porcent")*bill)/100)/people

    let total = (bill/people) + amount;


    if (!isNaN(amount, total) && isFinite(amount, total))
    {
        document.getElementById("total").innerHTML=`${total.toFixed(2)}`;

        document.getElementById("amount").innerHTML=`${amount.toFixed(2)}`;

    }
}