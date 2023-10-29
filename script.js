import {createProjectsCard,} from "./main.js";
import {renderShowPagination, paginationReverseLeaf, paginationLeaf} from "./pag.js"
import {renderBloock,changeComment} from "./block.js";

let searchInput = document.querySelector('.search__input')
let search = document.querySelector('.search')
let localStorageList = JSON.parse(localStorage.getItem('list'))
let block = document.querySelector('.block')

export let dataRequest = []
if (localStorageList) {
    dataRequest = localStorageList
    // console.log(dataRequest)
    renderShowPagination()
    createProjectsCard()


}

function getProjects(callback) {
    dataRequest.splice(0, 30)

    fetch(`https://api.github.com/search/repositories?q=${searchInput.value}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
                for (let i = 0; i < 30; i++) {
                    dataRequest.push(data.items[i])
                }
                localStorage.setItem('list', JSON.stringify(dataRequest))

                renderShowPagination()

                callback()

                searchInput.value = ''
            }
        )

}


search.addEventListener('submit', event => {
    event.preventDefault()
    if (searchInput.value !== '') {
        getProjects(function () {
            createProjectsCard()
        })
    }
})

document.addEventListener('click', event => {
        if (event.target.className === 'pagination__right') {
            paginationLeaf()
        }
        if (event.target.className === 'pagination__left') {
            paginationReverseLeaf()
        }

        if (event.target.className === 'edit') {
            renderBloock(event.target.parentNode.parentNode.parentNode, event.target.parentNode.parentNode.parentNode.lastChild.firstChild)
            console.log(event.target.parentNode.parentNode.parentNode.lastChild.firstChild)
        }

        if (event.target.className === 'save') {
            changeComment()
        }

    }
)