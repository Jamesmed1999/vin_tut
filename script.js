let q = 25;

for(let j = 0; j<q;j++)
{
    console.log("Sicky Tohno" + (j+1) )
    
}
alert("Welcome to the tutorial!")

let acc = document.getElementsByClassName("accordion");
let i;

for(i = 0; i<acc.length; i++)
{
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
}







