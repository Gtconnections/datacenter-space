# Space DC — Landing Page

Landing page futurista y bilingüe (ES/EN) para **Space DC**, un proyecto de
data centers en órbita: servidores autosustentables impulsados por energía
solar y con capacidad de tokenización. Construido con **Next.js 14 (App
Router)**, **TypeScript** y **Tailwind CSS**, listo para desplegar en **Vercel**.
El formulario de contacto envía los datos por correo con **SendGrid**.

---

## 1. Requisitos

- Node.js 18.17 o superior
- Una cuenta de [SendGrid](https://sendgrid.com) (plan gratuito sirve)
- Una cuenta de [Vercel](https://vercel.com)

## 2. Instalación local

```bash
npm install
cp .env.example .env.local   # y completa los valores (ver abajo)
npm run dev
```

Abre http://localhost:3000

## 3. Variables de entorno

Crea un archivo `.env.local` (para local) y configúralas también en Vercel:

| Variable              | Descripción                                                        |
| --------------------- | ------------------------------------------------------------------ |
| `SENDGRID_API_KEY`    | API Key de SendGrid (empieza con `SG.`)                            |
| `SENDGRID_FROM_EMAIL` | Remitente **verificado** en SendGrid (Single Sender o dominio)     |
| `CONTACT_TO_EMAIL`    | Correo que recibe los mensajes (por defecto martin@gtconnections.com) |

### Configurar SendGrid (paso a paso)

1. Crea una cuenta en https://sendgrid.com
2. Ve a **Settings → API Keys → Create API Key** (permiso "Mail Send"). Copia la key en `SENDGRID_API_KEY`.
3. Ve a **Settings → Sender Authentication** y verifica un **Single Sender**
   (un correo tuyo) o autentica tu dominio. Usa ese correo en `SENDGRID_FROM_EMAIL`.
   > Importante: SendGrid solo envía desde remitentes verificados. Si `from` no
   > está verificado, el envío falla.

## 4. Imágenes

Coloca tus imágenes en `public/images/`:

- `public/images/orbital.jpg` — se usa en el hero
- `public/images/helios.jpg` — se usa en la sección de Tecnología

> El proyecto incluye imágenes **placeholder** con esos nombres. Solo
> reemplázalas por las tuyas conservando el mismo nombre y no hay que tocar código.

## 5. Desplegar en Vercel

1. Sube el proyecto a un repositorio de GitHub.
2. En Vercel: **Add New → Project → Import** tu repo.
3. En **Environment Variables** agrega las 3 variables de la tabla de arriba.
4. Deploy. Vercel detecta Next.js automáticamente (build: `next build`).

## 6. Estructura

```
app/
  layout.tsx          # fuentes, metadata, provider de idioma
  page.tsx            # composición de la landing
  globals.css         # estilos y utilidades (Tailwind)
  api/contact/route.ts# endpoint que envía el correo con SendGrid (REST API)
components/
  LanguageProvider.tsx# contexto ES/EN + hook useLang
  Navbar.tsx          # nav fija con toggle de idioma
  Hero.tsx            # sección principal
  Sections.tsx        # Visión, Tecnología, Cómo funciona, Tokenización, Stats
  ContactForm.tsx     # formulario con validación
  Footer.tsx
  Starfield.tsx       # fondo animado de estrellas (canvas)
  Reveal.tsx          # animación al hacer scroll
  Logo.tsx            # logo SVG
lib/
  i18n.ts             # todos los textos en ES y EN
public/
  images/             # orbital.jpg, helios.jpg
  favicon.svg
```

## 7. Personalización rápida

- **Textos:** edita `lib/i18n.ts` (todo el contenido ES/EN vive ahí).
- **Colores:** `tailwind.config.ts` → `electric`, `space`, `cyan`.
- **Idioma por defecto:** `components/LanguageProvider.tsx` (`useState<Lang>("es")`).

---

Powering the future in orbit. 🛰️
