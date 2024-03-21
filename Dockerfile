FROM node:20.11.1-alpine
# Use Docker Buildkit for faster build times (https://docs.docker.com/build/buildkit/)
ENV DOCKER_BUILDKIT=1

WORKDIR /app
ENV NODE_ENV=production

# Installing the necessary dependencies
COPY --link package*.json .
RUN npm ci

# cp app
COPY --link . .

EXPOSE 3000

CMD [ "npm", "start" ]