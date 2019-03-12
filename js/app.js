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

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }

var firstAndPike = {
    minCustPerHr: 23,
    maxCustPerHr: 65,
    avgCookieSale: 6.3,
    estCookieSalesPerHrArray: [],
};

firstAndPike.calculateSalesPerHour = function(){
    for (var i = 0; i < 14; i++){
        var randomCustomersPerHour = getRandomIntInclusive(this.minCustPerHr, this.maxCustPerHr);
        var randomSalesPerHour = randomCustomersPerHour * this.avgCookieSale;
        this.estCookieSalesPerHrArray.push(randomSalesPerHour);
    }
console.log('Number of Cust last hour: ' + randomCustomersPerHour);
console.log('Sales last hour: ' + randomSalesPerHour);
console.log(this.estCookieSalesPerHrArray);

}; 
  

firstAndPike.renderEstSalesToPage = function() {
// put store sales on page
console.log ('going on the page');

var firstAndPike_ul = document.getElementById('firstAndPike');

var title_li = document.createElement('li');

title_li.textContent = '1st and Pike';

firstAndPike_ul.appendChild(title_li);

    for (var i = 0; i < 14; i++) {
    var new_li = document.createElement('li');
    var firstAndPike_salesPerHour = this.estCookieSalesPerHrArray[i];
    new_li.textContent = `${i + 1}: ${this.estCookieSalesPerHrArray[i]}  cookies`;
    firstAndPike_ul.appendChild(new_li);
    }
};


firstAndPike.renderEstSalesToPage();
firstAndPike.calculateSalesPerHour();



