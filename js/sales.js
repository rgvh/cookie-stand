'use strict';
/*
There are some cookie stands that sell cookies throughout the day
-A day is from 6:00 am to 8:00 pm (14 hours)
-We know the maximum cookies per hour for each store
-We know the minimum cookies per hour for each store
-We know the avg number of cookies purchased per customer at each store
In order to have a better estimate of how many cookies to make, we need to use
a random number generator to calculate and estimate for cookies per hour for each
cookie stand.

1st and Pike
  minimum customers per hour
  maximum customers per hour
  avg cookies per customer

  Function to generate cookies per hour based on a random number of customers
  based on min and max from each store

*/
// debugger;
// Global variables defined here

var openHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am','11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

var salmonCookieStores = [];
// var salmonCookieStores = [firstAndPike, seaTacAirport, seattleCenter, capitolHill, alki];

//	Random Integer Inclusive formula:
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

// Create CONSTRUCTOR FUNCTION for each store location

function CookieStore(storeName,openHours, minCustPerHr, maxCustPerHr, avgCookieSale, estCustomersPerHrArray, estCookieSalesPerHrArray){
  this.storeName = storeName;
  this.openHours = openHours;
  this.minCustPerHr = minCustPerHr;
  this.maxCustPerHr = maxCustPerHr;
  this.avgCookieSale = avgCookieSale;
  this.estCustomersPerHrArray = [];
  this.estCookieSalesPerHrArray = [];
}




// Define METHODS for constructors

// Method to for finding estimated number of customers per hour

CookieStore.prototype.estCustomers = function(){
  var randomCustomersPerHour = getRandomIntInclusive(this.minCustPerHr, this.maxCustPerHr);
  console.log('random number is: ' + randomCustomersPerHour);
  return randomCustomersPerHour;
};

// Method for finding  modeled sales per hour

CookieStore.prototype.estSalesPerHr = function(index){
  var estSalesPerHr = Math.floor(this.avgCookieSale * this.estCustomersPerHrArray[index]);
  return estSalesPerHr;
};

// Method for determining modeled total sales

CookieStore.prototype.totalEstCookieSales = function(){
  var totalSales = 0;
  for(var i = 0; i < this.estSalesPerHr.length; i++){
    totalSales = totalSales + this.estSalesPerHr[i];
  }
  console.log(this.totalSales);
  return totalSales;
};

// Method for pushing data into calculated arrays

CookieStore.prototype.produceFigures = function(){
  console.log(`${this.storeName} Results`);

  for(var j = 0; j < openHours.length; j++){
    this.estCustomersPerHrArray.push(this.estCustomers());
    this.estCookieSalesPerHrArray.push(this.estSalesPerHr(j));
// debugger;
    console.log(`${this.openHours[j]}: ${this.estCookieSalesPerHrArray[j]} cookies`);
  }

  console.log(`Total Cookies: ${2}`);



};

// console.log('Number of Cust last hour: ' + randomCustomersPerHour);
// console.log('Sales last hour: ' + estSalesPerHr);
// console.log(this.estCookieSalesPerHrArray);




// TABLE

var tableEl = document.getElementById('storeProjections');

function buildHeader() {
  var header_tr = document.createElement('tr');
  var blankSpace = document.createElement('td');
  header_tr.appendChild(blankSpace);

  for(var l = 0; l < openHours.length; l++) {
    var nextHeader_td = document.createElement('td');
    nextHeader_td.textContent = openHours[l];
    header_tr.appendChild(nextHeader_td);
  }
  var total_td = document.createElement('td');
  total_td.textContent = 'Totals by Location';
  header_tr.appendChild(total_td);
  tableEl.appendChild(header_tr);

}

// This will add data ('td') to the rows ('tr')

CookieStore.prototype.addData = function(next_tr, storeName, totalSales) {
  var title_td = document.createElement( 'td');
  title_td.textContent = storeName;
  next_tr.appendChild(title_td);
// debugger;
  for(var q = 0; q < this.openHours.length; q++){
    var next_td = document.createElement('td');
    next_td.textContent = this.estCookieSalesPerHrArray[q];
    next_tr.appendChild(next_td);
  }

  var sumCookies = document.createElement('td')
  sumCookies.textContent = parseInt(totalSales);
  next_tr.appendChild(sumCookies);

};


CookieStore.prototype.addRow = function() {
  var storeName = this.storeName;
  var sumCookies = this.totalEstCookieSales();
  var next_tr = document.createElement('tr');
  this.addData(next_tr, storeName, sumCookies);
  tableEl.appendChild(next_tr);
};


buildHeader();

// for(var r = 0; r < 14; r++){
// salmonCookieStores[r];
// }

var hourlyTotalArray = [];

function totalPerHour() {
  for(var r = 0; r < openHours.length; r++) {
    var sum = 0;
    for (var i in salmonCookieStores) {
      sum = sum + salmonCookieStores[i].estCookieSalesPerHrArray[r];
    }

    hourlyTotalArray.push(sum);
  }
}

//  This function renders the table footer
// debugger;
function buildFooter() {
  var footer_tr = document.createElement('tr');
  var footer_td = document.createElement('td');
  footer_td.textContent = 'Total';
  footer_tr.appendChild(footer_td);
  for(var t = 0; t < openHours.length; t++){
    var nextFooter_td =document.createElement('td');
    nextFooter_td.textContent = hourlyTotalArray[t];
    footer_tr.appendChild(nextFooter_td);
  }
  debugger;
  var dailyTotal_td = document.createElement('td');
  dailyTotal_td.textContent = totalSales;
  footer_tr.appendChild(dailyTotal_td);
  tableEl.appendChild(footer_tr);
}

// Initialize Page

var firstAndPike = new CookieStore ('1st & Pike',openHours, 23, 65, 6.3, [], [] );
salmonCookieStores.push(firstAndPike);

var seaTacAirport = new CookieStore ('SeaTac Airport',openHours, 3, 24, 1.2, [], [] );
salmonCookieStores.push(seaTacAirport);

var seattleCenter = new CookieStore ('Seattle Center', openHours, 11, 38, 3.7, [], [] );
salmonCookieStores.push(seattleCenter);

var capitolHill = new CookieStore ('Capitol Hill', openHours, 20, 38, 2.3, [], [] );
salmonCookieStores.push(capitolHill);

var alki = new CookieStore ('Alki',openHours, 3, 24, 1.2, [], [] );
salmonCookieStores.push(alki);

// Calculate daily total for all stores
// debugger;
for(var i in salmonCookieStores){
  salmonCookieStores[i].produceFigures();
}

//Build Table

totalPerHour();
for(var i in salmonCookieStores){
  salmonCookieStores[i].totalEstCookieSales();
}

buildHeader();

for(var i in salmonCookieStores){
  salmonCookieStores[i].addRow();
}
buildFooter();
console.log(openHours);
console.log(firstAndPike);
console.log(seaTacAirport);
console.log(seattleCenter);
console.log(capitolHill);
console.log(alki);
console.log('Yummy Salmon Cookies');

