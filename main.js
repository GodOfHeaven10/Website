var array = ['Button1', 'Button2', 'Button3', 'Button4', 'Button5']

const arrayOfDivs = document.createElement("div")

const body = document.querySelector("body")

for (i = 0; i < array.length; i++) {
    document.createElement("div", "DivArray"+i)
    console.log(array[i])
}
