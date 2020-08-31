export default function dataProfiles() {
    // FUNCIONALIDAD BOTÓN PERFILES
    // ESTA FUNCIONALIDAD PERMITE OBTENER EL PERFIL DE USUARIO (DDATOS DEMOGRÁFICOS)


    fetch('https://randomuser.me/api/?results=20')
        .then((response) => {
            if (response.ok) {
                let data = response.json();
                return data;
            }
            throw response;
        })
        .then(data => {
            const elements = data.results;
            let genders = "";
            document.getElementById('subtitle').style.color = '#d98310';
            document.getElementById('subtitle').innerHTML = `<h1>Perfiles</h1>`;
            document.getElementById('datacontainer').innerHTML = '';
            elements.forEach(element => {
                if (element[i].gender === "female") {
                    genders = "mujer";
                } else {
                    genders = "hombre"
                }
                document.getElementById('datacontainer').innerHTML +=
                    `<div class="cards"> 
                    <ul>
                        <li><div class ="card"><img src= ${element.picture.large}>
                        <ul>
                            <li>Nombre: ${element.name.title} ${element.name.first} ${element[i].name.last}</li>
                            <li>Género: ${genders}</li>
                            <li>Edad: ${element.dob.age}</li>
                            <li>Nacionalidad: ${element.nat}</li>
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