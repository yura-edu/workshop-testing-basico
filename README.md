# Testing Básico

> **Tipo:** TESTING · **Duración estimada:** 180 min · **Nivel:** Básico

## Objetivo

Escribir pruebas unitarias con Jest para un módulo de validación, alcanzando al menos 70% de cobertura con todos los tests en verde.

## Instrucciones

### 1. Clona y prepara tu entorno

```bash
git clone <url-de-tu-repositorio>
cd workshop-testing-basico/starter-code
pnpm install
```

### 2. Explora el módulo a testear

Revisa `src/validators.js`. Contiene 6 funciones de validación sin tests. Tu trabajo: escribir los tests en `src/validators.test.js`.

### 3. Escribe los tests

Edita `src/validators.test.js`. Para cada función:
- Un caso que devuelve `true`
- Un caso que devuelve `false`
- Al menos un caso borde (null, vacío, fuera de rango)

### 4. Ejecuta y verifica

```bash
pnpm test              # todos deben pasar
pnpm test:coverage     # cobertura ≥ 70%
pnpm lint              # sin errores
```

### 5. Abre el Pull Request

Sube tu rama y abre un PR hacia `main`. El pipeline correrá automáticamente.

## Criterios de evaluación

| Métrica | Peso | Umbral |
|---|---|---|
| Cobertura de pruebas | 40% | ≥ 70% líneas y ramas |
| Tasa de pruebas pasadas | 35% | 100% de tests en verde |
| Violaciones de linter | 25% | 0 errores de ESLint |

## Recursos

- [Jest — Getting Started](https://jestjs.io/docs/getting-started)
- [Testing Best Practices](https://github.com/goldbergyoni/javascript-testing-best-practices)
