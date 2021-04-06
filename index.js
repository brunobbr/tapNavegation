
const $ = document.querySelector.bind(document)


function tabNavigation(){

    const html = {
        links: $('#tabLink'),
        contents: $('#tabContent')
    }

    function hideAllTabContent(){
        const contents = [...html.contents.children]
        contents.forEach(section => {
            section.style.display = "none"
        })
    }
        
    function removeAllActiveClass(){

    }
    function showCurrentTab(){

    }
    function listenForChange(){

    }
    function init(){
        hideAllTabContent()
        listenForChange()
    }

    return {
        init()
    }
}



window.addEventListener('load',() =>{
    const tabNavigation = tabNavigation()
    tabNavigation.init()
})