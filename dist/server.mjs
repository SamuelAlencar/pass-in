import {
  registerForEvents
} from "./chunk-2LZUB7L5.mjs";
import {
  errorHandler
} from "./chunk-E33JLYRM.mjs";
import {
  checkIn
} from "./chunk-6ZOTMBRN.mjs";
import {
  createEvent
} from "./chunk-VDA7Q7AZ.mjs";
import "./chunk-6SDRYWO3.mjs";
import {
  getAttendeeBadge
} from "./chunk-WVHUZFPA.mjs";
import {
  getEventAttendees
} from "./chunk-57KNJ4HZ.mjs";
import {
  getEvent
} from "./chunk-ESZL77IK.mjs";
import "./chunk-JRO4E4TH.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import fastifyCors from "@fastify/cors";
import { serializerCompiler, validatorCompiler, jsonSchemaTransform } from "fastify-type-provider-zod";
var app = fastify().withTypeProvider();
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    schemes: ["http"],
    info: {
      title: "pass.in API",
      description: "API para gerenciamento de eventos",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUI, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registerForEvents);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);
app.setErrorHandler(errorHandler);
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server running on http://localhost:3333");
});
