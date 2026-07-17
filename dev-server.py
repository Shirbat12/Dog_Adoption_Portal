#!/usr/bin/env python3
"""Local dev server for testing src/ with caching disabled.
Run with: python3 dev-server.py
Then open: http://localhost:8000/index.html
Not part of the assignment submission.
"""
import http.server
import socketserver
import os

PORT = 8080
DIRECTORY = os.path.join(os.path.dirname(os.path.abspath(__file__)), "src")


class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()


if __name__ == "__main__":
    with socketserver.TCPServer(("", PORT), NoCacheHandler) as httpd:
        print(f"Serving {DIRECTORY} with caching disabled at http://localhost:{PORT}")
        httpd.serve_forever()
