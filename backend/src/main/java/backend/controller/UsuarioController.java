package backend.controller;

import backend.model.Usuario;
import backend.repository.UsuarioRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "http://localhost:3000") // Permite que tu React se conecte sin bloqueos de seguridad CORS
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    // Endpoint simulando la validación RENIEC que exige tu proyecto
    @PostMapping("/validar-reniec")
    public Usuario validarOIngresarUsuario(@RequestParam String dni) {
        
        Optional<Usuario> usuarioExistente = usuarioRepository.findByDni(dni);
        
        if (usuarioExistente.isPresent()) {
            return usuarioExistente.get(); // Si ya existe en la BD, lo devuelve
        } else {
            // Si es la primera vez, simula extraer datos de RENIEC y lo guarda en la BD
            Usuario nuevoUsuario = new Usuario();
            nuevoUsuario.setDni(dni);
            nuevoUsuario.setNombreCompleto("Ciudadano Validado (Simulación RENIEC)");
            nuevoUsuario.setTelefono("Por actualizar");
            
            return usuarioRepository.save(nuevoUsuario); // Hace el INSERT en MySQL automáticamente
        }
    }
}