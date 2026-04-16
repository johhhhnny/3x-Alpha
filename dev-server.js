#!/usr/bin/env node

import { spawn } from "child_process";
import { EOL } from "os";

const astro = spawn("astro", ["dev"], {
  stdio: ["inherit", "pipe", "pipe"],
  shell: true,
});

let serverReady = false;

// Monitor stdout for the "ready in" message
astro.stdout?.on("data", (data) => {
  const output = data.toString();
  process.stdout.write(output);

  if (!serverReady && output.includes("ready in")) {
    serverReady = true;
    // Extract port from the Local URL line
    const portMatch = output.match(/http:\/\/127\.0\.0\.1:(\d+)/);
    const port = portMatch ? portMatch[1] : "4321";

    // Display Keystatic admin URL
    console.log(EOL + "┃ CMS Admin   http://127.0.0.1:" + port + "/keystatic" + EOL);
  }
});

// Monitor stderr
astro.stderr?.on("data", (data) => {
  process.stderr.write(data);
});

astro.on("error", (error) => {
  console.error("Failed to start dev server:", error);
  process.exit(1);
});

astro.on("close", (code) => {
  process.exit(code || 0);
});
