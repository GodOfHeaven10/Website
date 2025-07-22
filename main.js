var array = ['Button1', 'Button2', 'Button3', 'Button4', 'Button5']

const sitesBody = document.querySelector("body")

for (i = 0; i < array.length; i++) {
    const div = document.createElement("div")
    div.id = "Array"+i
    div.textContent = "Array"+i
    console.log('Appended: '+div)
}