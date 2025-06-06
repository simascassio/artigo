#!/usr/bin/env python3
"""
Servidor HTTP simples para o site do artigo Interestelar
"""

import http.server
import socketserver
import os

# Definindo a porta
PORT = 8000

# Configurando o handler
Handler = http.server.SimpleHTTPRequestHandler

# Configurando e iniciando o servidor
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Servidor rodando na porta {PORT}")
    print(f"Acesse: http://localhost:{PORT}")
    # Servindo os arquivos do diretório atual
    httpd.serve_forever()

