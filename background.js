chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url.toLowerCase().includes('https://www.youtube.com/watch') && /(?:asmr)/i.test(tab.title)) {
        try {
            chrome.tabs.update(tabId, { url: 'https://www.youtube.com/watch?v=dtQd7j_WMz0' });
        } catch (error) {
            console.error(error);
        };
    };
});