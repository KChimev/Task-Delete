let dataArr=[
    {name:"Alice",age:"26",position:"HR",experience:"3 years"},
    {name:"Antony",age:"31",position:"Front-End",experience:"6 years"},
    {name:"Bo",age:"22",position:"Intern",experience:"9 months"},
    {name:"Charles",age:"38",position:"Full-stack",experience:"13 years"},
    {name:"Christian",age:"24",position:"Back-End",experience:"4 years"},
    {name:"Danielle",age:"27",position:"Design",experience:"6 years"},
    {name:"Elle",age:"21",position:"Intern",experience:"1 year"},
    {name:"Fred",age:"29",position:"QA",experience:"7 years"},
]
let table=document.getElementById("table-body")
let searchBar=document.getElementById("search-bar")

function buildTable(data,tableBody){
tableBody.innerHTML = ""
data.forEach(element => {
    let row=""
    for(const key in element){
        let info=`<td>${element[key]}</td>`
        row+=info
    }  
    row=`<tr class="table-row">${row}</tr>`
    tableBody.innerHTML+=row
})
}
buildTable(dataArr,table)

function checkSearch(searchInput,data){
    let searchQuery = searchInput.value.toLowerCase()
    let resultTable=[]
    data.forEach(element => {
            let possibleMatch=element.name.toLowerCase().slice(0,searchQuery.length)
            possibleMatch.includes(searchQuery)  == true  ? resultTable.push(element) : ""
    })
    buildTable(resultTable,table)
}



//FUNCTIONS FOR SELECTING AND DELETING DATA FROM TABLE
function selectMultiple(){
    let tableRows=document.querySelectorAll(".table-row")
    document.getElementById("select-multiple").setAttribute("disabled", "")
    for(let i=0;i<tableRows.length;i++){
        let checkbox = document.createElement("input")
        checkbox.setAttribute("type", "checkbox")
        checkbox.setAttribute("onclick", "selectTask(event)")
        checkbox.setAttribute("id", i)
        document.getElementById("checkbox-container").appendChild(checkbox)
        // tableRows[i].innerHTML=`<input id="${i}" type="checkbox" onclick="selectTask(event)""></input>`+tableRows[i].innerHTML
    }
}
function selectTask(event){
document.getElementById("delete-multiple").style.display="inline"
if(event.target.checked===true)
{
    document.querySelectorAll(".table-row")[event.target.id].setAttribute("data","delete") 
}
else if(event.target.checked===false)
{
    document.querySelectorAll(".table-row")[event.target.id].removeAttribute("data","delete")
}
}
function deleteMultiple(){
    let deleteArr=document.querySelectorAll("[data=delete]")
    for(let i=0;i<deleteArr.length;i++){
        deleteArr[i].remove()
    }
    document.getElementById("checkbox-container").innerHTML=""
    document.getElementById("delete-multiple").style.display="none"
    document.getElementById("select-multiple").removeAttribute("disabled", "")
}