const btns=document.querySelectorAll(".drum");
for(x of btns)
    x.addEventListener("click",function(){
        playSound(this.innerHTML);
        
    });

document.addEventListener("keydown",function(event){
    let key=event.key;
    const chk=Array('w','a','s','d','j','k','l');
    let x=chk.indexOf(key);
    if(x!==-1)
    {
        playSound(key);
    }
});

function playSound(key)
{
    let audio="";
    switch(key)
    {
        case "w": 
            audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "a": 
            audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "s": 
            audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        

        case "d": 
            audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
            
        case "j": 
            audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "k": 
            audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "l": 
            audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        
        default:
            alert(buttonInnerHTML);
            break;
    }
    buttonAnimation(key);

}
    function buttonAnimation(key){
        let activeButton=document.querySelector("."+key);
        activeButton.classList.add("pressed");
        setTimeout(()=>(activeButton.classList.remove("pressed")),100);
    }