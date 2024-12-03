import type { AppRouteHandler } from "../lib/types";
import type { BaseRoute } from "../routes";

export const base: AppRouteHandler<BaseRoute> = async (c) => {
	return c.json({ app: "Geduka Api", version: "1.0.0" }, 200);
};
