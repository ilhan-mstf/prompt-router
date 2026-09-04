import http.server
import socketserver
import os
import sys
import re

PORT = int(os.environ.get('PORT', sys.argv[1] if len(sys.argv) > 1 else 8088))
NON_EN_LANGS = {'es', 'it', 'pt', 'fr', 'de', 'tr'}
VALID_LIBS = {'dev', 'writing', 'marketing', 'job', 'startup', 'data', 'design', 'student', 'productivity', 'legal', 'sales'}

class CleanURLHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        clean_path = self.path.split('?')[0].split('#')[0]
        query = ('?' + self.path.split('?')[1]) if '?' in self.path else ''

        # 1. Match /tr, /es -> index.html
        lang_match = re.match(r'^/([a-z]{2})/?$', clean_path)
        if lang_match and lang_match.group(1) in NON_EN_LANGS:
            self.path = '/index.html' + query
            return super().do_GET()

        # 2. Match /tr/dev -> dev.html
        lib_lang_match = re.match(r'^/([a-z]{2})/([a-z-]+)/?$', clean_path)
        if lib_lang_match and lib_lang_match.group(1) in NON_EN_LANGS and lib_lang_match.group(2) in VALID_LIBS:
            self.path = f'/{lib_lang_match.group(2)}.html' + query
            return super().do_GET()

        # 3. Match /dev -> dev.html
        full_path = self.translate_path(clean_path)
        if not os.path.exists(full_path) and os.path.exists(full_path + '.html'):
            self.path = clean_path + '.html' + query

        return super().do_GET()

    def log_message(self, format, *args):
        sys.stderr.write(f"[{self.log_date_time_string()}] {args[0]} {args[1]} {args[2]}\n")

if __name__ == '__main__':
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), CleanURLHandler) as httpd:
        print(f"\n🚀 Local preview server running at http://localhost:{PORT}")
        print("Press Ctrl+C to stop.\n")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server.")
