import { OpenAPIHono } from "@hono/zod-openapi";

import * as handlers from "./handlers";
import configureOpenAPI from "./lib/openapi";
import * as routes from "./routes";

const app = new OpenAPIHono({ strict: false });

configureOpenAPI(app);

app.openapi(routes.base, handlers.base);

export { app };
