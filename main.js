import {dataRequest} from "./script.js";

let userDataCard = document.querySelector('.user-data-card')

let i = 0

export function createProjectsCard() {
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
            //taskBRanch
        let userName = document.createElement('div')
        userName.className = 'user-name'
        let img = document.createElement('img')
        img.className = 'avatar'
        img.src = dataRequest[i].owner.avatar_url
        let user = document.createElement('a')
        user.textContent = dataRequest[i].owner.login
        user.href = `https://github.com/${dataRequest[i].owner.login}`
        user.target = '_blank'
        user.className =  'user'
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

function listPaginator() {
    let indexPage = document.querySelector('.index-page')

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
}

