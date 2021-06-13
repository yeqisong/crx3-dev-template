import demo from './demo'
chrome.runtime.onInstalled.addListener(() => {
    console.log('[crx3] background.js is running...')
    demo()
})
