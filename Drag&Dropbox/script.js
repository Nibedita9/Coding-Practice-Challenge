//create 3 variable 
let lists = document.getElementsByClassName("list");
let rightBox =document.getElementById("right");
let leftBox =document.getElementById("left");


//we use for loop for list which will be action that drag and drop 
for(let list of lists){
    list.addEventListener("dragstart" , function(e){
        let selected=e.target; // what you will 
        rightBox.addEventListener("dragover", function(e){
            e.preventDefault(); //the default action that belongs to the event will not occur
        });
        rightBox.addEventListener('drop',function(e){
            rightBox.appendChild(selected);
            list.style.background="yellow";
            list.style.color="black";
            selected=null;
        });

        leftBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });
        leftBox.addEventListener('drop',function(e){
            leftBox.appendChild(selected);
            list.style.background="";
            list.style.color="";
            selected=null;
        });
    })
}