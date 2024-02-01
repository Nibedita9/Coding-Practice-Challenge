const addTaskBox = document.getElementById("add-task");
const listContainer = document.getElementById("list-container");

// this function purpose : add task when click button if box empty showing alert else data will be add

function addTask() {
    if (addTaskBox.value === "") {
        alert("Hey Write something ,You can complete your Task");
    }
    else {
        let li = document.createElement("li"); // it is creating one html element with the tag name li and this li will be store the li variable
        li.innerHTML = addTaskBox.value; // we have to add text in add task box , so here we use innerHTML for add text inside the li
        listContainer.appendChild(li); // li variable data will be displayed inside the list container 

        let span = document.createElement("span"); //span tag creating and store inside the span variable
        span.innerHTML = "\u00d7"; // inside the span variable cross icon will be store
        li.appendChild(span); // for span data displayed add appendchild(dataTAGname) inside the li variable
    
    }
    addTaskBox.value = ""; // after add task then te input box will be empty
    saveData(); //to save the new data in the browser 
    
}


//this add event listener click function purpose : whenEver we click listcontainer the list will be checked and when click the delete icon it will be empty 

listContainer.addEventListener("click" , function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked"); 
    saveData(); //to save the checked data in the browser

    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove(); // parent element mean li because in li variable we store the all value/data
        saveData();

    }
},false);



//here this function purpose : when we refresh the browser the tasks are dissapeared show we need to save the data 
//we use here localstorage .setItem("dataname",value we want to save data that the entire content holding listContainer for data InnerHTML)
function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML); 
}



//we need to displayed data whenEver we will be open the website again
//It will be give all the data stored in the browser the name of 'data' 
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}

showTask();