document.getElementById("add-money-btn").addEventListener("click",function(e){
    e.preventDefault();
   console.log('bank all form')
    const bank = document.getElementById("bank").value
    console.log(bank)
    const  accountNumber = document.getElementById('account-number').value 
    console.log(accountNumber)
    const amount = parseInt(document.getElementById('add-amount').value)
    const pin = document.getElementById('add-pin').value
   const AvailableBalence = parseInt(document.getElementById('Available-balence').innerText)

 console.log(AvailableBalence)
    const totalNewAvailableBalance = amount + AvailableBalence
    document.getElementById('Available-balence').innerText = totalNewAvailableBalance
})