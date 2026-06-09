package backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class BackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
        System.out.println("=========================================================");
        System.out.println("🛡️ SERVIDOR DENUNCIA-SEGURA INICIADO CON ÉXITO 🛡️");
        System.out.println("=========================================================");
    }

    // Configuración Global de CORS (Blindaje para conectar con React)
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**") // Aplica a todos los endpoints (/api/...)
                        .allowedOrigins("http://localhost:3000") // Permite a React
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Permite el Preflight (OPTIONS)
                        .allowedHeaders("*"); // Permite formato JSON
            }
        };
    }
}