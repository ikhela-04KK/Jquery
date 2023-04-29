// modifier le h1 à chaque fois que l'on clique que l'on tape au clavier 
// comment savoir que l'utilisateur est sur une partie de mon site 

// essayer de faire ajax avec jquery 

let write = ""
let user ="ikhela"
$(document).on("keydown", function(e){
    if(e.key.trim() === "Backspace"){
      // lorssqu'on appuie sur backspace il supprime la derniere lettre à chaque fois 
      write = write.slice(0,-1); // permet de supprimer le dernier élément de la chaîne
    }
    else{
      write +=e.key;    
    }
    $("h1").text(write)

  
    // je peux ajouter un callback a un élément js cette fonction de rappelle va permettre de modifier l'élément jsquery pour mieux controler la sortie des éléments avant et après l'application de l'élément 
    if (write.includes(user)){
      $("h1").slideUp(2000,function(){
        $("h1").text(`Bienvenue ${user}`)
        write ="";
      })
      .slideDown(2000)
    }
});



// animer les éléments 
// essayer de voir plutard si les keyframes passe ici
$("button").on("click",function(){
  $("h1").toggle();
});



