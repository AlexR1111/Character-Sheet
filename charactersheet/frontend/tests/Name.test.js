import { describe, it, expect, vi } from "vitest";
import { JSDOM } from "jsdom";

describe("Speichern des Namens", () => {
    it("sollte eine POST-Anfrage senden, wenn der Button geklickt wird", async () => {
        const dom = new JSDOM(`<!DOCTYPE html><body><input id="Cname" type="text" placeholder="Name"><button id="saveButton">Save</button></body>`);
        global.document = dom.window.document;

        global.fetch = vi.fn(() =>
            Promise.resolve({ ok: true, json: () => Promise.resolve({ name: "Boblin the Goblin" }) })
        );

        const input = document.getElementById("Cname");
        const button = document.getElementById("saveButton");

        button.addEventListener("click", async () => {
            await fetch("http://localhost:3000/api/characters", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: input.value })
            });
        });

        input.value = "Boblin the Goblin";
        button.click();

        expect(global.fetch).toHaveBeenCalledWith("http://localhost:3000/api/characters", expect.any(Object));
    });
});
