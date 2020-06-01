module.exports =  {
  env: {
    doc: "El ambiente de la aplicación.",
    format: ["production", "development", "test"],
    default: "development",
    env: "NODE_ENV"
  },
  port: {
    doc: "El puerto para usar.",
    format: "port",
    default: 4000,
    env: "PORT"
  },
  reactApp: {
    urlApi: {
      doc: "La url de la api para consultar datos.",
      format: String,
      default: 'http:url/api',
      env: "URL_API"
    }
  }
}
