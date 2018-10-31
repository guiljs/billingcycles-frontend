export function selectTab(tabId) { //Usado lá no tabHeader.jsx
    
    return {
        type: 'TAB_SELECTED', //Tem que ser igual ao que o Reducer está ouvindo.
        payload: tabId
    }
}

export function showTabs(...tabIds){
    const tabsToShow = {} 
    tabIds.forEach(e => tabsToShow[e] = true);

    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}