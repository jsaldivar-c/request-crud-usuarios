const urlCRUD = 'https://reqres.in/api/users';

const getUsuario = async(id) => {

    const resp = await fetch(`${urlCRUD}/${id}`);
    const { data } = await resp.json();
    console.warn('Usuario obtenido');
    return data;
};

const crearUsuario = async(usuario) => {

    const resp = await fetch(urlCRUD, {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.warn('Usuario creado');
    return await resp.json();
};

const actualizarUsuario = async(id, usuario) => {

    const resp = await fetch(`${urlCRUD}/${id}`, {

        method: 'PUT',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.warn('Usuario actualizado');
    return await resp.json();
};

const eliminarUsuario = async(id) => {

    const resp = await fetch(`${urlCRUD}/${id}`, {
        method: 'DELETE',
    });
    console.warn('Usuario borrado');
    return await (resp.ok) ? 'Borrado' : 'No se puedo borrar';
};

export {
    getUsuario,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
};