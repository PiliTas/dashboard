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
            document.getElementById('subtitle').style.color = 'rgb(37, 134, 163)';
            document.getElementById('subtitle').innerHTML = `<h1>Empleados</h1>`;

            console.log(element);
        })
        .catch((error) => {
            console.log('error', error)
        })
})