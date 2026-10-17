const prefix = process.env.PATH_PREFIX || "/";
export default {
  pathPrefix: prefix,
  // Mientras el sitio viva en una URL provisoria (aarcardini.github.io/arar.uy) no se indexa,
  // para no duplicar contenido con arar.uy. Con dominio propio el prefijo es "/" y se indexa.
  noindex: prefix !== "/" || process.env.NOINDEX === "1",
  buildYear: new Date().getFullYear(),
};
