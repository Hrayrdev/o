import {dataRequest} from "./script.js";

let userDataCard = document.querySelector('.user-data-card')
let paginationMain = document.querySelector('.pagination-main')

let i = 0

export function createProjectsCard() {
    console.log(dataRequest)
    userDataCard.innerHTML = ''
    listPaginator()
    let k = i + 6
    for (; i < k; i++) {
        let dataUser = document.createElement('div')
        dataUser.className = 'data-user'

        let projectsName = document.createElement('div')
        projectsName.className = 'project-name'
        let link = document.createElement('a')
        link.className = 'link'
        link.textContent = dataRequest[i].name
        link.href = dataRequest[i].svn_url
        link.target = '_blank'
        projectsName.appendChild(link)

        let userName = document.createElement('div')
        userName.className = 'user-name'
        let img = document.createElement('img')
        img.src = './image/Ellipse%201.svg'
        let user = document.createElement('a')
        user.textContent = dataRequest[i].owner.login
        user.href = `https://github.com/${dataRequest[i].owner.login}`
        user.target = '_blank'
        user.className = 'user'

        userName.appendChild(img)
        userName.appendChild(user)

        let userPopularity = document.createElement('div')
        userPopularity.className = 'user-popularity'
        let chosen = document.createElement('img')
        chosen.src = './image/звезда.png'
        let chosenCount = document.createElement('p')
        chosenCount.textContent = dataRequest[i].stargazers_count
        let watchers = document.createElement('img')
        watchers.src = "./image/глаза.png"
        let watchersCount = document.createElement('p')
        watchersCount.textContent = dataRequest[i].watchers
        userPopularity.appendChild(chosen)
        userPopularity.appendChild(chosenCount)
        userPopularity.appendChild(watchers)
        userPopularity.appendChild(watchersCount)

        let profileComment = document.createElement('div')
        profileComment.className = 'profile-comment'
        let profileCommentInput = document.createElement('input')
        profileCommentInput.className = 'profile-comment__input'
        profileCommentInput.placeholder = 'Комментарий к посту'
        let profileCommentButton = document.createElement('button')
        profileCommentButton.className = 'profile-comment__button'
        let imgCommentButton = document.createElement('img')
        imgCommentButton.src = './image/карандаш.png'
        profileCommentButton.appendChild(imgCommentButton)

        profileComment.appendChild(profileCommentInput)
        profileComment.appendChild(profileCommentButton)

        dataUser.appendChild(projectsName)
        dataUser.appendChild(userName)
        dataUser.appendChild(userPopularity)
        dataUser.appendChild(profileComment)

        userDataCard.appendChild((dataUser))




    }
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
    createProjectsCard()
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
    createProjectsCard()
}

function listPaginator() {
    let indexPage = document.querySelector('.index-page')
    console.log(indexPage.textContent)

    if (Number(indexPage.textContent) === 1) {

        i = 0
    }
    if (Number(indexPage.textContent) === 2) {
        i = 6
    }
    if (Number(indexPage.textContent) === 3) {
        i = 12
    }
    if (Number(indexPage.textContent) === 4) {
        i = 18
    }
    if (Number(indexPage.textContent) === 5) {
        i = 24
    }
    console.log(i)
}

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
    indexPage.textContent = 1
    let indexNextPage = document.createElement('div')
    indexNextPage.className = 'index-next-page'
    indexNextPage.textContent = 2
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
