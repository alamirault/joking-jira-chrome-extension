const waitForElement = (selector: string) => {
    return new Promise< Element | null>((resolve) => {
        const interval = setInterval(() => {
            const element = document.querySelector(selector);
            if (element) {
                clearInterval(interval);
                resolve(element);
            }
        }, 600);
    });
}

export default waitForElement;