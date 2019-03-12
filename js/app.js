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

var businessHours = ['6am', '7am', '8am', '9am', '10am','11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//	Random Integer Inclusive formula:
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }

// Create objects for each store location

var firstAndPike = {
  minCustPerHr: 23,
  maxCustPerHr: 65,
  avgCookieSale: 6.3,
  estCookieSalesPerHrArray: [],
};

var seaTacAirport = {
	minCustPerHr: 3,
	maxCustPerHr: 24,
	avgCookieSale: 1.2,
	estCookieSalesPerHrArray: [],
};

var seattleCenter = {
	minCustPerHr: 11,
	maxCustPerHr: 38,
	avgCookieSale: 3.7,
	estCookieSalesPerHrArray: [],
};

// cookie per hour list for first store

firstAndPike.calculateSalesPerHour = function(){
    for (var i = 0; i < businessHours.length; i++){
        var randomCustomersPerHour = getRandomIntInclusive(this.minCustPerHr, this.maxCustPerHr);
				var randomSalesPerHour = randomCustomersPerHour * this.avgCookieSale;
				var roundedRandomSalesPerHour = Math.floor(randomSalesPerHour)
				this.estCookieSalesPerHrArray.push(roundedRandomSalesPerHour);
    }
console.log('Number of Cust last hour: ' + randomCustomersPerHour);
console.log('Sales last hour: ' + randomSalesPerHour);
console.log(this.estCookieSalesPerHrArray);

}; 
  

firstAndPike.renderEstSalesToPage = function() {
// put store sales on page
console.log ('First and Pike going on the page');

var firstAndPike_ul = document.getElementById('firstAndPike');

var title_li = document.createElement('li');

title_li.textContent = '1st and Pike';

firstAndPike_ul.appendChild(title_li);

    for (var j = 0; j < businessHours.length; j++) {
    var new_li = document.createElement('li');
    // var firstAndPike_salesPerHour = this.estCookieSalesPerHrArray[j];
    new_li.textContent = `${businessHours[j]}: ${this.estCookieSalesPerHrArray[j]}  cookies`;
		// new_li.textContent = "test";
		firstAndPike_ul.appendChild(new_li);
    }
};

firstAndPike.calculateSalesPerHour();
firstAndPike.renderEstSalesToPage();

// cookie per hour list for second store

seaTacAirport.calculateSalesPerHour = function(){
	for (var i = 0; i < businessHours.length; i++){
			var randomCustomersPerHour = getRandomIntInclusive(this.minCustPerHr, this.maxCustPerHr);
			var randomSalesPerHour = randomCustomersPerHour * this.avgCookieSale;
			var roundedRandomSalesPerHour = Math.floor(randomSalesPerHour)
			this.estCookieSalesPerHrArray.push(roundedRandomSalesPerHour);
	}
console.log('Number of Cust last hour: ' + randomCustomersPerHour);
console.log('Sales last hour: ' + randomSalesPerHour);
console.log(this.estCookieSalesPerHrArray);

}; 


seaTacAirport.renderEstSalesToPage = function() {
// put store sales on page
console.log ('SeaTac going on the page');
var seaTacAirport_ul = document.getElementById('firstAndPike');

var title_li = document.createElement('li');

title_li.textContent = 'SeaTac Airport';

seaTacAirport_ul.appendChild(title_li);

	for (var j = 0; j < businessHours.length; j++) {
	var new_li = document.createElement('li');
	new_li.textContent = `${businessHours[j]}: ${this.estCookieSalesPerHrArray[j]}  cookies`;
	// new_li.textContent = "test";
	seaTacAirport_ul.appendChild(new_li);
	}
};

seaTacAirport.calculateSalesPerHour();
seaTacAirport.renderEstSalesToPage();

// cookie per hour list for third store

seattleCenter.calculateSalesPerHour = function(){
	for (var i = 0; i < businessHours.length; i++){
			var randomCustomersPerHour = getRandomIntInclusive(this.minCustPerHr, this.maxCustPerHr);
			var randomSalesPerHour = randomCustomersPerHour * this.avgCookieSale;
			var roundedRandomSalesPerHour = Math.floor(randomSalesPerHour)
			this.estCookieSalesPerHrArray.push(roundedRandomSalesPerHour);
	}
console.log('Number of Cust last hour: ' + randomCustomersPerHour);
console.log('Sales last hour: ' + randomSalesPerHour);
console.log(this.estCookieSalesPerHrArray);

}; 


seattleCenter.renderEstSalesToPage = function() {
// put store sales on page
console.log ('Seattle Center going on the page');
var seattleCenter_ul = document.getElementById('seattleCenter');

var title_li = document.createElement('li');

title_li.textContent = 'Seattle Center';

seattleCenter_ul.appendChild(title_li);

	for (var j = 0; j < businessHours.length; j++) {
	var new_li = document.createElement('li');
	new_li.textContent = `${businessHours[j]}: ${this.estCookieSalesPerHrArray[j]}  cookies`;
	// new_li.textContent = "test";
	seattleCenter_ul.appendChild(new_li);
	}
};

seattleCenter.calculateSalesPerHour();
seattleCenter.renderEstSalesToPage();
