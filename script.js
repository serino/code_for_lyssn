let arr = [{"fname":"esme", "lname":"sanchez", "id":1892038, "isTherapist":true},

{"fname":"rick", "lname":"jeps", "id":1894024, "isTherapist":false},

{"fname":"angie", "lname":"lange", "id":1982403, "isTherapist":false},

{"fname":"renat", "lname":"gros", "id":1894039, "isTherapist":true},

{"fname":"bettino", "lname":"yang", "id":3789204, "isTherapist":true}]

render(arr)

function render(arr) {
  let mainDiv = document.getElementById("mainDiv")

  for (let i = 0; i < arr.length; i++) {
    let pTag = document.createElement("p")
    mainDiv.appendChild(pTag)
    
    pTag.addEventListener("mouseover", (event) => 
      event.target.style.backgroundColor = "lightgrey"
    )

    pTag.addEventListener("mouseleave", (event) =>
      event.target.style.backgroundColor = "white"
    )
    
    pTag.innerHTML = `${arr[i].lname.charAt(0).toUpperCase()}${arr[i].lname.slice(1)}, ${arr[i].fname.charAt(0).toUpperCase()}${arr[i].fname.slice(1)}`
  }
}

