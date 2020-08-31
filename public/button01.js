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
            const elements = data.results;
            document.getElementById('subtitle').style.color = 'rgb(37, 134, 163)';
            document.getElementById('subtitle').innerHTML = `<h1>Empleados</h1>`;
            document.getElementById('datacontainer').innerHTML = '';
            elements.forEach(element =>
                document.getElementById('datacontainer').innerHTML +=
                `<div class="cards"> 
                                <ul>
                                    <li><div class ="card"><img src= ${element.picture.large}>
                                    <ul>
                                        <li>${element.name.title} ${element.name.first} ${element.name.last}</li>
                                        <li>Cel.: ${element.cell}</li>
                                        <li>Dirección: ${element.location.street.name} ${element.location.street.number}</li>
                                        <li>${element.location.postcode} - ${element.location.country}</li>
                                    </ul>
                                         </div>
                                </ul>
                            </div> `
            );
        })
        .catch((error) => {
            console.log('error', error)
        })
}