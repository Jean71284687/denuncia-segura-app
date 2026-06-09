import React, { useState, useEffect } from 'react';

function Dashboard({ usuarioActual }) {
  const [denuncias, setDenuncias] = useState([]);

useEffect(() => {
    // Cuando carga el panel, busca en MySQL las denuncias de este usuario
    fetch(`http://localhost:8080/api/denuncias/usuario/${usuarioActual.id}`)
      .then(res => res.json())
      .then(data => {
        // Validamos que 'data' sea realmente una lista/arreglo
        if (Array.isArray(data)) {
          setDenuncias(data);
        } else {
          console.error("El servidor devolvió un objeto de error en lugar de una lista:", data);
          setDenuncias([]); // Lo forzamos a ser una lista vacía para evitar que React colapse
        }
      })
      .catch(err => {
        console.error("Error de conexión al obtener denuncias:", err);
        setDenuncias([]);
      });
  }, [usuarioActual]);

  const styles = { 
    card: { backgroundColor: '#1f2937', borderRadius: '12px', padding: '24px', border: '1px solid #374151', marginBottom: '16px' },
    badgeAlto: { backgroundColor: '#ef4444', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' },
    badgeMedio: { backgroundColor: '#f59e0b', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }
  };

  return (
    <div>
      <h2 style={{marginBottom: '24px'}}>Mis Expedientes Activos</h2>
      
      {denuncias.length === 0 ? (
        <p style={{color: '#9ca3af'}}>No tienes denuncias registradas actualmente.</p>
      ) : (
        denuncias.map((denuncia) => (
          <div key={denuncia.id} style={styles.card}>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '12px'}}>
              <h3 style={{margin: 0, color: '#3b82f6'}}>Expediente: {denuncia.codigoExpediente}</h3>
              <span style={denuncia.nivelRiesgo === 'ALTO' ? styles.badgeAlto : styles.badgeMedio}>
                Riesgo {denuncia.nivelRiesgo}
              </span>
            </div>
            
            <p style={{color: '#d1d5db'}}><strong>Delito (Triaje IA):</strong> {denuncia.tipoDelito}</p>
            <p style={{color: '#9ca3af', fontStyle: 'italic'}}>"{denuncia.relatoCiudadano}"</p>
            
            <div style={{marginTop: '16px', fontSize: '14px', color: '#6b7280', display: 'flex', justifyContent: 'space-between'}}>
              <span>📅 {new Date(denuncia.fechaRegistro).toLocaleString()}</span>
              <span>Estado: <strong style={{color: '#10b981'}}>{denuncia.estado}</strong></span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;