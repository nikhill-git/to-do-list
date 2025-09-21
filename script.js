const inputBox = document.querySelector(".input-box");
const listContainer = document.querySelector(".task-container");
const Btn = document.querySelector(".addBtn");


Btn.addEventListener("click", () =>{
    if(inputBox.value === '') {
        alert("Enter your task");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);//Adding li in the task container 

        //Adding the icon
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);//Adding icon in the li

    }
    inputBox.value = "";
    saveData();
});

listContainer.addEventListener("click", function(evt){
    if(evt.target.tagName === "LI"){// browser returns a capital letters. so, we use capital Letter or use a inbulit fun toLowerCase() 
        evt.target.classList.toggle("checked");
        saveData();
    }
    else if(evt.target.tagName === "SPAN"){
        evt.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);//storeing the data in the local storage
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");//The final data after adding and modifying all the tasks
}

showData();//Finally calling the saved data after all the events occurre

