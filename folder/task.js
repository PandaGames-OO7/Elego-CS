//     document.querySelector("#button").addEventListener("click", oddEven);
//     function oddEven(){
//     let i = 0;
//     let sum = 0;
//     let len = (document.querySelectorAll(".child")).length;
//     for(let count = 1; count <= len; count++)
//     {
    
//         let j = document.querySelectorAll(".child")[i].innerHTML;
//         sum += Number(j);
//         i++;
//     }
//     if(sum % 2 === 0){
//         document.querySelector(".main").style.backgroundColor = "red";
        
//     }

//     else{
//         document.querySelector(".main").style.backgroundColor = "green";

//     }
//    console.log(sum);


//     }

  const form = document.querySelector("#form");
  const userName = document.querySelector("#username");
  const email = document.querySelector("#email");
  const phoneNumber = document.querySelector("#number");
  const password = document.querySelector("#password");
  const confirmPassword = document.querySelector("#confirm_password");
  // const submit = document.querySelector("#submit");
  
  //event-listener
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    validateForm();
    });


    // const isEmail = (emailVal) =>{

    // }

    const validateForm = () => {
        const name =  userName.value.trim();
        const emailVal = email.value.trim();
        const mob =  phoneNumber.value.trim();
        const passKey = password.value.trim();
        const repassKey = confirmPassword.value.trim();

        // username validation
        if(name === "")
        {
          setErrorMsg(userName, "username cannot be blank");
          
        }
        else if(name.length <= 3)
        {
          setErrorMsg(userName, "username can't be less than 3 characters");
        }
        else if(name.length >= 20)
        {
          setErrorMsg(userName, "username can't be more than 20 characters");
        }
        else
        {
           setSuccessMsg(userName, "SUCCESS");
        }

        //email validation
        const checkEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(emailVal === "")
        {
          setErrorMsg(email, "email can't be blank");
        }  
        // else if(!isEmail(emailVal))
        else if (emailVal.match(checkEmail) == null) 
        {
         
           setErrorMsg(email, "entered email is not valid");
        }
        else
        {
          setSuccessMsg(email, "SUCCESS"); 
        }

        //phone number validation
        const checkPhone = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
        if(mob === "")
        {
          setErrorMsg(phoneNumber, "phone-number can't be blank");
        }  
        // else if(!isEmail(emailVal))
        else if (mob.match(checkPhone) == null) 
        {
         
           setErrorMsg(phoneNumber, "phone number is not in valid format");
        }
        else
        {
          setSuccessMsg(phoneNumber, "SUCCESS"); 
        }
      
        //Password validation
        
        const checkPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if(passKey === "")
        {
          setErrorMsg(password, "password can't be blank");
        }  
        // else if(!isEmail(emailVal))
        else if (passKey.match(checkPassword) == null) 
        {
         
           setErrorMsg(password, "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character");
        }
        else
        {
          setSuccessMsg(password, ""); 
        }

        // password match code
        if(repassKey === "")
        {
          setErrorMsg(confirmPassword, "password not Mached");
        }
        else if(repassKey.match(passKey) == null)
        {
          
          setErrorMsg(confirmPassword, "Ops! password not Mached");
        }  
        else
        {
          setSuccessMsg(confirmPassword, "SUCCESS, Passcode matched...");
       
        }
      
    }
    
    function setErrorMsg(input, errormsgs)
    {
      const formControl = input.parentElement;
      const small = formControl.querySelector("small");
      formControl.className = "form_control error";
      small.innerText = errormsgs;
    }

    function setSuccessMsg(input, successmsg)
    {
      const formControl = input.parentElement;
      const small = formControl.querySelector("small");
      formControl.className = "form_control success";
      small.innerText = successmsg;
    }
    
