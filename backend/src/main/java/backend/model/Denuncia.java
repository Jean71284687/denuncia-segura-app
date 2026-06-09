package backend.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "denuncias")
public class Denuncia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String codigoExpediente; // Ejemplo: PNP-2026-00457

    @Column(columnDefinition = "TEXT")
    private String relatoCiudadano; // Lo que cuenta el usuario

    @Column(length = 50)
    private String tipoDelito; // Ej: Robo agravado (Extraído por IA)

    @Column(length = 20)
    private String nivelRiesgo; // Ej: ALTO, MEDIO, BAJO (Triaje IA)

    @Column(nullable = false)
    private LocalDateTime fechaRegistro;

    @Column(length = 20)
    private String estado; // Ej: En Investigación, Cerrado

    // Relación: Muchas denuncias pertenecen a un Usuario
    @ManyToOne
    @JoinColumn(name = "usuario_id", nullable = false)
    private Usuario usuario;

    public Denuncia() {}

    // Getters y Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getCodigoExpediente() { return codigoExpediente; }
    public void setCodigoExpediente(String codigoExpediente) { this.codigoExpediente = codigoExpediente; }

    public String getRelatoCiudadano() { return relatoCiudadano; }
    public void setRelatoCiudadano(String relatoCiudadano) { this.relatoCiudadano = relatoCiudadano; }

    public String getTipoDelito() { return tipoDelito; }
    public void setTipoDelito(String tipoDelito) { this.tipoDelito = tipoDelito; }

    public String getNivelRiesgo() { return nivelRiesgo; }
    public void setNivelRiesgo(String nivelRiesgo) { this.nivelRiesgo = nivelRiesgo; }

    public LocalDateTime getFechaRegistro() { return fechaRegistro; }
    public void setFechaRegistro(LocalDateTime fechaRegistro) { this.fechaRegistro = fechaRegistro; }

    public String getEstado() { return estado; }
    public void setEstado(String estado) { this.estado = estado; }

    public Usuario getUsuario() { return usuario; }
    public void setUsuario(Usuario usuario) { this.usuario = usuario; }
}