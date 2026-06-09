import React, { useState } from 'react';

function Login({ onLogin }) {
  const [dni, setDni] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulando el tiempo de respuesta de la API de RENIEC
    setTimeout(() => {
      setLoading(false);
      onLogin(); // Da acceso al sistema
    }, 1500);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#111827', color: 'white', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ backgroundColor: '#1f2937', padding: '40px', borderRadius: '12px', width: '400px', textAlign: 'center', border: '1px solid #374151', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)' }}>
        <h2 style={{ margin: '0 0 10px 0', fontSize: '24px' }}>🛡️ DenunciaSegura</h2>
        <p style={{ color: '#9ca3af', marginBottom: '30px', fontSize: '14px' }}>Módulo de Identidad Blindada</p>
        
        <form onSubmit={handleLogin}>
          <div style={{ textAlign: 'left', marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#d1d5db' }}>Documento Nacional de Identidad</label>
            <input 
              type="text" 
              placeholder="Ingrese su DNI (8 dígitos)" 
              maxLength="8"
              value={dni}
              onChange={(e) => setDni(e.target.value.replace(/\D/g, ''))} // Solo acepta números
              style={{ width: '93%', padding: '12px', borderRadius: '8px', border: '1px solid #4b5563', backgroundColor: '#374151', color: 'white', fontSize: '16px' }}
              required
            />
          </div>
          <button type="submit" disabled={loading || dni.length !== 8} style={{ width: '100%', padding: '14px', backgroundColor: (loading || dni.length !== 8) ? '#4b5563' : '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: (loading || dni.length !== 8) ? 'not-allowed' : 'pointer', transition: 'background-color 0.3s' }}>
            {loading ? 'Conectando con RENIEC...' : 'Validar Identidad'}
          </button>
        </form>
        <p style={{ marginTop: '20px', fontSize: '12px', color: '#6b7280' }}>Conexión cifrada de extremo a extremo.</p>
      </div>
    </div>
  );
}

export default Login;