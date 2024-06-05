//create a XHR server
var request = new XMLHttpRequest()

//step 02;
//opening request

request.open("GET","https://restcountries.com/v3.1/all")

//step 03:
//kickstard the http operator
request.send()

//step 04:
request.onload = function(){

    var res = JSON.parse(request.response)
    console.log(res);





 // a) print the details of all countries comes the Asia Region
  var data = res.filter((ele)=>ele.region == "Asia");
 console.log(data);






  // b)Get all the countries with a population of less than 2 lakhs using Filter methods

   var popu = res.filter((ele)=>ele.population<200000);
 console.log(popu);





  //c)Print the following details name, capital, flag, using forEach method
  res.forEach(country => {
    console.log("country: " + country.name.common);
      console.log("Capital: " + country.capital);
      console.log("Flag: " + country.flag);
    console.log(country); // For spacing between countries
  });




// d)find the sum of the total population of all the countries using reduce method

var casia = res.filter((ele)=>ele.region =="total population");

var cpopu= res.reduce((acc,cv)=>acc+cv.population,0);
console.log(cpopu);






//e) Filter countries that use US dollars as currency
const usdCountries = res.filter(country => country.currencies && country.currencies.USD);

console.log(usdCountries);




}







