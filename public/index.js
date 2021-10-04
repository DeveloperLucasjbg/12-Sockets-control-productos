const d = document;
const socket = io();

const ul = d.getElementById("ul");
// datos form
const tittle = d.getElementById('tittle').value
const price = d.getElementById('price').value
const thumbail = d.getElementById('thumbail').value

socket.on("PRODUCTOS", (data) => {
  toRender(data)
});

let toRender = (data) => {
  let pantilla = data.map((e) => `
<li class='grid'>  
<em> ${e.tittle}</em>
<p>${e.price}</p>
<img class='imagen' src='${e.thumbail}' alt="">
</li>`
    ).join(" ");
    ul.innerHTML = pantilla;  
};  

const productSend = () =>{
  // let newProduct = {tittle,price,thumbail}
  socket.emit("productIn",'probando msj')
}

