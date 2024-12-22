chrome.storage.sync.get(
    ['sprintGoalAsTitle'],
    (items) => {
        if(items.sprintGoalAsTitle){
            // Await jira is ready
            setTimeout(function(){
                replaceAriaLabelByTitle()
            }, 2000);
        }
    }
);

const replaceAriaLabelByTitle = () => {
    const titles = document.querySelectorAll('[data-testid="software-board.header.title.container"]');

    if(titles.length <= 0){
        return;
    }

    const title = titles[0];

    const nextElement = title.nextSibling;

    if(nextElement.hasAttribute("aria-label")){
        const content = nextElement.getAttribute("aria-label");
        nextElement.setAttribute("title", content);
        nextElement.removeAttribute("aria-label");
    }
}