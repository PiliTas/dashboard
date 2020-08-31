export default function dataRegisters() {
    // FUNCIONALIDAD BOTÓN REGISTROS
    // ESTA FUNCIONALIDAD PERMITE OBTENER LAS CREADENCIALES DEL EMPLEADO

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

}