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

}