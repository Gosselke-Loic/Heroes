import init from "./instance";

//interceptor check status 200 from all request
init.interceptors.response.use(function(response) {
    if(response.status === 200) {
       return response;
    }
}, function(error) {
    return Promise.reject(error.response.data.error);
})

/**
 * 
 * @param {string} url string with path to request
 * @param {string} params id to fetch single hero
 * @returns {Promise} object or Array of objects
 */
const get = async (url, params) => {
    try {
        if(params !== undefined) {
            console.log("[axios][get] Request sended with params", params);
            return await init.get(url + params);
        } else{
            console.log("[axios][get] Request sended");
            return await init.get(url);
        }
    }catch (err) {
        console.log("[axios][get] An error was occured when trying to fetch request", err);
        throw new Error(err);
    }
};

/**
 * send request to create new hero
 * @param {string} url 
 * @param {object} newHero 
 * @param {string} token 
 * @returns {Promise} response from the request 
 */
const post = async (url, newHero, token) => {
    try {
        console.log("[axios][post] Post request sended with this values");
        return await init.post(url, newHero, {
            headers: {
                Authorization : `Bearer ${token}`
            }
        });
    } catch(err) {
        console.log("[axios][post] An error was occured when trying to fetch post request", err);
        throw new Error(err);
    }
};

/**
 * send request to update a hero
 * @param {string} url 
 * @param {string} token 
 * @returns {Promise} response from delete request
 */
const remove = async (url, token) => {
    try {
        console.log("[axios][remove] Remove request sended");
        return await init.delete(url, {
            headers: {
                Authorization : `Bearer ${token}`
            }
        });
    } catch(err) {
        console.log("[axios][remove] An error was occured when trying to fetch remove request", err);
        throw new Error(err);
    }
};

/**
 * 
 * @param {string} url 
 * @param {object} updateHero 
 * @param {string} token 
 * @returns {Promise} response from update request
 */
const update = async (url, updateHero, token) => {
    try {
        console.log("[axios][update] update request sended");
        return await init.patch(url, updateHero, {
            headers: {
                Authorization : `Bearer ${token}`
            }
        });
    } catch(err) {
        console.log("[axios][update] An error was occured when trying to fetch update request", err);
        throw new Error(err);
    }
}

export { get, post, remove, update };