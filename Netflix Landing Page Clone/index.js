const tabItems = document.querySelectorAll('.tab-item')
const tabContentItems = document.querySelectorAll('.tab-content-item')

//
function selectItem (e) {
    // to remove the border
    removeBorder();

    //to remoe show 
    removeShow();

    //to add the border
    this.classList.add('tab-border');

    //grab content item from DOM
    const tabContentItem = document.querySelector( `#${this.id}-content`);
    tabContentItem.classList.add('show') //add show class to the id 
}

function removeBorder () {
    tabItems.forEach( item => item.classList.remove('tab-border'));
}

function removeShow () {
    tabContentItems.forEach( item => item.classList.remove('show'));
}

//Listen to tab Click 
tabItems.forEach( item => item.addEventListener('click', selectItem));