function generatePassword() {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '1234567890-=!@#$%^&*()_+{}|:>?<'
  
    for (let i = 0; i < 8; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char);
    }
    return pass
  }
  
  function CurrentgeneratedPAss() {
    let GenPAss = generatePassword()
    document.getElementById("Input").value = GenPAss;
     
   }
  
  
  function cpyPass() {
    let elementGenerated = document.getElementById("Input");
    elementGenerated.select();
    document.execCommand("copy");
    alert("Copy Password " + elementGenerated.value);
    
    // showAlert()
  
  }
  function reFresh() {
    if (confirm("Reload Page ?")) {
      location.reload();
    }
  }
  
  // function showAlert(){
  //   let aLert = $('<div class="alert alert-success mt-3"> Your Password is Succesfully Copied </div> ')
  //   $('body').prepend(aLert);
    
  //   aLert.css({
  //     position: 'absolute',
  //     top: '50%', // You can adjust the vertical position
  //     left: '50%',
  //     transform: 'translate(-50%, -50%)',
  //     zIndex: 8000 // Ensure it's above other elements
  //   });
  
  //   setTimeout(()=>{
  //     aLert.remove()
  //   },2000)
  // }