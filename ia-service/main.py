from fastapi import FastAPI
from pydantic import BaseModel
from google import genai
import json
import time

app = FastAPI()

# 1. Configuración del cliente de Google GenAI
# Reemplaza este texto con la clave que copiaste de Google AI Studio
CLIENT_API_KEY = "NO_SUBIR_CLAVE_REAL_A_GITHUB"
client = genai.Client(api_key=CLIENT_API_KEY)

# Definición de la estructura de datos de entrada
class Relato(BaseModel):
    texto: str

@app.post("/api/nlp/analizar")
async def analizar_texto(relato: Relato):
    # 2. Construcción del Prompt con el rol e instrucciones detalladas
    prompt = f"""
    Eres un experto analista de la Policía Nacional del Perú (PNP). 
    Tu tarea es leer el relato de una denuncia ciudadana y clasificarlo de forma técnica y jurídica.
    
    Debes responder ÚNICAMENTE con un objeto JSON válido que contenga exactamente estos dos campos:
    - "riesgo": Asigna "ALTO" (si se mencionan armas, disparos, agresiones físicas graves, peligro de muerte o secuestro), 
               "MEDIO" (si son robos al paso, arrebatos, hurtos agravados en mototaxis o vehículos sin lesiones críticas) o 
               "BAJO" (si se trata de pérdidas de objetos, hurtos simples sin violencia o estafas digitales).
    - "delito": El nombre penal y técnico del delito según corresponda (ej. "Robo Agravado con uso de armas", "Hurto Simple", "Tentativa de Homicidio", "Estafa", etc).
    
    Relato del ciudadano: "{relato.texto}"
    """
    
    try:
        # 3. Petición al modelo de última generación
        response = client.models.generate_content(
            model='gemini-3.5-flash',
            contents=prompt
        )
        
        # 4. Limpieza de formato para evitar bloques de código markdown (```json ... ```)
        texto_respuesta = response.text.replace("```json", "").replace("```", "").strip()
        
        # Convertimos el texto limpio a un diccionario real de Python
        resultado_json = json.loads(texto_respuesta)
        return resultado_json
        
    except Exception as e:
        print("Error al procesar con Gemini:", e)
        # Plan de contingencia ante fallas de red o cuotas de API
        return {
            "riesgo": "MEDIO", 
            "delito": "Análisis manual requerido (Fallo en red neuronal)"
        }

@app.get("/")
def read_root():
    return {"status": "Microservicio de IA con Google Gemini activo y en línea."}
@app.post("/api/nlp/analizar")
async def analizar_texto(relato: Relato):
    prompt = f"""
    Eres un experto analista de la Policía Nacional del Perú (PNP). 
    Tu tarea es leer el relato de una denuncia ciudadana y clasificarlo de forma técnica y jurídica.
    
    Debes responder ÚNICAMENTE con un objeto JSON válido que contenga exactamente estos dos campos:
    - "riesgo": Asigna "ALTO" (si se mencionan armas, disparos, agresiones físicas graves, peligro de muerte o secuestro), 
               "MEDIO" (si son robos al paso, arrebatos, hurtos agravados en mototaxis o vehículos sin lesiones críticas) o 
               "BAJO" (si se trata de pérdidas de objetos, hurtos simples sin violencia o estafas digitales).
    - "delito": El nombre penal y técnico del delito según corresponda (ej. "Robo Agravado con uso de armas", "Hurto Simple", "Tentativa de Homicidio", "Estafa", etc).
    
    Relato del ciudadano: "{relato.texto}"
    """ 
    
    max_reintentos = 3
    for intento in range(max_reintentos):
        try:
            response = client.models.generate_content(
                model='gemini-3.5-flash',
                contents=prompt
            )
            
            texto_respuesta = response.text.replace("```json", "").replace("```", "").strip()
            return json.loads(texto_respuesta)
            
        except Exception as e:
            print(f"Intento {intento + 1} fallido: {e}")
            if intento < max_reintentos - 1:
                time.sleep(2) # Espera 2 segundos antes de reintentar
                continue
            else:
                # Si después de 3 intentos sigue fallando, entonces sí devolvemos el fallback
                return {
                    "riesgo": "MEDIO", 
                    "delito": "Análisis manual requerido (Servidores de IA ocupados temporalmente)"
                }