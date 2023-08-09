//// ************* This is the first two buttons placed just below the header *****/////

function shownotewritter(){

    let element = document.querySelector(".note-writter");
    let text = element.getAttribute("id");
        if(text == "hide"){
            document.querySelector(".see-notes").setAttribute("id", "hide");
            document.querySelector(".note-writter").setAttribute("id", "show"); 
        }
        else if(text == "show"){
            document.querySelector(".note-writter").setAttribute("id", "hide"); 
        }
}

function shownotes() {
    let element = document.querySelector(".see-notes");
    let text = element.getAttribute("id");
        if(text == "hide"){
            document.querySelector(".note-writter").setAttribute("id", "hide"); 
            document.querySelector(".see-notes").setAttribute("id", "show"); 
        }
        else if(text == "show"){
            document.querySelector(".see-notes").setAttribute("id", "hide"); 
        }
}

///// -------- Here that first two button parts ends --------------- ///////


//// ***** Here i declared and defined the Object of arrays which are getting stored in local storage *****///

let data;   //  Declaration without any value, means default value is null

data = localStorage.getItem('notes'); // Here I am trying to get whatever is present inside the LS

        if(data == null){
            data = {};              // Object declaration

            for(let i = 1; i<=30;i++){   // This is loop which will make 30 key-value(array) pair in object
                let key = "day" + i;
                data[key] = [];
            }
        }
        else{
            data = JSON.parse(data); // If something is available in the LS then converting it to JS formet
        }

function on_keypress(e){
    if(e.key == 'Enter'){
        savenote();
    }
}

function savenote(){
    let note = document.getElementById("note").value; // Getting value entered in the input tags 
    let day = document.getElementById("number").value;

    if((note.trim()).length == 0){
        document.getElementById("note").placeholder = 'You have to Enter Something first';
    }
    else{

        if(day > 30){
            alert('You can only Store in 30 days range');
            return
        }
    
        data["day" + day].push((note.trim()));
    
        localStorage.setItem('notes', JSON.stringify(data)); // Converting the Data ( Object ) back into the stringify formet and pushing it back in to the local storage
        clearnote();
    }
   
}


//// From here, making a section where we can see the saved notes

function presentnote(){
    
        let selectedday = document.getElementById("no").value;// getting the value of day input(Number)

                    let key = ("day"+selectedday)

                            let text = data[key].join(","); // joining the array and making it a String

                            let heading = document.createElement("h2");
                            heading.innerText = "Day" + selectedday;

                            let mynote = document.createElement("p");
                            
                            let noteview = document.createElement("div");

                            document.querySelector(".note-presenter").append(noteview); // a parent div

                            noteview.setAttribute("class", "note-view");    // Giving some styles to it

                            if(text.length == 0){ // if there is no note saved then it will go in

                                mynote.innerText = "There is no Note";
                                mynote.style.color = "red";
                                document.querySelector(".note-view").append(heading,mynote);

                            }

                            else{   // if there were anything present inside the array then it will go in

                                mynote.innerText = text;
                                mynote.style.color = "green";
                                document.querySelector(".note-view").append(heading,mynote);

                            }
                            
                    }

// Here Is the function for the button present just near the Save button of notes to clear

function clearnote(){
    document.getElementById("note").value = "";
    document.getElementById("number").value = "";
}

document.querySelector(".close").addEventListener("dblclick",remover);

function remover(e){
    e.target.nextElementSibling.remove(); // This will remove the complete div which is made by the presentnote function
}

