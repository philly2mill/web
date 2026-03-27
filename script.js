// Load data from localStorage
function getData() {
    return JSON.parse(localStorage.getItem("data")) || [];
  }
  
  // Save data
  function saveData(data) {
    localStorage.setItem("data", JSON.stringify(data));
  }
  
  // ADD DATA
  const form = document.getElementById("dataForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = document.getElementById("name").value;
      const data = getData();
  
      data.push(name);
      saveData(data);
  
      alert("Data added!");
      form.reset();
    });
  }
  
  // VIEW DATA
  const list = document.getElementById("dataList");
  if (list) {
    const data = getData();
    data.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
  }
  
  // EDIT DATA
  const editList = document.getElementById("editList");
  if (editList) {
    let data = getData();
  
    data.forEach((item, index) => {
      const li = document.createElement("li");
  
      const input = document.createElement("input");
      input.value = item;
  
      const button = document.createElement("button");
      button.textContent = "Save";
  
      button.onclick = () => {
        data[index] = input.value;
        saveData(data);
        alert("Updated!");
      };
  
      li.appendChild(input);
      li.appendChild(button);
      editList.appendChild(li);
    });
  }