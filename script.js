document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
)

document.querySelector("#quantity").addEventListener("change", updatePrice)
document.querySelector("#js").addEventListener("change", updatePrice)
document.querySelector("#layoutYes").addEventListener("change", updatePrice)
document.querySelector("#layoutNo").addEventListener("change", updatePrice)
document.querySelector("#deadline").addEventListener("change", function() {
    const deadline = document.querySelector("#deadline").value

    if(deadline == 1) {
        document.querySelector("label[for=deadline]").innerHTML = `Deadline ${deadline} week`
    } else {
        document.querySelector("label[for=deadline]").innerHTML = `Deadline ${deadline} weeks`
    }
    updatePrice()
})

function updatePrice() {
    const quantity = document.querySelector("#quantity").value
    const withJs = document.querySelector("#js").checked
    const withLayout = document.querySelector("#layoutYes").checked
    const deadline = document.querySelector("#deadline").value

    let price = quantity * 100

    let urgencyFee = 1 - deadline * 0.1
    price *= 1 + urgencyFee

    if(withJs) price *= 1.1
    if(withLayout) price += 500
    

    document.querySelector("#price").innerHTML = `$ ${price.toFixed(2)}`

    
}
