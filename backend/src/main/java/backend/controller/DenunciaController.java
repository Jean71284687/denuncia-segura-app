package backend.controller;

import backend.model.Denuncia;
import backend.model.Usuario;
import backend.repository.DenunciaRepository;
import backend.repository.UsuarioRepository;
import backend.service.IAService; // Importamos el cerebro de IA
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/denuncias")
@CrossOrigin(origins = "http://localhost:3000")
public class DenunciaController {

    @Autowired
    private DenunciaRepository denunciaRepository;
    
    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private IAService iaService; // Inyectamos el servicio

    @PostMapping("/registrar/{usuarioId}")
    public Denuncia registrarDenuncia(@PathVariable Long usuarioId, @RequestBody Denuncia denuncia) {
        Optional<Usuario> usuario = usuarioRepository.findById(usuarioId);
        
        if(usuario.isPresent()) {
            denuncia.setUsuario(usuario.get());
            denuncia.setFechaRegistro(LocalDateTime.now());
            denuncia.setCodigoExpediente("PNP-" + System.currentTimeMillis()); 
            denuncia.setEstado("En Investigación");
            
            // 🧠 Llamamos a nuestro Motor de IA en Java
            Map<String, String> analisis = iaService.analizarRelato(denuncia.getRelatoCiudadano());
            
            denuncia.setNivelRiesgo(analisis.get("riesgo"));
            denuncia.setTipoDelito(analisis.get("delito"));
            
            return denunciaRepository.save(denuncia);
        }
        throw new RuntimeException("Usuario no encontrado");
    }

    @GetMapping("/usuario/{usuarioId}")
    public List<Denuncia> obtenerMisDenuncias(@PathVariable Long usuarioId) {
        return denunciaRepository.findByUsuarioId(usuarioId);
    }
}