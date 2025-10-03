import { stat } from "node:fs/promises";

/**
 * Checks if a directory exists at the given path.
 * @param path The path to check.
 * @returns A promise that resolves to true if the path is a directory, false otherwise.
 */
export async function directoryExists(path: string): Promise<boolean> {
	try {
		const stats = await stat(path);
		return stats.isDirectory();
	} catch (error: any) {
		if (error.code === "ENOENT") {
			return false;
		}
		throw error;
	}
}
