# Form validation using Regex
For anyone looking to understand and practise Regular Expressions.This
is a form validation I did with it. AS soon as a field is valid,the background 
changes to green and the Instruction under that particular field disappears.
The technicality I used to achieve this is the HTML DOM. I picked out the 
`nextElementSibling` property of theInput element ,with this I was able to achieve the
 disappearing feat. you can access this in the html properties section under devTools in
 your Browser

```
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
```

if our RegEx test is true,it takes the valid className which I set to green background in css
and the Instruction under which is the innerText property of the paragraph element disappears
since it is a sibling of the Input field.