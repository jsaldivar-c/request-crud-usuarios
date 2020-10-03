import { obtenerUsuarios } from "./http-provider";

const body = document.body;
let tBody;
let correlativo = 0;

const crearHtml = () => {

    const html = `
    <h1 class="mt-5 mb-5 display-4"> Lista de Usuarios</h1>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Correo Electronico</th>
                <th scope="col">Nombre</th>
                <th scope="col">Avatar</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.appendChild(div);

    // Se crea una variable para mantener la referencia al tbody
    tBody = document.querySelector('tbody');
};

const crearFilaUsuario = (usuario) => {

    correlativo++;

    const html = `
        <td scope="col">${correlativo}</td>
        <td scope="col">${usuario.email}</td>
        <td scope="col">${usuario.first_name} ${usuario.last_name}</td>
        <td scope="col">
            <img class="img-thumbnail" src="${usuario.avatar}">
        </td>
    `;

    const tr = document.createElement('tr');
    tr.innerHTML = html;

    tBody.appendChild(tr);

};

export const init = async() => {

    crearHtml();
    correlativo = 0;
    // Se obtiene la lista de usuarios usando el servicio creado en el provider.
    (await obtenerUsuarios()).forEach(crearFilaUsuario);
};