package backend.Repository;

import backend.model.Denuncia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DenunciaRepository extends JpaRepository<Denuncia, Long> {
    // Para el historial del ciudadano: SELECT * FROM denuncias WHERE usuario_id = ?
    List<Denuncia> findByUsuarioId(Long usuarioId);
}