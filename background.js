chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete' && tab.url.includes('https://www.youtube.com/watch') && tab.title.includes('asmr')) {
        chrome.tabs.update(tabId, { url: 'https://www.youtube.com/watch?v=dtQd7j_WMz0' });
    }
});
