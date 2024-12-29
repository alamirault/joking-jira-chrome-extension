import waitForElement from '../common/waitForElement'

chrome.storage.sync.get(
    ['disableEmojiAutocomplete'],
    (items) => {
        if(items.disableEmojiAutocomplete){
            disableEmojiAutocomplete();
        }
    }
);

const disableEmojiAutocomplete = () => {

    const selector = '.ProseMirror';

    const handleKeyUpEvent = (event: Event) => {
        // @ts-expect-error -> Unresolved variable key
        if (event.key === ':') {
            const activeElement = document.activeElement;
            if (activeElement) {
                const spaceEvent = new KeyboardEvent('keydown', {
                    key: ' ',
                    code: 'Space',
                    bubbles: true,
                    cancelable: false,
                });
                activeElement.dispatchEvent(spaceEvent);
            }
        }
    };


    waitForElement(selector).then((title:  Element | null) => {

        console.info('Hello prose miror 1');

        const proseMirrorElement: Element | null = document.querySelector('.ProseMirror');

        if(proseMirrorElement) {

            proseMirrorElement.addEventListener('keyup', handleKeyUpEvent, { passive: true });
        }
    });
}