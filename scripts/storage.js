
async function getGithubUsername() {
    return await getObjectFromLocalStorage('BaekjoonHub_username');
}

async function getToken() {
    return await getObjectFromLocalStorage('BaekjoonHub_token');
}

async function getHook() {
    return await getObjectFromLocalStorage('BaekjoonHub_hook');
}

/**
 * @author https://gist.github.com/sumitpore/47439fcd86696a71bf083ede8bbd5466
 * Chrome의 Local StorageArea에서 개체 가져오기
 * @param {string} key
 */
async function getObjectFromLocalStorage(key) {
    return new Promise((resolve, reject) => {
        try {
            chrome.storage.local.get(key, function (value) {
                resolve(value[key]);
            });
        } catch (ex) {
            reject(ex);
        }
    });
}