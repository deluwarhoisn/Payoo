// document.getElementById("add-money-btn").addEventListener("click",function(e){
//     e.preventDefault();
//    console.log('bank all form')
//     const bank = document.getElementById("bank").value
//     console.log(bank)
//     const  accountNumber = document.getElementById('account-number').value 
//     console.log(accountNumber)
//     const amount = parseInt(document.getElementById('add-amount').value)
//     const pin = document.getElementById('add-pin').value
//    const AvailableBalence = parseInt(document.getElementById('Available-balence').innerText)

//  console.log(AvailableBalence)
//     const totalNewAvailableBalance = amount + AvailableBalence
//     document.getElementById('Available-balence').innerText = totalNewAvailableBalance
// })
const validPin =1234
document.getElementById('add-money-btn').addEventListener('click',function(e){
    e.preventDefault()
    const  bank = document.getElementById('bank').value 
    const accountNumber = document.getElementById('account-number').value
    const amount = parseInt(document.getElementById('add-amount').value )
    const pinNumber = parent(document.getElementById('add-pin').value)
    const AvailableBalence = parseInt(document.getElementById('Available-balence').innerText)
    console.log(amount,AvailableBalence)

    if(accountNumber.length <11){
        alert('please provide valid account number')
        return;
    }

    if(pin !== validPin){
        alert('please provid valid pin')
        return;
    }
    const totalNewAvailableBalance = amount + AvailableBalence

    document.getElementById('Available-balence').innerText=totalNewAvailableBalance
})