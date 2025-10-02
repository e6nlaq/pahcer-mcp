import {test, expect} from "bun:test";
import {isInstalledPahcer} from "../src/pahcer";

test.if(process.env.INSTALLED_PAHCER === "true")("pahcer is installed", async () => {
    expect(await isInstalledPahcer()).toBe(true);
})

test.if(process.env.INSTALLED_PAHCER === undefined)("pahcer is not installed", async () => {
    expect(await isInstalledPahcer()).toBe(false);
})

