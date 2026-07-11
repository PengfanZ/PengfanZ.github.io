# Pengfan Zhang — Personal Website

A responsive portfolio built with React, TypeScript, and Vite.

## Local development

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run build
npm run lint
```

## Analytics

Production deployments use Cloudflare Web Analytics. The beacon is initialized
once after the React application mounts so it does not block the initial render.
