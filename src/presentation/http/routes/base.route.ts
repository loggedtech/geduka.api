import { createRoute } from "@hono/zod-openapi";

import { BaseSchema } from "../schemas";

export const base = createRoute({
	path: "/",
	method: "get",
	operationId: "getBase",
	responses: {
		200: {
			content: {
				"application/json": {
					schema: BaseSchema,
				},
			},
			description: "The base of example route",
		},
	},
	tags: ["Base"],
});

export type BaseRoute = typeof base;
