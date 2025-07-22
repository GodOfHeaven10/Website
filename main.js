var array = ['Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5'];

const sitesBody = document.querySelector("body");

for (i = 0; i < array.length; i++) {
    const div = document.createElement("div");
    sitesBody.appendChild(div);
    // div.id = "Array"+i;
    div.textContent = array[i];
    div.style.backgroundColor = "#D9D9D9";
    div.style.color = "#FFFFFF";
    div.style.padding = "25px"
    div.style.width = "100px"
    div.style.height = "50px"
    div.style.textAlign = "center"
    div.style.fontSize = "50px"
    div.style.fontWeight = "bold"
    div.style.fontFamily: "Quicksand", sans-serif;
    div.style.borderRadius = "25px"
    console.log('Appended: '+div);
}