// If possible, use const. If not, use let.
const inputBtn = document.getElementById("input-btn");
const tabBtn = document.getElementById("tab-btn");
const deleteBtn = document.getElementById("delete-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

let myLeads = [];
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage);

if(leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

function render(leads) {
  let listItems = "";

  for (let i = 0; i < leads.length; i++) {
    listItems += `
      <li>
        <a href=' ${leads[i]} ' target='_blank'>
          ${leads[i]}
        </a>
      </li>
    `;
  }
  ulEl.innerHTML = listItems;
}


inputBtn.addEventListener("click", saveLead);

function saveLead() {
  myLeads.unshift(inputEl.value);
  inputEl.value = "";

  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);

  console.log(localStorage.getItem("myLeads"));
}


tabBtn.addEventListener("click", saveTab);

function saveTab() {
  // Get url of the current tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify( myLeads ));
    render(myLeads);
  });
}


deleteBtn.addEventListener("dblclick", deleteAll);

function deleteAll() {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
}
