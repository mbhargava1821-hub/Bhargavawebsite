let leads = JSON.parse(localStorage.getItem("leads")) || [];

document.getElementById("total").innerText = leads.length;

let list = document.getElementById("leadList");

leads.reverse().forEach(l => {
let div = document.createElement("div");
div.className = "card";
div.innerHTML = `
<span class="badge">${l.type}</span><br><br>
<b>Time:</b> ${l.time}<br>
<pre>${JSON.stringify(l, null, 2)}</pre>
`;
list.appendChild(div);
});

function clearData(){
if(confirm("Delete all leads?")){
localStorage.removeItem("leads");
location.reload();
}
}