FROM --platform=linux/x86-64 node:14-alpine AS build

WORKDIR /build

COPY package.json ./
RUN npm install

ENV NODE_ENV=production

COPY . .
RUN npm run build

# ------

FROM --platform=linux/x86-64 node:14-alpine AS production

ENV NODE_ENV=production

WORKDIR /app
COPY --from=build /build/package*.json ./
COPY --from=build /build/.next ./.next
COPY --from=build /build/public ./public

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]
