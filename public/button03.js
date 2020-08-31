export default function dataCategories() {

    // FUNCIONALIDAD BOTÓN CATEGORÍAS DE ACUERDO A LOS AÑOS DE SERVICIO (REGISTRO)
    // JUNIOR  0 < AÑOS DE SERVICIO < 5
    // SEMI-SENIOR 5 <= AÑOS DE SERVICIOS < 10
    // SENIOR aÑOS DE SERVICIOS >= 10

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
            let category = "";
            document.getElementById('subtitle').style.color = '#1d2731';
            document.getElementById('subtitle').innerHTML = `<h1>Categorías</h1>`;
            document.getElementById('datacontainer').innerHTML = '';
            elements.forEach(element => {
                if (element.registered.age > 0 && element.registered.age < 5) {
                    category = "Junior";
                } else {
                    if (element.registered.age >= 5 && element.registered.age < 10) {
                        category = "Semi-senior";
                    } else {
                        if (element.registered.age >= 10) {
                            category = "Senior";
                        }
                    }
                }
                document.getElementById('datacontainer').innerHTML +=
                    `<div class="cards"> 
                        <ul>
                            <li><div class ="card"><img src= ${element.picture.large}>
                            <ul>
                                <li>Nombre: ${element.name.first} ${element.name.last}</li>
                                <li>Años de servicio: ${element.registered.age}</li>
                                <li>Categoría: ${category}</li>
                            </ul>
                                </div>
                        </ul>
                    </div> `
            });
        })
        .catch((error) => {
            console.log('error', error)
        })
}