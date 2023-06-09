//// ************* This is the first two buttons placed just below the header *****/////

function shownotewritter(){

    let element = document.querySelector(".note-writter");
    let text = element.getAttribute("id");
        if(text == "fake"){
            document.querySelector(".see-notes").setAttribute("id", "fake");
            document.querySelector(".note-writter").setAttribute("id", "show"); 
        }
        else if(text == "show"){
            document.querySelector(".note-writter").setAttribute("id", "fake"); 
        }
}

function shownotes() {
    let element = document.querySelector(".see-notes");
    let text = element.getAttribute("id");
        if(text == "fake"){
            document.querySelector(".note-writter").setAttribute("id", "fake"); 
            document.querySelector(".see-notes").setAttribute("id", "show"); 
        }
        else if(text == "show"){
            document.querySelector(".see-notes").setAttribute("id", "fake"); 
        }
}

///// -------- Here that first two button parts ends --------------- ///////


//// ***** Here i declared and defined the Object of arrays which getting stored i local storage *****///

let data;   //  Declaration without any value, means default value is null

data = localStorage.getItem('notes'); // Here I am trying to get whatever is present inside the LS

        if(data == null){
            data = {};              // Object declaration

            for(let i = 1; i<=30;i++){   // This is loop is making 30 key-value(array) pair in object
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

    if(note.trim() == ""){
        document.getElementById("note").placeholder = 'You have to Enter Something first';
    }
    else{

        for(let i = 0; i<=30; i++){ // Looping of the Data which is Object of arrays which only have 30 key-value
            if(day == i){
                data["day" + i].push(note); // if any key is equal to the value entered in the day input then pushing it in the array( value ) of that key ( of Data( Object ) )
            }
        }
    
        localStorage.setItem('notes', JSON.stringify(data)); // Converting the Data ( Object ) back into the stringify formet and pushing it back in to the local storage
        clearnote();
    }
   
}


//// From here, making a section where we can see the saved notes

function presentnote(){


        let checkdata = JSON.parse(localStorage.getItem('notes'));// Getting whatever present in LS

        let selectedday = document.getElementById("no").value;// getting the value of day input(Number)

        for(let i = 0; i<=30 ; i++){    // Looping 30 times so that it can be decided that which day note should be displayed

            if(selectedday == i){ // if any number ( input value ) is from 1 to 30 then it will go in

                for(let key in checkdata){  // looping over the Data ( Object Of Arrays)

                    if((key == ("day"+i))){ // Key the day like - day1 ,day2 etc.

                            let text = checkdata[key].join(",").trim(); // joining the array and making it a String

                            let heading = document.createElement("h2");
                            heading.innerText = "Day" + i;

                            let mynote = document.createElement("p");
                            
                            let noteview = document.createElement("div");

                            document.querySelector(".note-presenter").append(noteview); // a parent div

                            noteview.setAttribute("class", "note-view");    // Giving some styles to it

                            if(text == ""){ // if there is no note saved then it will go in

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
                }
            }
        }

}

// Here Is the function for the button present just near the Save button of notes to clear

function clearnote(){
    document.getElementById("note").value = "";
    document.getElementById("number").value = "";
}


// Here I have defined the functionality for the close which is present in the div where the saved notes get displayed so that by clicking on it we can remove the current displayed note from the presenter

document.querySelector(".close").addEventListener("dblclick",remover);

function remover(){
    event.target.nextElementSibling.remove(); // This will remove the complete div which is made by the presentnote function from the display
}

