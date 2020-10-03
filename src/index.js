import { init } from './js/usuarios-page';
import * as CRUD from './js/crud-provider';

// Usuario obtenido
CRUD.getUsuario(3).then(console.log);

// Usuario creado
CRUD.crearUsuario({
    name: 'José',
    job: 'Herrero'
}).then(console.log);

// Usuario actualizado
CRUD.actualizarUsuario(2, {
    name: 'Ytana',
    job: 'Actriz'
}).then(console.log);

// Usuario eliminado
CRUD.eliminarUsuario(6).then(console.log);

init();