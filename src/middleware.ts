import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Protección contra Clickjacking
  response.headers.set('X-Frame-Options', 'DENY');
  
  // Prevención XSS
  response.headers.set('X-XSS-Protection', '1; mode=block');
  
  // Política de seguridad de contenido
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data: https:;"
  );
  
  // Prevenir MIME-sniffing
  response.headers.set('X-Content-Type-Options', 'nosniff');
  
  // Política de referencias
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Características de seguridad del navegador
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  );

  return response;
}