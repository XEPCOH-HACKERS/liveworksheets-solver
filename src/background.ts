import { ContextMenuItemIds, Messages } from "./constants";

const createContextMenu = (id: string) => {
    chrome.contextMenus.create(
        {
            id: id,
            title: chrome.i18n.getMessage(id),
            documentUrlPatterns: ["*://*.liveworksheets.com/*"],
            contexts: ["all"],
        },
        () => void chrome.runtime.lastError
    );
};

ContextMenuItemIds.forEach(createContextMenu);

chrome.contextMenus.onClicked.addListener((info, tab) => {
    const tabId = tab?.id as number;
    const message = Messages[info.menuItemId as keyof typeof Messages];

    if (message) {
        chrome.tabs.sendMessage(tabId, message);
    }
});

const action = chrome.browserAction ?? chrome.action; // MV2 or MV3

action.onClicked.addListener((tab) => {
    chrome.tabs.sendMessage(tab.id as number, Messages.solveWorksheet);
});
