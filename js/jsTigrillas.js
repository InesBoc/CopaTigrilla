const mostrarDecima= document.getElementById("decima");
const openD= document.getElementById("openD");
const closeD= document.getElementById("closeD");
openD.addEventListener("click", () => {
    mostrarEdades.showModal();
});     
closeD.addEventListener("click", () => {
    mostrarEdades.close();
});

const
mostrarNovena= document.getElementById("novena");
const openN= document.getElementById("openN");      
const closeN= document.getElementById("closeN");
openN.addEventListener("click", () => {
    mostrarNovena.showModal();
}); 
closeN.addEventListener("click", () => {
    mostrarNovena.close();
});

const mostrarOctava= document.getElementById("octava");
const openO= document.getElementById("openO");          
const closeO= document.getElementById("closeO");
openO.addEventListener("click", () => {
    mostrarOctava.showModal();
});
closeO.addEventListener("click", () => {
    mostrarOctava.close();
});