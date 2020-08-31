import dataEmployees from './button01.js';
import dataProfiles from './button02.js';
import dataCategories from './button03.js';



const showEmployees = () => {
    return dataEmployees();
}

const showProfiles = () => {
    return dataProfiles();
}

const showCategories = () => {
    return dataCategories();
}


document.getElementById('employees').addEventListener('click', showEmployees);
document.getElementById('profiles').addEventListener('click', showProfiles);
document.getElementById('categories').addEventListener('click', showCategories);