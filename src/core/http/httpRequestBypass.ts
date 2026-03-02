import type { HttpRequestOptions } from "./httpTypes"; // Ajusta la ruta si es necesario

// 1. CREAMOS EL NUEVO TIPO (Hereda todo de HttpRequestOptions pero es independiente)
export interface HttpRequestBypass extends HttpRequestOptions {
  // Aquí el día de mañana podrías agregar banderas específicas para el bypass
  // Ejemplo: forceBypass?: boolean;
}

export const DEFAULT_BROWSER_HEADERS = {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/110.0.0.0 Safari/537.36",
  "Accept-Encoding": "gzip, deflate, br"
};

// 2. LA FUNCIÓN RECIBE EL HttpRequestBypass, PERO DEVUELVE UN HttpRequestOptions PURO
export function withBypass(options?: HttpRequestBypass): HttpRequestOptions {
  return {
    ...options,
    headers: {
      ...DEFAULT_BROWSER_HEADERS,
      ...(options?.headers || {})
    }
  };
}