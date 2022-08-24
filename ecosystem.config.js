module.exports = {
  apps: [
    {
      name: "portfolio-tracker",
      script: "node_modules/serve/bin/serve.js",
      args: "-s build -l 3001",
      exec_mode: "fork_mode",
    },
  ],
};
