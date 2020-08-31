export default function dataEmployees() {

    // FUNCIONALIDAD BOTÓN EMPLEADOS
    // ESTA FUNCIONALIDAD PERMITE OBTENER LOS DATOS DE CONTACTO DE LOS EMPLEADOS
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
}