import { $ } from "bun";

export async function isInstalledPahcer() {
	const { exitCode } = await $`pahcer --version`.nothrow().quiet();
	return exitCode === 0;
}
