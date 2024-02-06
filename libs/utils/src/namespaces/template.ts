export const templatesList = [
  "azurill",
  "tarun",
  "bronzor",
  "chikorita",
  "ditto",
  "gengar",
  "glalie",
  "kakuna",
  "leafish",
  "nosepass",
  "onyx",
  "pikachu",
  "rhyhorn",
] as const;


export type Template = (typeof templatesList)[number];
