package backend.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.util.HashMap;
import java.util.Map;

@Service
public class IAService {

    // Herramienta de Spring Boot para hacer peticiones a otros servidores
    private final RestTemplate restTemplate = new RestTemplate();

    public Map<String, String> analizarRelato(String relato) {
        try {
            // URL de tu nuevo microservicio en Python (puerto 8000)
            String pythonApiUrl = "http://localhost:8000/api/nlp/analizar";
            
            // Empaquetamos el relato del ciudadano en un JSON: {"texto": "me robaron..."}
            Map<String, String> request = new HashMap<>();
            request.put("texto", relato);
            
            // Enviamos el relato a Python y esperamos su veredicto
            @SuppressWarnings("unchecked")
            Map<String, String> response = restTemplate.postForObject(pythonApiUrl, request, Map.class);
            
            return response;

        } catch (Exception e) {
            // Plan de contingencia: Si el servidor Python de IA está apagado o falla,
            // el sistema no se cae, simplemente marca la denuncia como pendiente de análisis.
            Map<String, String> contingencia = new HashMap<>();
            contingencia.put("riesgo", "MEDIO");
            contingencia.put("delito", "Pendiente de análisis manual (Fallo de IA)");
            System.err.println("⚠️ Error de conexión con el Microservicio de IA en Python.");
            return contingencia;
        }
    }
}