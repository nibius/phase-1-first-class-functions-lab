// Code your solution in this file!
const returnFirstTwoDrivers = function (arrayofDrivers){
return arrayofDrivers.slice(0,2);
};

//const drivers = ["Bob", "Freddy", "Emiley"];
//returnFirstTwoDrivers(drivers);

const returnLastTwoDrivers = function(driversArray){
    return driversArray.slice(-2);

};

const selectingDrivers =  [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){
    return (fare) => fare * multiplier;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function  selectDifferentDrivers(arrayofDrivers, callbackFunction){
   return callbackFunction(arrayofDrivers);

}