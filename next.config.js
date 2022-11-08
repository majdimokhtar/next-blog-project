const { PHASE_DEVELOPMENT_SERVER } = require("next/constants")

module.exports = (phase) => {
    if (phase ===PHASE_DEVELOPMENT_SERVER ) {
        return {
            env: {
              mongodb_username: "majdi-next",
              mongodb_password: "8BffHQXbs8hDkesj",
              mongodb_cluster: "cluster0",
              mongodb_database_key: "my-blog-dev",
            }
          }
    }
  return {
    env: {
      mongodb_username: "majdi-next",
      mongodb_password: "8BffHQXbs8hDkesj",
      mongodb_cluster: "cluster0",
      mongodb_database_key: "my-blog",
    },
  }
}
