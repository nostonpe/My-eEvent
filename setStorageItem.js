const setStorageItem = (name, item) => {
    localStorage.setItem(name, JSON.stringify(item));
}

export { setStorageItem };