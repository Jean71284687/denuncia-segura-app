import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Chatbot from './components/Chatbot';

function App() {
  const [activeMenu, setActiveMenu] = useState('panel');

  const styles = {
    container: { display: 'flex', minHeight: '100vh', backgroundColor: '#111827', color: '#f3f4f6', fontFamily: 'Arial, sans-serif' },
    sidebar: { width: '260px', backgroundColor: '#1f2937', padding: '24px', display: 'flex', flexDirection: 'column', borderRight: '1px solid #374151' },
    logo: { fontSize: '20px', fontWeight: 'bold', color: '#3b82f6', marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '10px' },
    menuItem: (isActive) => ({ padding: '12px 16px', borderRadius: '8px', marginBottom: '8px', cursor: 'pointer', backgroundColor: isActive ? '#374151' : 'transparent', color: isActive ? '#ffffff' : '#9ca3af', transition: 'all 0.3s ease', fontWeight: isActive ? 'bold' : 'normal' }),
    mainContent: { flex: 1, padding: '40px', position: 'relative' },
    header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' },
    userBadge: { backgroundColor: '#374151', padding: '8px 16px', borderRadius: '20px', fontSize: '14px' }
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

        {/* Aquí es donde "llamamos" a las piezas que hemos movido */}
        {activeMenu === 'panel' && <Dashboard />}
        {activeMenu === 'nueva' && <Chatbot />}
        
        {/* Próximamente puedes crear componentes para Historial y Configuración de la misma manera */}
        {activeMenu === 'historial' && <div><p>Vista de historial en construcción...</p></div>}
        {activeMenu === 'config' && <div><p>Vista de configuración en construcción...</p></div>}
      </div>
    </div>
  );
}

export default App;