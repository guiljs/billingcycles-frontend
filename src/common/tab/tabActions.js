export function selectTab(tabId) { //Usado lá no tabHeader.jsx
    
    return {
        type: 'TAB_SELECTED', //Tem que ser igual ao que o Reducer está ouvindo.
        payload: tabId
    }
}