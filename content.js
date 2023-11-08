chrchrome.action.onClicked.addListener(async (tab) => {
    // Get the current tab
    const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true });

    // Catch errors 
    try {
        // Execute the content script to redirect the page
        chrome.scripting.executeScript({
            target: { tabId: activeTab.id },
            function: () => {
                const videoTitleElement = document.querySelector('h1.title');

                if (videoTitleElement && /(?:asmr|roleplay)/i.test(videoTitleElement.innerText)) {
                    window.location.href = 'https://www.youtube.com/watch?v=dtQd7j_WMz0';
                };
            },
            // Run the script at document_end
            runAt: 'document_end'
        });
    } catch (error) {
        return console.error(error);
    };
});