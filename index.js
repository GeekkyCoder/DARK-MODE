// ✨ You got this! 

let toggle= document.getElementById('toggle');

toggle.addEventListener('click', toggleMode)


function toggleMode(){
    //header
         let header = document.getElementsByClassName('header');
        Array.from(header).forEach(function(element){
          element.style.backgroundColor ='black'  
          let h1= element.getElementsByTagName('h1')[0];
           h1.style.color='white';
     })
     
     // post container
     let post= document.querySelectorAll('.post');
     post.forEach(function(eachPost){
     eachPost.classList.add('bgDark-white');   
     })   
     
     // buttons
     let btn= document.getElementsByTagName('button');
    Array.from(btn).forEach((eachBtn)=>{
    eachBtn.classList.add('light')
})  
 
    
}



