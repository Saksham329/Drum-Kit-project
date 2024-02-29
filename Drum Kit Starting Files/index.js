

for (var i = 0; i < document.querySelectorAll(".drum").length ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonhtml = this.innerHTML;
        switch (buttonhtml) {
            case "w": audio1 = new Audio("sounds/crash.mp3")
            audio1.play();
                
                break;
            case "a": audio2 = new Audio("sounds/kick-bass.mp3")
                audio2.play();
                    
                break;
            case "s": audio3 = new Audio("sounds/snare.mp3")
                    audio3.play();
                        
                break;
            case "d": audio4 = new Audio("sounds/tom-1.mp3")
                audio4.play();
                    
                break;
            
            case "j": audio5 = new Audio("sounds/tom-2.mp3")
                audio5.play();
        
                 break;
            case "k": audio6 = new Audio("sounds/tom-3.mp3")
                 audio6.play();

                 break;
            case "l": audio7 = new Audio("sounds/tom-4.mp3")
                 audio7.play();

                 break;
                 default:
        }

    })
}