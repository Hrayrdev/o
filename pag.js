import {createProjectsCard} from "./main.js";

let paginationMain = document.querySelector('.pagination-main')
let localStoragePage = JSON.parse( localStorage.getItem('page'))

export function renderShowPagination() {
    paginationMain.innerHTML = ''
    let pagination = document.createElement('div')
    pagination.className = 'pagination'
    let paginationLeftDiv = document.createElement('div')
    let paginationLeft = document.createElement('img')
    paginationLeft.className = 'pagination__left'
    paginationLeft.src = './image/стрелочка-влево.png'
    paginationLeftDiv.appendChild(paginationLeft)
    let indexPreviousPage = document.createElement('div')
    indexPreviousPage.className = 'index-previous-page'

    let indexPage = document.createElement('div')
    indexPage.className = 'index-page'
    if (localStoragePage){
        indexPage.textContent = localStoragePage
    } else {
        indexPage.textContent = 1
    }
    if (localStoragePage > 1) {
        indexPreviousPage.textContent = Number(indexPage.textContent ) - 1
    }
    let indexNextPage = document.createElement('div')
    indexNextPage.className = 'index-next-page'
    if (localStoragePage < 5){
        indexNextPage.textContent = Number(indexPage.textContent ) + 1
    }


    let paginationRightDiv = document.createElement('div')
    let paginationRight = document.createElement('img')
    paginationRight.src = './image/стрелочка-вправо.png'
    paginationRight.className = 'pagination__right'
    paginationRightDiv.appendChild(paginationRight)

    pagination.appendChild(paginationLeftDiv)
    pagination.appendChild(indexPreviousPage)
    pagination.appendChild(indexPage)
    pagination.appendChild(indexNextPage)
    pagination.appendChild(paginationRightDiv)
    paginationMain.appendChild(pagination)
}

export function paginationReverseLeaf() {
    let indexPage = document.querySelector('.index-page')
    let indexNextPage = document.querySelector('.index-next-page')
    let indexPreviousPage = document.querySelector('.index-previous-page')
    if (Number(indexPage.textContent) === 1) {
        return
    }
    if (indexPreviousPage.textContent > 1) {
        indexNextPage.textContent = indexPage.textContent
        indexPage.textContent = indexPreviousPage.textContent
        indexPreviousPage.textContent = Number(indexPreviousPage.textContent) - 1


    } else {
        indexNextPage.textContent = 2
        indexPage.textContent = 1
        indexPreviousPage.textContent = undefined
    }
    localStorage.setItem('page', JSON.stringify(indexPage.textContent))
    createProjectsCard()
}
export function paginationLeaf() {
    let indexPage = document.querySelector('.index-page')
    let indexNextPage = document.querySelector('.index-next-page')
    let indexPreviousPage = document.querySelector('.index-previous-page')
    if (Number(indexPage.textContent) === 5) {
        return
    }
    if (indexNextPage.textContent < 5) {
        indexPreviousPage.textContent = indexPage.textContent
        indexPage.textContent = indexNextPage.textContent
        indexNextPage.textContent = Number(indexNextPage.textContent) + 1
    } else {
        indexPreviousPage.textContent = 4
        indexPage.textContent = 5
        indexNextPage.textContent = undefined
    }
    localStorage.setItem('page', JSON.stringify(indexPage.textContent))
    createProjectsCard()
}


