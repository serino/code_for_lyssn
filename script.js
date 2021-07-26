
//WHY DOES IT MATTER THAT MY FUNCTION ACCEPTS JSON? TALK ABOUT PARSE AND STRINGIFY? 
//DO THESE OBJECTS REALLY NEED TO CONTAIN STRINGS? WHY OR WHY NOT?
//TALK ABOUT LOOPING THROUGH OBJECTS.

let arr = [{"fname":"esme", "lname":"sanchez", "id":1892038, "isTherapist":true},

{"fname":"rick", "lname":"jeps", "id":1894024, "isTherapist":false},

{"fname":"angie", "lname":"lange", "id":1982403, "isTherapist":false},

{"fname":"renat", "lname":"gros", "id":1894039, "isTherapist":true},

{"fname":"bettino", "lname":"yang", "id":3789204, "isTherapist":true}]

render(arr)

function render(arr) {
  let mainDiv = document.getElementById("mainDiv")

  //IS THIS THE OPTIMUM TYPE OF LOOP?
  for (let i = 0; i < arr.length; i++) {
    let pTag = document.createElement("p")
    mainDiv.appendChild(pTag)
    
    //CAN WE COMBINE THESE EVENT LISTENERS?
    pTag.addEventListener("mouseover", (event) => 
      event.target.style.color = "red"
    )

    pTag.addEventListener("mouseleave", (event) =>
      event.target.style.color = "black"
    )
    
    //CAN WE SIMPLIFY THIS?
    pTag.innerHTML = `${arr[i].lname.charAt(0).toUpperCase()}${arr[i].lname.slice(1)}, ${arr[i].fname.charAt(0).toUpperCase()}${arr[i].fname.slice(1)}`
  }
}

