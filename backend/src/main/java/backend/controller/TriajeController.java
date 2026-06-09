package backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/triaje")
public class TriajeController {

    @GetMapping("/status")
    public String checkStatus() {
        return "✅ API de Triaje Inteligente (NLP) en línea y esperando conexiones.";
    }
}