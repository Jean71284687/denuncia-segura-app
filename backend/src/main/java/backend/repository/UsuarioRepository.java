package backend.Repository;

import backend.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    // Con solo escribir esta línea, Spring Boot crea automáticamente una consulta SQL
    // equivalente a: SELECT * FROM usuarios WHERE dni = ?
    Optional<Usuario> findByDni(String dni);
}