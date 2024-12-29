function init() {
  chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set(
        {
            disableEmojiAutocomplete: true,
            sprintGoalAsTitle: true,
            forceDisplayCopyLink: true,
        }
    );
  });
}

init();
