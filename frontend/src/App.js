import React, { useState } from 'react';

function App() {
  const [activeMenu, setActiveMenu] = useState('panel');
  const [showModal, setShowModal] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  // Función para simular la descarga del PDF
  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      alert('✅ Expediente_PNP_00457.pdf descargado con éxito.');
    }, 2500);
  };

  // --- ESTILOS (Modo Oscuro) ---
  const styles = {
    container: { display: 'flex', minHeight: '100vh', backgroundColor: '#111827', color: '#f3f4f6', fontFamily: 'Arial, sans-serif' },
    sidebar: { width: '260px', backgroundColor: '#1f2937', padding: '24px', display: 'flex', flexDirection: 'column', borderRight: '1px solid #374151' },
    logo: { fontSize: '20px', fontWeight: 'bold', color: '#3b82f6', marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '10px' },
    menuItem: (isActive) => ({ padding: '12px 16px', borderRadius: '8px', marginBottom: '8px', cursor: 'pointer', backgroundColor: isActive ? '#374151' : 'transparent', color: isActive ? '#ffffff' : '#9ca3af', transition: 'all 0.3s ease', fontWeight: isActive ? 'bold' : 'normal' }),
    mainContent: { flex: 1, padding: '40px', position: 'relative' },
    header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' },
    userBadge: { backgroundColor: '#374151', padding: '8px 16px', borderRadius: '20px', fontSize: '14px' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '24px' },
    card: { backgroundColor: '#1f2937', borderRadius: '12px', padding: '24px', border: '1px solid #374151' },
    cardTitle: { fontSize: '18px', fontWeight: 'bold', marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    badge: { backgroundColor: '#059669', color: '#ffffff', fontSize: '12px', padding: '4px 8px', borderRadius: '4px' },
    timeline: { borderLeft: '2px solid #4b5563', paddingLeft: '16px', marginLeft: '8px' },
    timelineItem: { position: 'relative', marginBottom: '16px' },
    timelineDot: { position: 'absolute', left: '-22px', top: '4px', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#3b82f6' },
    button: { width: '100%', backgroundColor: '#10b981', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', marginTop: '16px' },
    buttonSecondary: { backgroundColor: '#374151', color: '#ffffff', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', marginTop: '16px', width: '100%' },
    modalOverlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.75)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 },
    modalBox: { backgroundColor: '#1f2937', padding: '32px', borderRadius: '12px', width: '500px', border: '1px solid #4b5563', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)' },
    iaTag: { backgroundColor: '#8b5cf6', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold', marginLeft: '10px' },
    // Estilos para la tabla del Historial
    historyRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', borderBottom: '1px solid #374151' },
    // Estilos para Configuración
    settingRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #374151' }
  };

  return (
    <div style={styles.container}>
      {/* --- MENÚ LATERAL --- */}
      <div style={styles.sidebar}>
        <div style={styles.logo}>🛡️ DenunciaSegura</div>
        <div style={styles.menuItem(activeMenu === 'panel')} onClick={() => setActiveMenu('panel')}>📂 Mi panel</div>
        <div style={styles.menuItem(activeMenu === 'nueva')} onClick={() => setActiveMenu('nueva')}>➕ Nueva denuncia</div>
        <div style={styles.menuItem(activeMenu === 'historial')} onClick={() => setActiveMenu('historial')}>📜 Historial</div>
        <div style={styles.menuItem(activeMenu === 'config')} onClick={() => setActiveMenu('config')}>⚙️ Configuración</div>
      </div>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <div style={styles.mainContent}>
        <div style={styles.header}>
          <h1 style={{ fontSize: '28px', fontWeight: 'bold', margin: 0 }}>
            {activeMenu === 'panel' && 'Bienvenido, Luis'}
            {activeMenu === 'nueva' && 'Registrar Nueva Denuncia'}
            {activeMenu === 'historial' && 'Historial de Casos'}
            {activeMenu === 'config' && 'Configuración de Cuenta'}
          </h1>
          <div style={styles.userBadge}>👤 LG</div>
        </div>

        {/* 1. VISTA: MI PANEL (Dashboard principal) */}
        {activeMenu === 'panel' && (
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
        )}

        {/* 2. VISTA: NUEVA DENUNCIA */}
        {activeMenu === 'nueva' && (
          <div style={{ display: 'flex', gap: '24px' }}>
            <div style={{ ...styles.card, flex: 1, textAlign: 'center' }}>
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>📱</div>
              <div style={styles.cardTitle}><span style={{width: '100%', textAlign: 'center'}}>Vía WhatsApp (Recomendado)</span></div>
              <p style={{ color: '#9ca3af', marginBottom: '24px' }}>Inicia el chatbot interactivo. La Inteligencia Artificial te guiará y extraerá los datos de tu relato por nota de voz en menos de 10 minutos.</p>
              <button style={{...styles.button, backgroundColor: '#25D366'}}>🟢 Iniciar Chat Automático</button>
            </div>
            
            <div style={{ ...styles.card, flex: 1, textAlign: 'center' }}>
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>💻</div>
              <div style={styles.cardTitle}><span style={{width: '100%', textAlign: 'center'}}>Formulario Web</span></div>
              <p style={{ color: '#9ca3af', marginBottom: '24px' }}>Completa tu denuncia manualmente a través de nuestro formulario encriptado. Requiere validación activa con RENIEC y firma digital.</p>
              <button style={styles.buttonSecondary}>Abrir Formulario</button>
            </div>
          </div>
        )}

        {/* 3. VISTA: HISTORIAL */}
        {activeMenu === 'historial' && (
          <div style={styles.card}>
            <div style={styles.historyRow}>
              <div>
                <p style={{ margin: '0 0 4px 0', fontWeight: 'bold' }}>Caso #PNP-2026-00457</p>
                <p style={{ margin: 0, color: '#9ca3af', fontSize: '14px' }}>Robo al paso - 12/03/2026</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={styles.badge}>En Investigación</span>
                <button style={{ padding: '8px 16px', borderRadius: '6px', backgroundColor: '#374151', color: 'white', border: 'none', cursor: 'pointer' }}>Ver</button>
              </div>
            </div>
            <div style={styles.historyRow}>
              <div>
                <p style={{ margin: '0 0 4px 0', fontWeight: 'bold' }}>Caso #PNP-2025-08992</p>
                <p style={{ margin: 0, color: '#9ca3af', fontSize: '14px' }}>Pérdida de DNI - 15/11/2025</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ ...styles.badge, backgroundColor: '#4b5563' }}>Archivado</span>
                <button style={{ padding: '8px 16px', borderRadius: '6px', backgroundColor: '#374151', color: 'white', border: 'none', cursor: 'pointer' }}>Ver</button>
              </div>
            </div>
            <div style={{ ...styles.historyRow, borderBottom: 'none' }}>
              <div>
                <p style={{ margin: '0 0 4px 0', fontWeight: 'bold' }}>Caso #PNP-2025-01024</p>
                <p style={{ margin: 0, color: '#9ca3af', fontSize: '14px' }}>Extorsión telefónica - 04/02/2025</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ ...styles.badge, backgroundColor: '#3b82f6' }}>Derivado a Fiscalía</span>
                <button style={{ padding: '8px 16px', borderRadius: '6px', backgroundColor: '#374151', color: 'white', border: 'none', cursor: 'pointer' }}>Ver</button>
              </div>
            </div>
          </div>
        )}

        {/* 4. VISTA: CONFIGURACIÓN */}
        {activeMenu === 'config' && (
          <div style={{ maxWidth: '600px' }}>
            <div style={styles.card}>
              <div style={styles.cardTitle}>Preferencias de Notificación</div>
              <div style={styles.settingRow}>
                <span>Alertas por WhatsApp (24h)</span>
                <input type="checkbox" defaultChecked style={{ width: '20px', height: '20px' }} />
              </div>
              <div style={styles.settingRow}>
                <span>Notificaciones por Correo Electrónico</span>
                <input type="checkbox" defaultChecked style={{ width: '20px', height: '20px' }} />
              </div>
              <div style={{ ...styles.settingRow, borderBottom: 'none' }}>
                <span>Alertas SMS (Mensaje de texto)</span>
                <input type="checkbox" style={{ width: '20px', height: '20px' }} />
              </div>
              
              <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid #374151' }}>
                <div style={styles.cardTitle}>Seguridad</div>
                <button style={{ ...styles.buttonSecondary, backgroundColor: '#ef4444', color: 'white' }}>Cerrar Sesión</button>
              </div>
            </div>
          </div>
        )}

        {/* --- MODAL DE IA (Solo visible cuando se hace clic en "Ver detalle de IA" en el Panel) --- */}
        {showModal && (
          <div style={styles.modalOverlay}>
            <div style={styles.modalBox}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #374151', paddingBottom: '16px', marginBottom: '16px' }}>
                <h2 style={{ margin: 0 }}>Expediente Técnico <span style={styles.iaTag}>Extraído por IA</span></h2>
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

      </div>
    </div>
  );
}

export default App;