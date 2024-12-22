// Saves options to chrome.storage
const saveOptions = () => {
    const disableEmoji = document.getElementById('disableEmoji').checked;
    const sprintGoalAsTitle = document.getElementById('sprintGoalAsTitle').checked;

    chrome.storage.sync.set(
        {
            disableEmoji: disableEmoji,
            sprintGoalAsTitle: sprintGoalAsTitle
        },
        () => {
            // Update status to let user know options were saved.
            const status = document.getElementById('status');
            status.textContent = 'Options saved.';
            setTimeout(() => {
                status.textContent = '';
            }, 750);
        }
    );
};

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = () => {
    chrome.storage.sync.get(
        ['disableEmoji', 'sprintGoalAsTitle'],
        (items) => {
            document.getElementById('disableEmoji').checked = items.disableEmoji;
            document.getElementById('sprintGoalAsTitle').checked = items.sprintGoalAsTitle;
        }
    );
};

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
