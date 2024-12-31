import waitForElement from "../common/waitForElement";

chrome.storage.sync.get(["disableEmojiAutocomplete"], (items) => {
  if (chrome.runtime.lastError) {
    console.error("Failed to fetch settings:", chrome.runtime.lastError);
    return;
  }
  if (items.disableEmojiAutocomplete) {
    disableEmojiAutocomplete();
  }
});

const disableEmojiAutocomplete = () => {
  const handleKeyUpEvent = (event: Event) => {
    // @ts-expect-error -> Unresolved variable key
    if (event.key === ":") {
      const activeElement = document.activeElement;
      if (activeElement) {
        const spaceEvent = new KeyboardEvent("keydown", {
          key: " ",
          code: "Space",
          bubbles: true,
          cancelable: false,
        });
        activeElement.dispatchEvent(spaceEvent);
      }
    }
  };

  const selector = ".ProseMirror";
  waitForElement(selector).then((proseMirrorElement: Element | null) => {
    if (proseMirrorElement) {
      proseMirrorElement.addEventListener("keyup", handleKeyUpEvent, {
        passive: true,
      });
    }
  });
};
