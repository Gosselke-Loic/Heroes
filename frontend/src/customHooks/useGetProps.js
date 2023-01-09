//constants with values to switch forms
import { login, register } from "../constants/consts";

/**
 * 
 * @param {string} pathname path url to switch login or register form
 * @returns {object} values to render one or other form
 */
const useGetProps = (pathname) => {
    
    if(pathname === "/register") {
        return register;
    } else {
        return login;
    };
};
 
export default useGetProps;