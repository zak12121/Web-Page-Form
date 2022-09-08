function validateProfile(e){

    e.preventDefault();

    var valid=true;

    //display warning if firstName is not entered
    if(profile.Name.value === ""){
    document.querySelector('#NameError').textContent="*Please enter the cat's Name*";
        valid = false;
    }


    if(profile.Age.value === ""){
        document.querySelector('#AgeError').textContent="*Please enter the cat's Age*";
            valid = false;
    }

    if(profile.OName.value === ""){
      document.querySelector('#ONameError').textContent="*Please enter the owner's Name*";
          valid = false;
      }

      if(profile.Dphone.value === ""){
        document.querySelector('#DphoneError').textContent="*Please enter the phone number*";
            valid = false;
        }

       // if(profile.emails.value === ""){
          //document.querySelector('#emailError').textContent="*Please enter your email*";
             // valid = false;
          //}

          if(profile.EName.value === ""){
            document.querySelector('#ENameError').textContent="*Please enter your emergency contact name*";
                valid = false;
            }

            if(profile.Cphone.value === ""){
              document.querySelector('#CphoneError').textContent="*Please enter your contact phone number*";
                  valid = false;
              }

    if(valid){
        alert("Thank you");
    }

    return valid;
}


    document.profile.addEventListener("submit", validateProfile);




  document.querySelector('#Name').addEventListener('blur', function(){
        if(Name.value !== ""){
          NameError.textContent = "";
        }
      });

   document.querySelector('#Age').addEventListener('blur', function(){
        if(Age.value !== ""){
          AgeError.textContent = "";
        }
      });

      document.querySelector('#OName').addEventListener('blur', function(){
        if(OName.value !== ""){
          ONameError.textContent = "";
        }
      });

      document.querySelector('#Dphone').addEventListener('blur', function(){
        if(Dphone.value !== ""){
          DphoneError.textContent = "";
        }
          
      });

      //document.querySelector('#emails').addEventListener('blur', function(){
        //if(emails.value !== ""){
         // emailError.textContent = "";
       // }
          
     // });

      document.querySelector('#EName').addEventListener('blur', function(){
        if(EName.value !== ""){
          ENameError.textContent = "";
        }
          
      });

      document.querySelector('#Cphone').addEventListener('blur', function(){
        if(Cphone.value !== ""){
          CphoneError.textContent = "";
        }
          
      });