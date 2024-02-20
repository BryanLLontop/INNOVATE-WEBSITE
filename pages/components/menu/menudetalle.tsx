import CVistadetalle from "../vistas/vistaDetalle";
import React, { useState, useEffect } from 'react';

export default function CMenudetalle(props: any) {
    const mostrar = props.mostrar || false;
    const tipo = props.tipo || 'item';

    // Declarar los estados siempre al principio del componente
    const [datos, setDatos] = useState([]);

    // Mover la lógica condicional fuera del hook useEffect
    useEffect(() => {
        if (tipo === 'megaMenu' && mostrar) {
            const namesubmenu = props.submenus || '';

            fetch('../../../api/db.json')
                .then(response => response.json())
                .then(json => {
                    const filteredData = json.pgsubmenus.filter((submenu: any) => submenu.megamenu === namesubmenu);
                    setDatos(filteredData);
                })
                .catch(error => console.error('Error al obtener datos:', error));
        }
    }, [mostrar, props.submenus, tipo]);

    if (tipo === 'item' && mostrar) {
        return (
            <li className="nav-item" key={'menuid' + props.id}>
                <a className="nav-link" aria-current="page" href={props.href}>{props.titulo}</a>
            </li>
        );
    } else if (tipo === 'megaMenu' && mostrar) {
        return (
            <li className="nav-item megaMenu dropdown-mega position-static" key={'megamenu_' + props.id} data-animation="center">
                <a className="nav-link dropdown-toggle" style={{ display: 'flex', alignItems: 'center' }} data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-current="page" href="#">{props.titulo}</a>
                <div className="dropdown-menu shadow" data-bs-popper="static" >
                    <div className="mega-content px-4">
                        <div className="container-fluid">
                            <div className="row">
                                {
                                    datos.map((submenu: any, keysubmenu: any) => {
                                        return (
                                            <CVistadetalle {...submenu} key={'megamenui_' + keysubmenu} />
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        );
    } else {
        return null;
    }
}
