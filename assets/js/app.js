(() =>{
const incrementButton = document.querySelectorAll('.increment')
const decrementButton = document.querySelectorAll('.decrement')
const buyItemButton = document.querySelectorAll('.addCart')

//incremnt
incrementButton.forEach((value, index, array) => {
    buttonClicked = array[index]

    buttonClicked.addEventListener('click', event => {

        //button increment clicado
        let buttonClicked = event.target

        //input a ser incrementdado
        let inputs = buttonClicked.parentElement.children[1]
        //incrmentando o input
        inputs.value++

        //dataset
        dataSetValues = buttonClicked.parentNode
        let id = dataSetValues.dataset.id
        let name = dataSetValues.dataset.name
        let price = dataSetValues.dataset.price


        //button de comprar
        let addCart = buttonClicked.parentElement.children[3]

        let total = parseFloat(price) * parseInt(inputs.value)

        let totalReal = total.toLocaleString('pt-br', { minimumFractionDigits: 2 })

        addCart.innerHTML = `Comprar <br>Total R$ ${totalReal}`

        addCart.disabled = false;

    })
})

//decrement button
decrementButton.forEach((value, index, array) => {
    let buttonClicked = array[index]

    buttonClicked.addEventListener('click', event => {

        //button increment clicado
        let clickedButton = event.target

        //dataset
        let dataSetValues = clickedButton.parentNode

        let price = dataSetValues.dataset.price

        //input a ser incrementdado
        let inputs = clickedButton.parentElement.children[1]

        //incrmentando o input
        inputs.value--
        inputs.value = (inputs.value > 0) ? inputs.value-- : 0



        //button de comprar
        let addCart = clickedButton.parentElement.children[3]

        if(inputs.value == 0){
          addCart.disabled = true;
        }

        let total = parseFloat(price) * parseInt(inputs.value)

        let totalReal = total.toLocaleString('pt-br', { minimumFractionDigits: 2 })

        addCart.innerHTML = inputs.value > 0 ? `Comprar <br>Total R$ ${totalReal}` : 'Comprar'
    })
})

//evento de cadastro  de item
buyItemButton.forEach((value, index, array) => {
    buyItemButtonAdd = array[index]
    // console.log(buyItemButtonAdd)
    //evento click
    buyItemButtonAdd.addEventListener('click', event => {
        //button increment clicado
        let clickedButton = event.target

        console.log(clickedButton)

         dataSetValues = clickedButton.parentNode
         id = dataSetValues.dataset.id
         name = dataSetValues.dataset.name
         price = parseFloat(dataSetValues.dataset.price)

        //input do button clicado
        let inputs = clickedButton.parentElement.children[1]

        // console.log(amount.toFixed(2))
        // console.log(price)
        console.log(parseInt(inputs.value))

        if (clickedButton.textContent !== 'Comprar') {
             amount = price * inputs.value
             orderItems = [{
                id: id,
                item: name,
                unitPrice: price,
                quantity: inputs.value,
                amount: amount.toFixed(2)
            }]
        }else{
            orderItems=[]

        }
        console.log(orderItems)

    })
})

})()
