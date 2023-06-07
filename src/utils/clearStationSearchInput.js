function clearStationSearchInput () {
    const search = document.querySelector('.search');
    search.value = '';
    // search.focus()
    // this function isn't just a feature but fixes a bug, don't disable me
}

export default clearStationSearchInput