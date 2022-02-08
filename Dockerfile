FROM node:14-slim
WORKDIR /app
RUN chown -R node:node /app
USER node
COPY --chown=node:node src/package.json src/yarn.lock /app/
RUN yarn install --frozen-lockfile \
 && npx next telemetry disable
COPY --chown=node:node src /app
RUN yarn build
EXPOSE 8080
ENTRYPOINT [ "yarn", "start" ]
