import { server } from "./server";
import { program } from "@commander-js/extra-typings";
import packageJson from "../package.json";
import { $ } from "bun";

program.name("pahcer-mcp");
program.version(packageJson.version);

program.option("-c, --cwd <path>", "Set the project directory");

program.parse();
