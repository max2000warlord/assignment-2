# Base stage: install dependencies
FROM oven/bun:1 AS base
WORKDIR /app
COPY package.json bun.lockb* ./
#RUN bun install

# Dev stage: for local development with live reload
FROM base AS dev
COPY . .
CMD ["bun", "run", "dev"]

# Builder stage: production build
FROM base AS builder
COPY . .
RUN bun run build

# Runner stage: production image
FROM oven/bun:1-slim AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
CMD ["bun", "run", "start"]


#Dev build commands:
#podman build -t asm2-dev --target dev .
#podman run -it -p 3000:3000 -v $(pwd):/app asm2-dev


#Prod build commands:
#podman build -t asm2 .
#podman run -p 3000:3000 asm2
