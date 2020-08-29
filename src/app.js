// FUNCIONALIDAD BOTÓN EMPLEADOS
// ESTA FUNCIONALIDAD PERMITE OBTENER LOS DATOS DE CONTACTO DE LOS EMPLEADOS

document.getElementById('employees').addEventListener('click', function() {
    fetch('https://randomuser.me/api/?results=20')
        .then((response) => {
            if (response.ok) {
                let data = response.json();
                return data;
            }
            throw response;
        })
        .then(data => {
            const element = data.results;
            document.getElementById('subtitle').style.color = 'rgb(37, 134, 163)';
            document.getElementById('subtitle').innerHTML = `<h1>Empleados</h1>`;

            document.getElementById('datacontainer').innerHTML = '';
            for (let i = 0; i < element.length; i += 1) {
                document.getElementById('datacontainer').innerHTML +=
                    `<div class="cards"> 
                        <ul>
                            <li><div class ="card"><img src= ${element[i].picture.large}>
                            <ul>
                                <li>${element[i].name.title} ${element[i].name.first} ${element[i].name.last}</li>
                                <li>Cel.: ${element[i].cell}</li>
                                <li>Dirección: ${element[i].location.street.name} ${element[i].location.street.number}</li>
                                <li>${element[i].location.postcode} - ${element[i].location.country}</li>
                            </ul>
                                 </div>
                        </ul>
                    </div> `;
            }
        })
        .catch((error) => {
            console.log('error', error)
        })
})


// FUNCIONALIDAD BOTÓN PERFILES
// ESTA FUNCIONALIDAD PERMITE OBTENER EL PERFIL DE USUARIO (DDATOS DEMOGRÁFICOS)

document.getElementById('profiles').addEventListener('click', function() {
    fetch('https://randomuser.me/api/?results=20')
        .then((response) => {
            if (response.ok) {
                let data = response.json();
                return data;
            }
            throw response;
        })
        .then(data => {
            const element = data.results;
            let genders = "";
            document.getElementById('subtitle').style.color = '#d98310';
            document.getElementById('subtitle').innerHTML = `<h1>Perfiles</h1>`;
            document.getElementById('datacontainer').innerHTML = '';
            for (let i = 0; i < element.length; i += 1) {
                if (element[i].gender === "female") {
                    genders = "mujer";
                } else {
                    genders = "hombre"
                }
                document.getElementById('datacontainer').innerHTML +=
                    `<div class="cards"> 
                        <ul>
                            <li><div class ="card"><img src= ${element[i].picture.large}>
                            <ul>
                                <li>Nombre: ${element[i].name.title} ${element[i].name.first} ${element[i].name.last}</li>
                                <li>Género: ${genders}</li>
                                <li>Edad: ${element[i].dob.age}</li>
                                <li>Nacionalidad: ${element[i].nat}</li>
                            </ul>
                                </div>
                        </ul>
                    </div> `;
            }
        })
        .catch((error) => {
            console.log('error', error)
        })
})


// FUNCIONALIDAD BOTÓN CATEGORÍAS DE ACUERDO A LOS AÑOS DE SERVICIO (REGISTRO)
// JUNIOR  0 < AÑOS DE SERVICIO < 5
// SEMI-SENIOR 5 <= AÑOS DE SERVICIOS < 10
// SENIOR aÑOS DE SERVICIOS >= 10

document.getElementById('categories').addEventListener('click', function() {
    fetch('https://randomuser.me/api/?results=20')
        .then((response) => {
            if (response.ok) {
                let data = response.json();
                return data;
            }
            throw response;
        })
        .then(data => {
            const element = data.results;
            let category = "";
            document.getElementById('subtitle').style.color = '#1d2731';
            document.getElementById('subtitle').innerHTML = `<h1>Categorías</h1>`;
            document.getElementById('datacontainer').innerHTML = '';
            for (let i = 0; i < element.length; i += 1) {
                if (element[i].registered.age > 0 && element[i].registered.age < 5) {
                    category = "Junior";
                } else {
                    if (element[i].registered.age >= 5 && element[i].registered.age < 10) {
                        category = "Semi-senior";
                    } else {
                        if (element[i].registered.age >= 10) {
                            category = "Senior";
                        }
                    }
                }
                document.getElementById('datacontainer').innerHTML +=
                    `<div class="cards"> 
                        <ul>
                            <li><div class ="card"><img src= ${element[i].picture.large}>
                            <ul>
                                <li>Nombre: ${element[i].name.first} ${element[i].name.last}</li>
                                <li>Años de servicio: ${element[i].registered.age}</li>
                                <li>Categoría: ${category}</li>
                            </ul>
                                </div>
                        </ul>
                    </div> `;
            }
        })
        .catch((error) => {
            console.log('error', error)
        })
})

// FUNCIONALIDAD BOTÓN REGISTROS
// ESTA FUNCIONALIDAD PERMITE OBTENER LAS CREADENCIALES DEL EMPLEADO

document.getElementById('registers').addEventListener('click', function() {
    fetch('https://randomuser.me/api/?results=20')
        .then((response) => {
            if (response.ok) {
                let data = response.json();
                return data;
            }
            throw response;
        })
        .then(data => {
            const element = data.results;
            document.getElementById('subtitle').style.color = '#083c5d';
            document.getElementById('subtitle').innerHTML = `<h1>Registros</h1>`;
            document.getElementById('datacontainer').innerHTML = '';
            for (let i = 0; i < element.length; i += 1) {
                document.getElementById('datacontainer').innerHTML +=
                    `<div class="cards"> 
                        <ul>
                            <li><div class ="card"><img src= ${element[i].picture.large}>
                            <ul>
                                <li>UId: ${element[i].login.uuid}</li>
                                <li>User: ${element[i].login.username}</li>
                                <li>Password: ${element[i].login.password}</li>
                            </ul>
                                </div>
                        </ul>
                    </div> `;
            }
        })
        .catch((error) => {
            console.log('error', error)
        })
})