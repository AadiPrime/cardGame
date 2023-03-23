const cardObjectDefinition = [
    {id:1, imagePath:'/images/card-KingHearts.png'},
    {id:2, imagePath:'/images/card-JackClubs.png'},
    {id:3, imagePath:'/images/card-Queen-Diamond.png'},
    {id:4, imagePath:'/images/card-AceSpades.png'}, 
]
const cardBackImgPath = '/images/card-back-Blue.png'

function createCard(cardItem){
    const cardElem = createElement('div');
    const cardInnerElem = createElement('div');
    const cardFrontElem = createElement('div');
    const cardBackElem = createElement('div');
   
    // front & back img element for cards
    const cardFrontImg = createElement('img');
    const cardBackImg = createElement('img');

    //add class & id to card element
    addClassToElement(cardElem, 'card');
    addIdToElement(cardElem, cardItem.id);

    //add class to inner card element
    addClassToElement(cardInnerElem, 'card-inner')

    //add class to front card element
    addClassToElement(cardFrontElem, 'card-front');

    //add class to back card element 
    addClassToElement(cardBackElement, 'card-back');

    //add src attribute and appropriate value to img element - back of card
    addSrcToImgElement(cardBackElem, cardBackImgPath)

    //add src attribute and appropriate value to img element - front of card
    addSrcToImgElement(cardFrontElem, cardItem.imagePath)

    //assign class to back img element of back of card
    addClassToElement(cardBackElem, 'card-img')

    //assign class to front img element of front of card
    addClassToElement(cardFrontElem, 'card-img')

     //add front img element as child element to back card element
    addChildElement(cardFrontElem, cardFrontImg)

    //add back img element as child element to back card element
    addChildElement(cardBackElem, cardBackImg)

    //add front card element as child element to inner card element
    addChildElement(cardInnerElem, cardFrontElem)

    //add back card element as child element to inner card element
    addChildElement(cardInnerElem, cardBackElem)


}

function createElement(elemType){
    return document.createElement(elemType);
}
function addClassToElement(elem, className){
    elem.classList.add(className)
}
function addIdToElement(elem, id){
    elem.id = id
}