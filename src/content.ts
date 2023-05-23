import { Messages } from "./constants";
import solveWorksheet from "./solve";
import { injectScript } from "./utils";

const validMessages: string[] = [
    Messages.solveWorksheet,
    Messages.checkSolution,
];

const handleRuntimeMessage = (message: string): void => {
    if (validMessages.includes(message)) {
        window.postMessage({ message });
    }
};

const handleWindowMessage = (event: MessageEvent): void => {
    if (event.data.message === Messages.holdAnswers) {
        solveWorksheet(event.data.answers);
    }
};

injectScript("inject.js");
chrome.runtime.onMessage.addListener(handleRuntimeMessage);
window.addEventListener("message", handleWindowMessage);
