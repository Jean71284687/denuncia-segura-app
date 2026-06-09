package backend.model;

import jakarta.persistence.*;

@Entity // Esta etiqueta le dice a Spring Boot: "¡Convierte esta clase en una tabla SQL!"
@Table(name = "usuarios")
public class Usuario {

    @Id // Esta será la llave primaria (Primary Key)
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Autoincrementable
    private Long id;

    @Column(nullable = false, length = 8, unique = true)
    private String dni;

    @Column(nullable = false, length = 100)
    private String nombreCompleto;

    @Column(length = 15)
    private String telefono;

    // Constructores, Getters y Setters vacíos (necesarios para Spring Boot)
    public Usuario() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public String getDni() { return dni; }
    public void setDni(String dni) { this.dni = dni; }

    public String getNombreCompleto() { return nombreCompleto; }
    public void setNombreCompleto(String nombreCompleto) { this.nombreCompleto = nombreCompleto; }

    public String getTelefono() { return telefono; }
    public void setTelefono(String telefono) { this.telefono = telefono; }
}