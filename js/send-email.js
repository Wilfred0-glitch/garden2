function emailSend(){

  var username = document.getElementById("name").value
  var phone = document.getElementById("phone").value
  var selection = document.getElementById("selection").value


  var messageBody = "<br> name :"  + username  +
  "<br><br> phone number :"  +  phone + "<br><br> course  :"  + selection


  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "codegardeninstitute@gmail.com",
    Password : "A0C49D45A76476FEF329E3B516B0B460DA62",
   
    To : 'codegardeninstitute@gmail.com, wilfred@codegarden.pro ',
    From : "codegardeninstitute@gmail.com",
    Subject : "From Code garden institute",
    Body : messageBody
  }).then(

    message => {
      if (message != 'ok') {
        
        Swal.fire(
          'Message sent!',
          'Expect feedback within next 24hrs!',
          'Cheers'
        )
        
      }
    
      else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        
        })
      }
    }
  )
}
   
//    
//   }
// );
// }