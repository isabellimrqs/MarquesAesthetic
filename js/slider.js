let count = 1; 
document.getElementById("radio1").checked = true; 

setInterval( function() {
    nextImage();
}, 3000)

// Passa para a proxima imagem

function nextImage() {
    count++; 

    //Volta para a primeira imagem
    if(count > 3) {
        count = 1; 
    }

    document.getElementById("radio"+count).checked = true;

}