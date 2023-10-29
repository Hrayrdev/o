let block = document.querySelector('.block')
let commetInputDom

export  function  renderBloock (card, comm) {
    let blockDiv = document.createElement("div")
    blockDiv.className = "block__div"

    let projectName = document.createElement('div')
    projectName.textContent = card.firstChild.textContent
    projectName.className = 'project-name'

    let userNameBlock = document.createElement('div')
    userNameBlock.className = 'user-name-block'
    let avatar = document.createElement('img')
    avatar.className = 'avatar'
    avatar.src = card.firstChild.nextSibling.firstChild.src
    let userBlock = document.createElement('p')
    userBlock.className = 'user-block'
    userBlock.textContent = card.firstChild.nextSibling.lastChild.textContent
    userNameBlock.appendChild(avatar)
    userNameBlock.appendChild(userBlock)

    let userPopularityBlock = document.createElement('div')
    userPopularityBlock.className = 'user-popularity-block'
    let stars = document.createElement('img')
    let starsCount = document.createElement('p')

    let eyes = document.createElement('img')
    let eyesCount = document.createElement('p')
    userPopularityBlock.appendChild(stars)
    userPopularityBlock.appendChild(starsCount)
    userPopularityBlock.appendChild(eyes)
    userPopularityBlock.appendChild(eyesCount)



    let profileCommentBlock = document.createElement('div')
    profileCommentBlock.className = 'profile-comment-block'
    let profileCommentInputBlock = document.createElement('input')
    profileCommentInputBlock.className = 'profile-comment__input-block'
    profileCommentInputBlock.value = comm.value
    profileCommentBlock.appendChild(profileCommentInputBlock)

    let buttons = document.createElement('div')
    buttons.className = 'buttons'
    let save = document.createElement('button')
    save.className = 'save'
    save.textContent = 'Сохранить'
    let del = document.createElement('button')
    del.className = 'del'
    del.textContent = 'Удалить'
    let cansel = document.createElement('button')
    cansel.className = 'cansel'
    cansel.textContent = 'Отмена'
    buttons.appendChild(save)
    buttons.appendChild(del)
    buttons.appendChild(cansel)

    blockDiv.appendChild(projectName)
    blockDiv.appendChild(userNameBlock)
    blockDiv.appendChild(userPopularityBlock)
    blockDiv.appendChild(profileCommentBlock)
    blockDiv.appendChild(buttons)
    block.appendChild(blockDiv)
    block.style.display = 'flex'
    commetInputDom = comm
}

export  function changeComment () {
    // let commentInput = document.querySelector('profile-comment__input')
    let commentBlock = document.querySelector('.profile-comment__input-block')
    console.log(commentBlock.parentNode.parentNode.firstChild.textContent)
    commetInputDom.value = commentBlock.value

    block.style.display = 'none'
    block.innerHTML = ''

}