import { TelegramMarkdown } from "../markdown/";

describe("TelegramMarkdown", () => {
    it("should return bold text", () => {
        expect(TelegramMarkdown.bold("idk")).toBe("**idk**");
    });

    it("should return code text without lang", () => {
        expect(TelegramMarkdown.code("idk")).toBe("```\nidk```");
        expect(TelegramMarkdown.code("meow")).toBe("```\nmeow```");
        expect(TelegramMarkdown.code("woow!")).toBe("```\nwoow!```");
    });

    it("should return code with lang", () => {
        expect(TelegramMarkdown.code("idk", "ts")).toBe("```ts\nidk```");
    });

    it("should return cursive text", () => {
        expect(TelegramMarkdown.cursive("idk")).toBe("__idk__");
    });

    it("should return spoiler", () => {
        expect(TelegramMarkdown.silent("idk")).toBe("||idk||");
        expect(TelegramMarkdown.spoiler("idk")).toBe("||idk||");
    });

    it("should return crossed out text", () => {
        expect(TelegramMarkdown.crossedOut("idk")).toBe("~~idk~~");
    });

    it("should return monospace text", () => {
        expect(TelegramMarkdown.monospace("idk")).toBe("`idk`");
    });
});
