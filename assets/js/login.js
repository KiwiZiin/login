/* SHOW HIDDEN - PASSWORD */
const showHiddenPassword =()=> {
     const input = document.getElementById("login-pass")
     const iconEye = document.getElementById("login-eye")
    

     iconEye.addEventListener("click",()=>{
        //chance password to text
        if (input.type ==='password') {
            
            
            input.type = 'text';
        

            // troca oio in niglexi trade eye
            iconEye.classList.add("ri-eye-line");
            iconEye.classList.remove("ri-eye-off-line");



            
        } else {

            input.type = "password";
            iconEye.classList.add("ri-eye-off-line");

           
            
        }
     });

};

