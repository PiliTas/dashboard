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




}