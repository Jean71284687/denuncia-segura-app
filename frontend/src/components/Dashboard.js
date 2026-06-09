import React, { useState } from 'react';

function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      alert('✅ Expediente_PNP_00457.pdf descargado con éxito.');
    }, 2500);
  };

  const styles = {
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '24px' },
    card: { backgroundColor: '#1f2937', borderRadius: '12px', padding: '24px', border: '1px solid #374151' },
    cardTitle: { fontSize: '18px', fontWeight: 'bold', marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    badge: { backgroundColor: '#059669', color: '#ffffff', fontSize: '12px', padding: '4px 8px', borderRadius: '4px' },
    timeline: { borderLeft: '2px solid #4b5563', paddingLeft: '16px', marginLeft: '8px' },
    timelineItem: { position: 'relative', marginBottom: '16px' },
    timelineDot: { position: 'absolute', left: '-22px', top: '4px', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#3b82f6' },
    button: { width: '100%', backgroundColor: '#10b981', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', marginTop: '16px' },
    buttonSecondary: { backgroundColor: '#374151', color: '#ffffff', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', marginTop: '16px', width: '100%' },
    modalOverlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.75)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 },
    modalBox: { backgroundColor: '#1f2937', padding: '32px', borderRadius: '12px', width: '500px', border: '1px solid #4b5563', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)' },
    iaTag: { backgroundColor: '#8b5cf6', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold', marginLeft: '10px' }
  };

  return (
    <>
      <div style={styles.grid}>
        <div style={styles.card}>
          <div style={styles.cardTitle}>Última denuncia <span style={styles.badge}>En Investigación</span></div>
          <p style={{ fontWeight: 'bold', margin: '0 0 4px 0' }}>Caso #PNP-2026-00457 – Robo al paso</p>
          <p style={{ color: '#9ca3af', fontSize: '14px', margin: '0 0 20px 0' }}>Registrada el 12/03/2026, 14:30</p>
          <div style={styles.timeline}>
            <div style={styles.timelineItem}><div style={styles.timelineDot}></div><span style={{ fontSize: '14px', color: '#9ca3af' }}>12 mar</span><p style={{ margin: '4px 0 0 0', fontSize: '14px' }}>Denuncia recibida</p></div>
            <div style={styles.timelineItem}><div style={styles.timelineDot}></div><span style={{ fontSize: '14px', color: '#9ca3af' }}>13 mar</span><p style={{ margin: '4px 0 0 0', fontSize: '14px' }}>Asignada a Comisaría</p></div>
          </div>
          <button style={styles.buttonSecondary} onClick={() => setShowModal(true)}>Ver detalle de IA</button>
        </div>

        <div style={styles.card}>
          <div style={styles.cardTitle}>📄 Documentos Legales</div>
          <p style={{ color: '#9ca3af', fontSize: '15px', lineHeight: '1.5' }}>PDF de denuncia estructurado automáticamente con firma digital integrada.</p>
          <button style={{...styles.button, backgroundColor: isDownloading ? '#4b5563' : '#10b981'}} onClick={handleDownload} disabled={isDownloading}>
            {isDownloading ? '⏳ Generando documento...' : '📥 Descargar PDF Válido'}
          </button>
        </div>
      </div>

      {/* MODAL DE IA */}
      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalBox}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #374151', paddingBottom: '16px', marginBottom: '16px' }}>
              <h2 style={{ margin: 0, color: 'white' }}>Expediente Técnico <span style={styles.iaTag}>Extraído por IA</span></h2>
              <button onClick={() => setShowModal(false)} style={{ background: 'none', border: 'none', color: '#9ca3af', fontSize: '20px', cursor: 'pointer' }}>✖</button>
            </div>
            <ul style={{ color: '#d1d5db', lineHeight: '2', paddingLeft: '20px' }}>
              <li><strong>Tipo de delito:</strong> Robo agravado (Arrebato de celular)</li>
              <li><strong>Fecha y Hora:</strong> 12/03/2026 - 13:45 PM</li>
              <li><strong>Ubicación:</strong> Av. Arequipa Cdra. 45, Miraflores</li>
              <li><strong>Nivel de Riesgo (Triaje):</strong> <span style={{ color: '#ef4444' }}>MEDIO-ALTO</span></li>
              <li><strong>Validación RENIEC:</strong> ✔️ Identidad confirmada.</li>
            </ul>
            <button style={styles.button} onClick={() => setShowModal(false)}>Cerrar detalles</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Dashboard;