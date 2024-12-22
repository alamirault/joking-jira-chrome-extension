chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set(
        {
            disableEmoji: true,
            sprintGoalAsTitle: false,
        }
    );
});
