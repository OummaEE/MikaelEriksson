import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children, title }) => {
  return (
    <html lang="sv">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title || 'Mikael Eriksson - Konstnär från Flen'}</title>
        <meta name="description" content="Mikael Eriksson är en etablerad svensk konstnär från Flen, Sörmland. Utforska hans konstnärliga resa från Stockholm till Berlin och tillbaka till Flen." />
        <meta name="keywords" content="Mikael Eriksson, konstnär, Flen, Sörmland, konst, måleri, grafik, Berlin, utställningar, UNFUCK THE WORLD" />
        <meta name="author" content="Mikael Eriksson" />
        
        <link href="/static/moooi-style.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#1a365d" />
      </head>
      <body>
        {children}
        <script src="/static/moooi-interactions.js"></script>
      </body>
    </html>
  )
})
