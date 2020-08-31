import dataEmployees from './datas.js'

const showEmployees = () => {

    return dataEmployees();
}

document.getElementById('employees').addEventListener('click', showEmployees);