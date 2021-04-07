
const $ = document.querySelector.bind(document)


function tabNavigation(){

    const html = {
        links: [...$('.tabLink').children],
        contents: [...$('.tabContent').children],
        openTab: $('[data-default]')
    }

    function hideAllTabContent(){
        html.contents.forEach(section => {
            section.style.display = "none"
        })
    }
        
    function removeAllActiveClass(){
        html.links.forEach(tab => {
           tab.className = tab.className.replace("active", "") 
        })
    }
    function showCurrentTab(id){
        const tabcontent = $('#' + id)
        tabcontent.style.display = "block"
    }
    function selectTab(event){
        hideAllTabContent()
        removeAllActiveClass()
        const target = event.currentTarget
        showCurrentTab(target.dataset.id)
        target.className += "active"
    }

    function listenForChange(){
        html.links.forEach(tab => {
            tab.addEventListener('click',selectTab)
        })
    }
    function init(){
        hideAllTabContent()
        listenForChange()
        html.openTab.click()
    }

    return {init}
    
}



window.addEventListener('load', () =>{
    const TabNavigation = tabNavigation()
    TabNavigation.init()
})