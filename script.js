let input = document.querySelector("#inp");
let ul = document.querySelector("#list");

input.addEventListener("keypress", function (e) {
  if (e.code == "Enter") {
    // console.log(1);
    let task = e.currentTarget.value;
    task=task.trim();
    if(task=="") return;
    let li = document.createElement("li");
    li.innerText = task;

    li.addEventListener("dblclick", function (e) { //kisi event pe click krke attached krne ke kam aata hai
      e.currentTarget.remove(); // delet only element not to handler
    });
    ul.append(li); //add
    e.currentTarget.value = "";
  }
});
