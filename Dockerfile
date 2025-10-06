FROM oven/bun:1 AS base
WORKDIR /app
COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile

FROM base AS builder
COPY . .
RUN bun run build

FROM oven/bun:1-slim AS runner
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD ["bun", "run", "start"]
