import React, { useState } from 'react';

function Chatbot({ usuarioActual, irAlPanel }) {
  const [relato, setRelato] = useState('');
  const [loading, setLoading] = useState(false);

  const enviarDenuncia = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:8080/api/denuncias/registrar/${usuarioActual.id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ relatoCiudadano: relato })
      });
      
      if (response.ok) {
        alert('✅ Denuncia registrada exitosamente en la base de datos PNP.');
        irAlPanel(); // Redirige al panel principal
      }
    } catch (err) {
      alert('Error de conexión con el servidor.');
    } finally {
      setLoading(false);
    }
  };

  const styles = { card: { backgroundColor: '#1f2937', padding: '24px', borderRadius: '12px', border: '1px solid #374151' } };

  return (
    <div style={styles.card}>
      <h2 style={{marginTop: 0}}>Redactar Denuncia</h2>
      <p style={{color: '#9ca3af', marginBottom: '20px'}}>Escriba los detalles de lo sucedido. Nuestra Inteligencia Artificial analizará el texto para extraer el delito y nivel de riesgo.</p>
      
      <form onSubmit={enviarDenuncia}>
        <textarea 
          rows="6" 
          placeholder="Ej: Me robaron el celular en la avenida con un arma..."
          value={relato}
          onChange={(e) => setRelato(e.target.value)}
          required
          style={{ width: '97%', padding: '12px', borderRadius: '8px', backgroundColor: '#374151', color: 'white', border: '1px solid #4b5563', marginBottom: '16px' }}
        />
        <button type="submit" disabled={loading} style={{ backgroundColor: loading ? '#4b5563' : '#10b981', color: 'white', padding: '12px 24px', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
          {loading ? 'Procesando IA...' : '📤 Enviar Denuncia Segura'}
        </button>
      </form>
    </div>
  );
}

export default Chatbot;