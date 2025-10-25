'use strict';

const populationElements = document.querySelectorAll('.population');
const populationStrings = Array.from(populationElements).map((element) => {
  return element.textContent;
});

const numbersAll = populationStrings.map((str) => {
  const cleanStr = str.replace(/,/g, '');

  return parseFloat(cleanStr);
});

const total = numbersAll.reduce((current, acc) => current + acc, 0);
const average = Math.floor(
  numbersAll.length > 0 ? total / numbersAll.length : 0,
);

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.textContent = total;
averagePopulation.textContent = average;
