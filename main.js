const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');
const subtabs = document.getElementById('subtabs');
const subcontent = document.querySelectorAll('.subcontent');

const changeClass = el => {
    for(let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active'); 
    }
    el.classList.add('active');
}

const changeSubClass = s => {
    for(let i = 0; i < subtabs.children.length; i++) {
        subtabs.children[i].classList.remove('active'); 
    }
     s.classList.add('active');
}

tabs.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    changeClass(e.target);
    for(let i = 0; i < content.length; i++) {
        content[i].classList.remove('active');
        if(content[i].dataset.content === currTab) {
            content[i].classList.add('active');
        }
    }
   
})
subtabs.addEventListener('click', sub => {
    const currSubTab = sub.target.dataset.subbtn;
    changeSubClass(sub.target);
    for(let i = 0; i < subcontent.length; i++) {
        subcontent[i].classList.remove('active');
        if(subcontent[i].dataset.subcontent === currSubTab) {
            subcontent[i].classList.add('active');
        }
    }
   
})