import { Messages } from "./constants";
import { getElementsArray } from "./utils";

declare global {
    interface Window {
        contenidorellenado: string; // [["answer1", 0, ...], ["answer2", 1, ...]]
        comprobarRespuestas(numero: 0 | 1): void; // solve worksheet function
        heTerminado(): void; // default #capafinish button function
    }
}

document.body.oncontextmenu = null;
const finishButton = document.querySelector("#capafinish") as HTMLDivElement;
finishButton.onclick = (): void => {
    window.heTerminado();
    hideHintText();
};

function hideHintText(): void {
    const classNames: string[] = ["joindiv", "dragablediv", "dropdiv"];

    const elements = getElementsArray(classNames) as HTMLDivElement[];

    for (const element of elements) {
        element.style.color = "transparent";
    }
}

const handleMessage = (event: MessageEvent): void => {
    const { message } = event.data;

    switch (message) {
        case Messages.solveWorksheet:
            window.postMessage({
                message: Messages.holdAnswers,
                answers: window.contenidorellenado,
            });
            break;

        case Messages.checkSolution:
            hideHintText();
            window.comprobarRespuestas(1);
            break;
    }
};

window.addEventListener("message", handleMessage);
