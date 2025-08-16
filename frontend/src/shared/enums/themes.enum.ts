import { z } from "zod/v4";

export const ThemesEnum = z.enum(["zinc", "sunset"]);

export type ThemesEnum = z.infer<typeof ThemesEnum>;
