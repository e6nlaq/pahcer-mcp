import { FastMCP } from "fastmcp";
import { z } from "zod";
import packageJson from "../package.json";

export const server = new FastMCP({
	name: "Pahcer MCP Server",
	version: packageJson.version as `${number}.${number}.${number}`,
});

server.addTool({
	name: "add",
	description: "Add two numbers",
	parameters: z.object({
		a: z.number(),
		b: z.number(),
	}),
	execute: async (args) => {
		return String(args.a + args.b);
	},
});
