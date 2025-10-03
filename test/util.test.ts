import { describe, it, expect, beforeAll, afterAll } from "bun:test";
import { mkdir, rm } from "node:fs/promises";
import { directoryExists } from "../src/util";

describe("directoryExists", () => {
	const tempDir = "temp-test-dir";

	beforeAll(async () => {
		await mkdir(tempDir, { recursive: true });
	});

	afterAll(async () => {
		await rm(tempDir, { recursive: true, force: true });
	});

	it("should return true for an existing directory", async () => {
		expect(await directoryExists(tempDir)).toBe(true);
	});

	it("should return false for an existing file", async () => {
		expect(await directoryExists("package.json")).toBe(false);
	});

	it("should return false for a non-existent path", async () => {
		expect(await directoryExists("non-existent-path")).toBe(false);
	});

	it("should return false after a directory is deleted", async () => {
		const newDir = "another-temp-dir";
		await mkdir(newDir, { recursive: true });
		expect(await directoryExists(newDir)).toBe(true);
		await rm(newDir, { recursive: true, force: true });
		expect(await directoryExists(newDir)).toBe(false);
	});
});
