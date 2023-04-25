// modifier le h1 à chaque fois que l'on clique que l'on tape au clavier 

let write = ""
$(document).on("keydown",(function(e){
  if(e.key.trim() === "Backspace"){
    // lorssqu'on appuie sur backspace il supprime la derniere lettre à chaque fois 
    write = write.slice(0,-1); // permet de supprimer le dernier élément de la chaîne
  }else{
    write +=e.key    
  }
  $("h1").text(write)
}))


// animer les éléments 
// essayer de voir plutard si les keyframes passe ici
$("button").on("click",function(e){
  $("h1").slideToggle().fadeOut().animate({opacity:0.5})
});