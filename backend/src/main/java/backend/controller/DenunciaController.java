package backend.controller;

import backend.model.Denuncia;
import backend.model.Usuario;
import backend.repository.DenunciaRepository;
import backend.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/denuncias")
@CrossOrigin(origins = "http://localhost:3000")
public class DenunciaController {

    @Autowired
    private DenunciaRepository denunciaRepository;
    
    @Autowired
    private UsuarioRepository usuarioRepository;

    @PostMapping("/registrar/{usuarioId}")
    public Denuncia registrarDenuncia(@PathVariable Long usuarioId, @RequestBody Denuncia denuncia) {
        Optional<Usuario> usuario = usuarioRepository.findById(usuarioId);
        if(usuario.isPresent()) {
            denuncia.setUsuario(usuario.get());
            denuncia.setFechaRegistro(LocalDateTime.now());
            denuncia.setCodigoExpediente("PNP-" + System.currentTimeMillis()); 
            denuncia.setEstado("En Investigación");
            
            // Simulación rápida de NLP (Triaje IA)
            String relato = denuncia.getRelatoCiudadano().toLowerCase();
            if(relato.contains("arma") || relato.contains("golpe") || relato.contains("violencia")) {
                denuncia.setNivelRiesgo("ALTO");
                denuncia.setTipoDelito("Robo Agravado con violencia");
            } else {
                denuncia.setNivelRiesgo("MEDIO");
                denuncia.setTipoDelito("Hurto / Arrebato");
            }
            
            return denunciaRepository.save(denuncia);
        }
        throw new RuntimeException("Usuario no encontrado");
    }

    @GetMapping("/usuario/{usuarioId}")
    public List<Denuncia> obtenerMisDenuncias(@PathVariable Long usuarioId) {
        return denunciaRepository.findByUsuarioId(usuarioId); // Devuelve el historial del ciudadano
    }
}