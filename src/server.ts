import { $ } from "bun";
import { FastMCP } from "fastmcp";
import * as z from "zod";
import packageJson from "../package.json";
import { directoryExists, pwd } from "./util";

export const server = new FastMCP({
	name: "Pahcer MCP Server",
	version: packageJson.version as `${number}.${number}.${number}`,
});

server.addTool({
	name: "change_project_directory",
	description: "Change the project directory",
	parameters: z.object({
		fullpath: z.string().refine((path) => directoryExists(path), { error: "Directory does not exist" }),
	}),
	execute: async (args) => {
		await $.cwd(args.fullpath);
	},
});

server.addTool({
	name: "get_project_directory",
	description: "Get the project directory",
	parameters: z.object({}),
	execute: async () => {
		return await pwd();
	},
});
