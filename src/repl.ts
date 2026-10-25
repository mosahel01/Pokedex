// this function takes an input as string
// returns the string into an array of singular strings

import { createInterface } from "node:readline";

export function cleanInput(input: string) {
    return input
        .toLowerCase()
        .trim()
        .split(" ")
        .filter((word) => word !== "");
}

export function startREPL() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });

    rl.prompt();

    rl.on("line", async (input) => {
        const words = cleanInput(input);
        if (words.length === 0) {
            rl.prompt();
            return;
        }

        const commandName = words[0];
        console.log(`Your command was: ${commandName}`);
        rl.prompt();
    });
}
