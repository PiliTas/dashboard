import dataEmployees from './button01.js';
import dataProfiles from './button02.js';
import dataCategories from './button03.js';
import dataRegisters from './button04.js';


const showEmployees = () => dataEmployees();
const showProfiles = () => dataProfiles();
const showCategories = () => dataCategories();
const showRegisters = () => dataRegisters();



document.getElementById('employees').addEventListener('click', showEmployees);
document.getElementById('profiles').addEventListener('click', showProfiles);
document.getElementById('categories').addEventListener('click', showCategories);
document.getElementById('registers').addEventListener('click', showRegisters);