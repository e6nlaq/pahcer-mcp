import { Command } from "@commander-js/extra-typings";
import { $ } from "bun";
import packageJson from "../package.json";
import { isInstalledPahcer } from "./pahcer";
import { server } from "./server";

const program = new Command().option("-c, --cwd <path>", "Set the project directory");

program.name(packageJson.name).description(packageJson.description).version(packageJson.version);

program.parse();

const options = program.opts();

if (options.cwd !== undefined) {
	$.cwd(options.cwd);
}

if (!(await isInstalledPahcer())) {
	console.error(
		"Pahcer is not installed.\nFollow the instructions on https://github.com/terry-u16/pahcer/?tab=readme-ov-file to install it.",
	);
	process.exit(1);
}

server.start({ transportType: "stdio" });
