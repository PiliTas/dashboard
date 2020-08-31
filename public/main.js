import dataEmployees from './button01.js';
import dataProfiles from './button02.js';
const showEmployees = () => {
    return dataEmployees();
}

const showProfiles = () => {
    return dataProfiles();
}

document.getElementById('employees').addEventListener('click', showEmployees);
document.getElementById('profiles').addEventListener('click', showProfiles);