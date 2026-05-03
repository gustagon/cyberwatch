# CyberWatch — Deploy garantizado

Esta versión es la PROFESIONAL. Funciona seguro porque Netlify hace el build en sus propios servidores (que sí tienen red para descargar React, Recharts y Lucide) y sirve archivos JavaScript estáticos optimizados. **NO depende de CDNs externos en runtime ni de compilación en navegador.**

---

## 🎯 Camino infalible: GitHub → Netlify autobuild (10 minutos)

### Paso 1. Crea cuenta en GitHub

Si no tienes: ve a https://github.com/signup. Solo email + contraseña.

### Paso 2. Crea un repositorio nuevo

1. Ve a https://github.com/new
2. **Repository name**: `cyberwatch` (o el nombre que quieras)
3. Elige **Public** (lo necesitas público para el plan gratuito de Netlify)
4. NO marques ninguna casilla (ni README, ni .gitignore, ni license)
5. Click verde **"Create repository"**

### Paso 3. Sube los archivos al repositorio

GitHub te muestra una página con instrucciones. **Ignora la terminal.** Busca este link:

> "uploading an existing file"

(está en azul, dentro del texto "or push an existing repository...")

1. Click en ese link
2. **Descomprime** el zip `cyberwatch-deploy.zip` en tu ordenador
3. Abre la carpeta descomprimida `cyberwatch-deploy/`
4. **Selecciona TODOS los archivos y carpetas que hay dentro** (NO la carpeta padre, lo de DENTRO):
   - `.gitignore`
   - `README.md`
   - `index.html`
   - `netlify.toml`
   - `package.json`
   - `postcss.config.js`
   - `public/` (carpeta)
   - `src/` (carpeta)
   - `tailwind.config.js`
   - `vercel.json`
   - `vite.config.js`
5. Arrastra todos a la zona de upload de GitHub
6. Espera a que termine la subida (verás barras de progreso para `src/App.jsx` que es el más grande)
7. Abajo, en "Commit changes":
   - Commit message: `initial commit`
   - Click verde **"Commit changes"**

### Paso 4. Conecta Netlify al repo

1. Ve a https://app.netlify.com/start
2. Si no tienes cuenta Netlify, créala con el mismo email de GitHub (un click)
3. Click el botón **"Deploy with GitHub"**
4. Netlify pide autorización para ver tus repos. **Authorize Netlify**
5. Verás la lista de tus repos. Selecciona **`cyberwatch`**
6. Pantalla de configuración. **NO TOQUES NADA** — Netlify ya detectó que es Vite:
   - Branch: `main`
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Click verde **"Deploy site"**

### Paso 5. Espera ~2 minutos

Netlify ejecuta:
1. `git clone` de tu repo
2. `npm install` (instala React, Vite, Recharts, Lucide, Tailwind...)
3. `npm run build` (compila todo a `dist/`)
4. Despliega `dist/` a una URL pública

Verás logs en vivo. Si hay errores, salen ahí.

### Paso 6. URL pública lista

Netlify te da una URL del tipo:
```
https://amazing-newton-abc123.netlify.app
```

Click en ella y deberías ver CyberWatch funcionando perfectamente, primera carga en menos de 1 segundo.

---

## 🌐 Cambiar el nombre de dominio Netlify

Por defecto te dan un nombre random. Para personalizarlo:

1. En el dashboard del sitio en Netlify → **Site configuration** → **General** → **Site details**
2. Click **"Change site name"**
3. Escribe `cyberwatchthreatintelligence` (o el nombre que quieras)
4. URL final: `https://cyberwatchthreatintelligence.netlify.app`

---

## 🔧 Conectar tu dominio propio (opcional)

Si tienes `cyberwatchthreatintelligence.com`:

1. En Netlify → **Domain management** → **Add custom domain**
2. Escribe `cyberwatchthreatintelligence.com` → Verify
3. Netlify te da los registros DNS a configurar
4. En tu proveedor de dominio (Namecheap, GoDaddy, Cloudflare...) añades:
   - Tipo `A` apuntando a `75.2.60.5`
   - O CNAME `www` apuntando a `cyberwatchthreatintelligence.netlify.app`
5. Espera 5-30 min para propagación DNS
6. Netlify activa HTTPS automático con Let's Encrypt

---

## 🔄 Actualizar la app en el futuro

Cada vez que quieras cambiar algo:

1. Edita el archivo en GitHub directamente (botón lápiz en la web)
2. Commit changes
3. Netlify detecta el push y redespliega automáticamente en 1-2 minutos
4. Tu URL pública se actualiza sola

---

## 🆘 Si algo falla en el build de Netlify

Lo más común son errores de versión de Node. Si ves un error en los logs de Netlify del tipo "node engine":

1. En Netlify → **Site configuration** → **Build & deploy** → **Environment variables**
2. Add variable:
   - Key: `NODE_VERSION`
   - Value: `20`
3. Trigger redeploy desde Deploys → Trigger deploy → Deploy site

Si ves errores tipo "Cannot find module": dale a **Trigger deploy → Clear cache and deploy site**.

Cualquier otro error: copia el log y me lo pegas.

---

## 📁 Qué hay en este zip

```
cyberwatch-deploy/
├── public/
│   └── favicon.svg          # Icono cyan
├── src/
│   ├── App.jsx              # Aplicación CyberWatch (4200 líneas)
│   ├── main.jsx             # Entry point + window.storage polyfill
│   └── index.css            # Tailwind directives
├── index.html               # HTML root con fonts
├── package.json             # Dependencias: React + Vite + Recharts + Lucide + Tailwind
├── vite.config.js           # Config Vite
├── tailwind.config.js       # Config Tailwind
├── postcss.config.js        # PostCSS
├── netlify.toml             # ← Le dice a Netlify cómo construir
├── vercel.json              # ← Si prefieres Vercel en vez de Netlify
└── .gitignore
```

El archivo clave es `netlify.toml`: contiene `command = "npm run build"` y `publish = "dist"` — eso es lo que Netlify lee automáticamente para hacer el deploy correcto.
