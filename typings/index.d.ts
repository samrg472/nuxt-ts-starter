declare namespace NodeJS {
  interface Process {
    // Values populated by Nuxt.js to determine the environment
    server: boolean;
    client: boolean;
    static: boolean;

  }
}

declare var process: NodeJS.Process;
