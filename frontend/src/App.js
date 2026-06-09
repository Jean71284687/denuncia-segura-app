import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Chatbot from './components/Chatbot';
import Login from './components/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeMenu, setActiveMenu] = useState('panel');

  const styles = {
    container: { display: 'flex', minHeight: '100vh', backgroundColor: '#111827', color: '#f3f4f6', fontFamily: 'Arial, sans-serif' },
    sidebar: { width: '260px', backgroundColor: '#1f2937', padding: '24px', display: 'flex', flexDirection: 'column', borderRight: '1px solid #374151' },
    logo: { fontSize: '20px', fontWeight: 'bold', color: '#3b82f6', marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '10px' },
    menuItem: (isActive) => ({ padding: '12px 16px', borderRadius: '8px', marginBottom: '8px', cursor: 'pointer', backgroundColor: isActive ? '#374151' : 'transparent', color: isActive ? '#ffffff' : '#9ca3af', transition: 'all 0.3s ease', fontWeight: isActive ? 'bold' : 'normal' }),
    mainContent: { flex: 1, padding: '40px', position: 'relative', overflowY: 'auto' },
    header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' },
    userBadge: { backgroundColor: '#374151', padding: '8px 16px', borderRadius: '20px', fontSize: '14px' }
  };

  // Si no está autenticado, mostramos la pantalla de RENIEC
  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  // Si ya se validó, mostramos el sistema principal
  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <div style={styles.logo}>🛡️ DenunciaSegura</div>
        <div style={styles.menuItem(activeMenu === 'panel')} onClick={() => setActiveMenu('panel')}>📂 Mi panel</div>
        <div style={styles.menuItem(activeMenu === 'nueva')} onClick={() => setActiveMenu('nueva')}>➕ Nueva denuncia</div>
        <div style={styles.menuItem(activeMenu === 'historial')} onClick={() => setActiveMenu('historial')}>📜 Historial</div>
        
        <div style={{ marginTop: 'auto' }}>
          <div style={{...styles.menuItem(false), color: '#ef4444'}} onClick={() => setIsAuthenticated(false)}>
            🚪 Cerrar Sesión
          </div>
        </div>
      </div>

      <div style={styles.mainContent}>
        <div style={styles.header}>
          <h1 style={{ fontSize: '28px', fontWeight: 'bold', margin: 0 }}>
            {activeMenu === 'panel' && 'Bienvenido, Ciudadano'}
            {activeMenu === 'nueva' && 'Registrar Nueva Denuncia'}
            {activeMenu === 'historial' && 'Historial de Casos'}
          </h1>
          <div style={styles.userBadge}>👤 DNI Validado</div>
        </div>

        {activeMenu === 'panel' && <Dashboard />}
        {activeMenu === 'nueva' && <Chatbot />}
        {activeMenu === 'historial' && <div><p style={{color: '#9ca3af'}}>Historial de denuncias sincronizado con SIDPOL en desarrollo...</p></div>}
      </div>
    </div>
  );
}

export default App;