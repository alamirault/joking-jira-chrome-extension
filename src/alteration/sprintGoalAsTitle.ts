import waitForElement from "../common/waitForElement";

chrome.storage.sync.get(["sprintGoalAsTitle"], (items) => {
  if (chrome.runtime.lastError) {
    console.error("Failed to fetch settings:", chrome.runtime.lastError);
    return;
  }
  if (items.sprintGoalAsTitle) {
    replaceAriaLabelByTitle();
  }
});

const replaceAriaLabelByTitle = () => {
  const selector = '[data-testid="software-board.header.title.container"]';

  waitForElement(selector).then((title: Element | null) => {
    if (title?.nextElementSibling) {
      const nextElement: Element = title.nextElementSibling;

      if (nextElement.hasAttribute("aria-label")) {
        const content = nextElement.getAttribute("aria-label") || "";
        nextElement.setAttribute("title", content);
        nextElement.removeAttribute("aria-label");
      }
    }
  });
};
