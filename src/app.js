// FUNCIONALIDAD BOTÓN EMPLEADOS
// ESTA FUNCIONALIDAD PERMITE OBTENER LOS DATOS DE CONTACTO DE LOS EMPLEADOS

document.getElementById('employees').addEventListener('click', function() {
    fetch('https://randomuser.me/api/?results=20')
        .then((response) => {
            if (response.ok) {
                let data = response.json()
                return data;
            }
            throw response;
        })
        .then(data => {
            const element = data.results;
            console.log(element);
        })
        .catch((error) => {
            console.log('error', error)
        })
})