"use client"
import React, {useState, useEffect} from 'react'
export default function CContactanos(props:any) {
   const [nombre, setNombre] = useState('');
   const [telefono, setTelefono] = useState('51954498176');
   const [mensaje, setMensaje] = useState('');

   const handleEnviarMensaje = () => {
      const mensajeWhatsApp = `¡Hola! Mi nombre es ${nombre}. ${mensaje}`;
      const urlWhatsApp = `https://wa.me/${telefono}?text=${encodeURIComponent(mensajeWhatsApp)}`;
      window.open(urlWhatsApp, '_blank');
   };

   return (<>
      <div className="container px-4 pt-5 my-3">
         <h2 className="text-center mb-4">Contacto vía WhatsApp</h2>
         <form>
         <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
         </div>
         <div className="mb-3">
            <label htmlFor="mensaje" className="form-label">Mensaje</label>
            <textarea className="form-control" id="mensaje" rows={5} value={mensaje} onChange={(e) => setMensaje(e.target.value)} required></textarea>
         </div>
         <button type="button" className="btn btn-primary" onClick={handleEnviarMensaje}>Enviar a WhatsApp</button>
         </form>
      </div>
   </>);
};