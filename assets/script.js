
//  document.getElementById("LoginButton").addEventListener("click", function(event) {
//   event.preventDefault();

//   let mobileNumber = 12345678910;
//   let pinNumber = 1234;

//   const mobileNumberValue = document.getElementById("mobile-number").value;
//   const pinNumberValue = document.getElementById("pin-number").value;

//   const mobileNumberValueConverted = parseInt(mobileNumberValue);
//   const pinNumberValueConverted = parseInt(pinNumberValue);

//   if (mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber) {
//     window.location.href = "./home.html";
//   } else {
//     alert("no pages");
//   }
// });




document.getElementById("LoginButton").addEventListener("click",function(event){
event.preventDefault();
const mobileNumber =12345678910
const pinNumber = 1234

const mobileNumberValue = document.getElementById("mobile-number").value;
const mobileNumberValueConverted = parseInt(mobileNumberValue)
console.log(mobileNumberValueConverted);
const pinNumberValue = document.getElementById("pin-number").value;
const pinNumberValueConverted = parseInt(pinNumberValue)


if(mobileNumberValueConverted ===  mobileNumber && pinNumberValueConverted === pinNumber){
  window.location.href="./home.html"
}
else{
    alert('no pages')
}
})