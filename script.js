const inputs=document.querySelectorAll("input")


//Different regular expressions put in a patterns object
const patterns={
    telephone: /^\d{11}$/,  //telephone is input name ,name is an attribute
    username:/^[a-z\d]{5,12}$/i,
    password:/^[\w@-]{8,20}$/,
    email:/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
}


inputs.forEach((input)=>{
    input.addEventListener('keyup',(e)=>{
        //keyup listens for evry single character
        validate(e.target,patterns[e.target.attributes.name.value] )
    })
})


function validate(field,regex){
    console.log(field)
    
   if(regex.test(field.value)){
          
       field.className ="valid"
       field.nextElementSibling.innerText=""  

     

    }
    
    else{
    field.className="invalid"

}

}