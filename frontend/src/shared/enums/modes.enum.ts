import { z } from "zod/v4";

export const ModesEnum = z.enum(["dark", "light", "system"]);

export type ModesEnum = z.infer<typeof ModesEnum>;
