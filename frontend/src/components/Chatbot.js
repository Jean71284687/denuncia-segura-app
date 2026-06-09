import React from 'react';

function Chatbot() {
  const styles = {
    card: { backgroundColor: '#1f2937', borderRadius: '12px', padding: '24px', border: '1px solid #374151' },
    cardTitle: { fontSize: '18px', fontWeight: 'bold', marginBottom: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center' },
    button: { width: '100%', backgroundColor: '#10b981', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', marginTop: '16px' },
    buttonSecondary: { backgroundColor: '#374151', color: '#ffffff', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', marginTop: '16px', width: '100%' }
  };

  return (
    <div style={{ display: 'flex', gap: '24px' }}>
      <div style={{ ...styles.card, flex: 1, textAlign: 'center' }}>
        <div style={{ fontSize: '40px', marginBottom: '16px' }}>📱</div>
        <div style={styles.cardTitle}>Vía WhatsApp (Recomendado)</div>
        <p style={{ color: '#9ca3af', marginBottom: '24px' }}>Inicia el chatbot interactivo. La Inteligencia Artificial te guiará y extraerá los datos de tu relato por nota de voz en menos de 10 minutos.</p>
        <button style={{...styles.button, backgroundColor: '#25D366'}}>🟢 Iniciar Chat Automático</button>
      </div>
      
      <div style={{ ...styles.card, flex: 1, textAlign: 'center' }}>
        <div style={{ fontSize: '40px', marginBottom: '16px' }}>💻</div>
        <div style={styles.cardTitle}>Formulario Web</div>
        <p style={{ color: '#9ca3af', marginBottom: '24px' }}>Completa tu denuncia manualmente a través de nuestro formulario encriptado. Requiere validación activa con RENIEC y firma digital.</p>
        <button style={styles.buttonSecondary}>Abrir Formulario</button>
      </div>
    </div>
  );
}

export default Chatbot;