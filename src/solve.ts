type AnswerArray = (string | number)[];

type ExerciseType =
    | "editablediv" // Enter the right answer & Speaking
    | "selectbox" // Drop down select box
    | "selectablediv" // Multiple choice
    | "tickbox" // Check boxes
    | "joindiv" // Join with arrows
    | "dragablediv" // Drag
    | "dropdiv"; // Drop

type ExerciseElement = HTMLDivElement | HTMLSelectElement;

type Exercise = {
    type: ExerciseType;
    element: ExerciseElement;
    answer: string;
};

import { getElementsArray } from "./utils";

export default function solveWorksheet(
    contenidorellenado: AnswerArray[]
): void {
    const exercises = getExercisesWithAnswers(contenidorellenado);

    for (const exercise of exercises) {
        const { element, answer } = exercise;

        switch (exercise.type) {
            case "editablediv":
                setEditableDiv(element as HTMLDivElement, answer);
                break;
            case "selectbox":
                setSelectBox(element as HTMLSelectElement, answer);
                break;
            case "selectablediv":
            case "tickbox":
                setClickExercise(element as HTMLDivElement, answer);
                break;
            case "joindiv":
                setJoinDiv(element as HTMLDivElement, answer);
                break;
            case "dragablediv":
            case "dropdiv":
                setDragableDiv(element as HTMLDivElement, answer);
                break;
        }
    }
}

function getExercisesWithAnswers(
    contenidorellenado: AnswerArray[]
): Exercise[] {
    const exercises: Exercise[] = [];

    const classNames = [
        "editablediv",
        "selectbox",
        "selectablediv",
        "tickbox",
        "joindiv",
        "dragablediv",
        "dropdiv",
    ];

    const elements = getElementsArray(classNames) as ExerciseElement[];

    for (const element of elements) {
        const answer = getAnswer(element, contenidorellenado);
        exercises.push({
            type: element.className as ExerciseType,
            element,
            answer,
        });
    }

    return exercises;
}

function getAnswer(element: HTMLElement, AnswerArray: AnswerArray[]): string {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const index = parseInt(element.id.match(/\d+/g)![0]);
    const rawAnswer = AnswerArray[index][0] as string;

    const answer: string = rawAnswer
        .replaceAll("$", "'")
        .replace(/(choose|select|tick|join):/, "")
        .replace(/^speak\([^)]*\):/, "");

    return answer;
}

function setEditableDiv(element: HTMLDivElement, answer: string): void {
    element.textContent = answer;
    element.blur();
}

function setSelectBox(element: HTMLSelectElement, answer: string): void {
    const options = answer.split("/");
    const selectIndex = options.findIndex((value) => value.startsWith("*"));

    element.selectedIndex = selectIndex + 1;
    element.blur();
}

function setClickExercise(element: HTMLDivElement, answer: string): void {
    if (answer === "yes") {
        element.click();
    }
}

function setJoinDiv(element: HTMLDivElement, answer: string): void {
    element.textContent = answer;
    element.style.fontSize = "xx-large";
    element.style.userSelect = "none";
    element.style.color = "green";
}

function setDragableDiv(element: HTMLDivElement, answer: string): void {
    const [exerciseType, index] = answer.split(":");
    element.textContent = index;
    element.style.fontSize = "xx-large";
    element.style.userSelect = "none";

    const isDragElement = exerciseType === "drag";
    element.style.color = isDragElement ? "blue" : "red";
}
