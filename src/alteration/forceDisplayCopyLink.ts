chrome.storage.sync.get(
    ['forceDisplayCopyLink'],
    (items) => {
        if (chrome.runtime.lastError) {
            console.error('Failed to fetch settings:', chrome.runtime.lastError);
            return;
        }
        if(items.forceDisplayCopyLink){
            forceDisplayCopyLink();
        }
    }
);

const forceDisplayCopyLink = () => {
    const style: string = `
        nav .issue_view_permalink_button_wrapper {
            opacity: 1;
            transform: none;
        }
    `;

    const styleTag = document.createElement('style');
    styleTag.textContent = style;
    document.head.append(styleTag);
}