import {createProjectsCard,} from "./main.js";
import {renderShowPagination,paginationReverseLeaf,paginationLeaf} from "./pag.js"
let searchInput = document.querySelector('.search__input')
let search = document.querySelector('.search')
let localStorageList = JSON.parse(localStorage.getItem('list'))



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
// searchButton.addEventListener('click', getProjects)

document.addEventListener('click', event => {
    if (event.target.className === 'pagination__right') {
        paginationLeaf()
    }
    if (event.target.className === 'pagination__left') {
        paginationReverseLeaf()
    }

})