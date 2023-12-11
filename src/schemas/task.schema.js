import { z } from "zod";

export const createTaskSchema = z.object({
  titulo: z.string({
    required_error: "El titulo es requerido",
  }),
  descripcion: z.string({
    required_error: "La descripción se espera que sea un string",
  }),
  fecha: z.string().datetime().optional(),
});
