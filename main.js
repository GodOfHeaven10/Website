var array = ['Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5'];

const sitesBody = document.querySelector("body");

for (i = 0; i < array.length; i++) {
    const div = document.createElement("div");
    sitesBody.appendChild(div);
    // div.id = "Array"+i;
    div.textContent = array[i];
    div.style.backgroundColor = "white";
    div.style.color = "#959595ff";
    div.style.padding = "25px"
    div.style.width = "100px"
    div.style.height = "50px"
    div.style.textAlign = "center"
    console.log('Appended: '+div);
}