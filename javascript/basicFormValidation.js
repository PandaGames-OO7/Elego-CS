function validateForm(){

const name = document.querySelector("#username").value;
const email =  document.querySelector("#Email").value;
const number =  document.querySelector("#number").value;
const password =  document.querySelector("#password").value;
const submit = document.querySelector("#submit").value;
//condition checking
// username validation
if(name === "" || name === null){
    alert("Name can't be blank");
       return false;
    }
else if(name.length <=4 || name.length > 20)
{
    alert("name should have approprite lenght")
}
// basic email validation
if(email==="" || email === null){
    alert("email cannot be left blank");
}

if(number ===""|| number=== null)
{
    alert("mobile number can't be left blank")
}
else

}