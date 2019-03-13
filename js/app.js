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

// Global variables

var openHours = ['6am', '7am', '8am', '9am', '10am','11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//	Random Integer Inclusive formula:
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }

// Create objects for each store location


function ConstructStore(id, name, minCustPerHr, maxCustPerHr, avgCookieSale, estCookieSalesPerHrArray, totalSales){
	this.id = id;
	this.name = name;
	this.minCustPerHr = minCustPerHr;
	this.maxCustPerHr = maxCustPerHr;
	this.avgCookieSale = avgCookieSale;
	this.estCookieSalesPerHrArray = estCookieSalesPerHrArray;
	this.totalSales = totalSales;
}

var first_pike = new ConstructStore (firstAndPike, '1st & Pike', 23, 65, 6.3, [], 0 );
var sea_tac = new ConstructStore (seaTacAirport, 'SeaTac Airport', 3, 24, 1.2, [], 0 );
var sea_center = new ConstructStore (seattleCenter, 'Seattle Center', 11, 38, 3.7, [], 0 );
var cap_hill = new ConstructStore (capitolHill, 'Capitol Hill', 20, 38, 2.3, [], 0 );
var alki_store = new ConstructStore (alki, 'Alki', 3, 24, 1.2, [], 0 );

console.log(first_pike);
console.log(sea_tac);
console.log(sea_center);
console.log(cap_hill);
console.log(alki_store);

var salmonCookieStores = [firstAndPike, seaTacAirport];

// cookie per hour list for first store
// // function cookieSalesProjections(){
// // for (var i = 0; i < salmonCookieStores.length[i]; i++);

salmonCookieStores[0].calculateSalesPerHour = function(){
    for (var i = 0; i < openHours.length; i++){
        var randomCustomersPerHour = getRandomIntInclusive(this.minCustPerHr, this.maxCustPerHr);
				var randomSalesPerHour = randomCustomersPerHour * this.avgCookieSale;
				var roundedRandomSalesPerHour = Math.floor(randomSalesPerHour);
				this.estCookieSalesPerHrArray.push(roundedRandomSalesPerHour);
		}
		
		// first_pike.calculatesTotalSales = function(){



console.log('Number of Cust last hour: ' + randomCustomersPerHour);
console.log('Sales last hour: ' + randomSalesPerHour);
console.log(this.estCookieSalesPerHrArray);


// }

}; 
  

salmonCookieStores[0].renderEstSalesToPage = function() {
// put store sales on page
console.log ('First and Pike going on the page');

var firstAndPike_ul = document.getElementById('firstAndPike');

var title_li = document.createElement('li');

title_li.textContent = '1st and Pike';

firstAndPike_ul.appendChild(title_li);

    for (var j = 0; j < openHours.length; j++) {
    var new_li = document.createElement('li');
    // var firstAndPike_salesPerHour = this.estCookieSalesPerHrArray[j];
    new_li.textContent = `${openHours[j]}: ${this.estCookieSalesPerHrArray[j]}  cookies`;
		// new_li.textContent = "test";
		firstAndPike_ul.appendChild(new_li);
    }
};

salmonCookieStores[0].calculateSalesPerHour();
salmonCookieStores[0].renderEstSalesToPage();

