import {createProjectsCard, paginationLeaf, paginationReverseLeaf, renderShowPagination} from "./main.js";

let searchInput = document.querySelector('.search__input')
let searchButton = document.querySelector('.search__button')
let search = document.querySelector('.search')


// let canOrNo = true


export let dataRequest = []

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
// searchButton.addEventListener('click', getProjects)

document.addEventListener('click', event => {
    console.log(event.target.className)


    if (event.target.className === 'pagination__right') {
        paginationLeaf()
    }
    if (event.target.className === 'pagination__left') {
        paginationReverseLeaf()
    }

})