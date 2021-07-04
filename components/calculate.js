
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let hours = ['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'];
let allLocations = [];
let hoursTotal = [];
let container = document.getElementById('shops');
let table = document.createElement('table');
container.appendChild(table);

function Shops(name, minCustomers, maxCustomers, avgCookie){
  this.name=name;
  this.minCustomers=minCustomers;
  this.maxCustomers=maxCustomers;
  this.avgCookie=avgCookie;
  this.totalPerhour=[];
  this.dailyTotal=0;
  allLocations.push(this);

}

function tableHeader() {
  
  let headerRow = document.createElement('tr');
  let th = document.createElement('th');
  headerRow.appendChild(th);
  th.textContent=' Table';

  for (let i = 0; i < hours.length; i++){
    let th = document.createElement('th');
    headerRow.appendChild(th);
    th.textContent = hours[i] ;
    } 
    th = document.createElement('th');
    th.textContent = 'Daily Total' ;
    headerRow.appendChild(th);
    table.appendChild(headerRow);
  }

  

Shops.prototype.calcTotalCookies = function(){
  for (let i = 0; i < hours.length; i++) {
    let totalCookiePerHour = Math.floor(getRandomInt(this.minCustomers, this.maxCustomers) * this.avgCookie);
    this.dailyTotal += totalCookiePerHour;
    this.totalPerhour.push(totalCookiePerHour)      
  }

}

Shops.prototype.render = function(){
  const container = document.getElementById('shops');
  const table = document.createElement('table');
  container.appendChild(table);
  const tr = document.createElement('tr');
  table.appendChild(tr);

  let td = document.createElement('td');
  td.textContent = this.name;
  tr.appendChild(td);

  for (let i = 0; i < this.totalPerhour.length; i++){
    td = document.createElement('td');
    td.textContent = this.totalPerhour[i];
    tr.appendChild(td);

  }
  td = document.createElement('td');
  td.textContent = this.dailyTotal;
  tr.appendChild(td);
    } 

    function tableFooter() {
  const footer =document.getElementById('shops');
  const table= document.createElement('table');
  footer.appendChild(table);
      let tr = document.createElement('tr');
    table.appendChild(tr);
    let td = document.createElement('td');
    td.textContent = 'total';
    tr.appendChild(td);
  
    let totalOfTotals = 0;
    for(let i=0; i < hours.length; i++){
      td = document.createElement('td');
      let hourTotal = 0;
      for(let j=0; j < allLocations.length; j++){
        hourTotal += allLocations[j].totalPerhour[i];
      }
      td.textContent = hourTotal;
      totalOfTotals += hourTotal;
      tr.appendChild(td);
    }
  
    td = document.createElement('td');
    td.textContent = totalOfTotals;
    tr.appendChild(td);
      }

const seattle= new Shops('Seatle', 23, 65, 6.3);
const tokyo= new Shops('Tokyo', 3, 24, 1.2);
const dubai= new Shops('Dubai', 11, 38, 3.7);
const paris= new Shops('Paris', 20, 38, 2.3);
const lima= new Shops('Lima', 2, 16, 4.6);


// seattle.calcTotalCookies();
// seattle.render();

// tokyo.calcTotalCookies();
// tokyo.render();

// dubai.calcTotalCookies();
// dubai.render();

// paris.calcTotalCookies();
// paris.render();

// lima.calcTotalCookies();
// lima.render();



function renderTable(){
  tableHeader();

  for (let i = 0; i < allLocations.length; i++) {
    allLocations[i].calcTotalCookies();
    allLocations[i].render();
  }
  


}

renderTable();

  
const form = document.getElementById("cookieform");
form.addEventListener("submit", handleSubmit)

export default function handleSubmit(event){
    event.preventDefault();
    console.log(event.target);
  
    const location = event.target.location.value; 
    const min = event.target.minCustomers.value;
    const max = event.target.maxCustomers.value;
    const avg = event.target.avgPercustomer.value;
  
    const shops = new Shops(location,min,max,avg);
  
    shops.calcTotalCookies();
    shops.render();
    tableFooter();
  
  
    form.reset();
  
  }