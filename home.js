// console.log("connect home file")

const validPin = 1234

//funtion to get input value
function getInputValueNumber (id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    const inputFieldValueNumber = parseInt(inputFieldValue)

    return inputFieldValueNumber
}

function getInputValue (id){ 
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    
    return inputFieldValue
}

//function to get innerText
function getInnerText(id) {
    const element = document.getElementById(id)
    const elementValue = element.innerText
    const elementValueNumber = parseInt(elementValue)

    return elementValueNumber
}

//function to set InnerText
function setInnerText(value){ 
    const availablebalanceElement = document.getElementById("available-balance")
    availablebalanceElement.innerText = value
}

//add money features
document.getElementById("add-money-btn").addEventListener("click",function(e){
    e.preventDefault()
    // console.log("add money btn clicked")

    // const bank = document.getElementById("bank").value
    const bank = getInputValue("bank")


    const accountNumber = document.getElementById("account-number").value 
    // const amount = parseInt(document.getElementById("add-amount").value)
    const amount = getInputValueNumber("add-amount")

    // const pin = parseInt(document.getElementById("add-pin").value)
    const pin = getInputValueNumber("add-pin")

    // console.log(bank, accountNumber, amount, pin)
    // const availableBalance = parseInt(document.getElementById("available-balance").innerText)
    const availableBalance = getInnerText("available-balance")


    // console.log(availableBalance)

    if(accountNumber.length <11){

        alert("please provide 11 digit valid account number")
        return;
    }

    if(pin != validPin){
        alert("please provide valid pin number")
        return;
    }

    const totalNewBalance = amount+availableBalance

    // document.getElementById("available-balance").innerText = totalNewBalance

    setInnerText(totalNewBalance)
})

//cash out feature

document.getElementById("withdraw-btn").addEventListener("click", function(e){ 
    e.preventDefault()
    // console.log("withdraw button clicked")
    // const amount = parseInt(document.getElementById("withdraw-ammount").value)
    const amount = getInputValueNumber("withdraw-ammount")

    // const availableBalance = parseInt(document.getElementById("available-balance").innerText)

    const availableBalance = getInnerText("available-balance")

    const totalNewBalance = availableBalance - amount
    // console.log(totalNewBalance)
    // document.getElementById("available-balance").innerText = totalNewBalance
    setInnerText(totalNewBalance)
})







//toggling features
document.getElementById("add-button").addEventListener("click",function(){ 
    // document.getElementById("add-money-parent").style.display = "block"
    // document.getElementById("cash-out-parent").style.display = "none"
    // document.getElementById("transfer-money-parent").style.display = "none"
    const forms = document.getElementsByClassName("form")
    for(const form of forms){ 
        form.style.display = "none"    
    }

    document.getElementById("add-money-parent").style.display = "block"

})


document.getElementById("cash-out-button").addEventListener("click",function(){ 
    // document.getElementById("cash-out-parent").style.display = "block"
    // document.getElementById("add-money-parent").style.display = "none"
    // document.getElementById("transfer-money-parent").style.display = "none"
    const forms = document.getElementsByClassName("form")
    for(const form of forms){ 
        form.style.display = "none"    
    }

    document.getElementById("cash-out-parent").style.display = "block"
    
})

document.getElementById("transfer-button").addEventListener("click",function() {
    // document.getElementById("add-money-parent").style.display = "none"
    // document.getElementById("cash-out-parent").style.display = "none"
    // document.getElementById("transfer-money-parent").style.display = "block"
    const forms = document.getElementsByClassName("form")
    for(const form of forms){ 
        form.style.display = "none"    
    }

    document.getElementById("transfer-money-parent").style.display = "block"
})