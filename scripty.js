

AOS.init();





function typeWriter(elemento) {
    let letra = 0
      const textoArray = elemento.innerHTML.split('');
      elemento.innerHTML = '';
      textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 50 * i);
      
         
        
      });
          
    }
  
    const titulo = document.querySelector('.frase1');
    typeWriter(titulo);
    
    
 $(".nav-link ").on("click", function(){
      $("#btnFechar").click();
    });

   
  
  
    
      
    
  

   
    
   
    

    


    
   
    