import requests from "../../Utilites/api/services/httpServices";

class AuthService {
    authSignIn(body) {
        const res = requests.post(`auth-signin`, body);
        console.log('found data', res);
        return res;
    }

    singOut() {
        return requests.get(`/auth-logout`);
    }

    authRegistration(body) {
        return requests.post(`/auth-registration`, body);
    }

}

export default new AuthService();


// import { BaseAPI } from './baseAPI';



//     /**
//      * User Sign in
//      * @param phoneNumber
//      * @param password
//      * @returns
//      */
//     authSignin = (phoneNumber, password) =>
//         this.post('auth/login', { phoneNumber, password });

//     /**
//      * Check if user is authenticate
//      * @param ctx
//      * @returns
//      */

//     /**
//      * User Registration - First step
//      * @param firstName
//      * @param lastName
//      * @param mobileNumber
//      * @returns
//      */
//     authRegister = (firstName, lastName, phoneNumber, dateOfBirth, gender) =>
//         this.post('auth-register', { firstName, lastName, phoneNumber, dateOfBirth, gender, type: 'user' });

//     /**
//      * User Registration - Second step
//      * @param mobileNumber
//      * @param otp
//      * @returns
//      */
//     authVerifyOTP = (phoneNumber, otp) =>
//         this.post('auth/verify-otp', { phoneNumber, otp });

//     /**
//      * User Registration - Final step
//      * @param mobileNumber
//      * @param password
//      * @param confirmPassword
//      * @returns
//      */
//     authSetPassword = (phoneNumber, password, confirmPassword) =>
//         this.post('auth/set-password', {
//             phoneNumber,
//             password,
//             confirmPassword,
//             type: 'user',
//         });

//     /**
//      * User Reset Password - First step
//      * @param phoneNumber
//      * @returns
//      */
//     authPassReset = (phoneNumber) => this.post('auth/reset', { phoneNumber });

//     /**
//      * User Reset Password - Second step
//      * @param mobileNumber
//      * @param otp
//      * @returns
//      */
//     authPassVerifyOTP = (mobileNumber, otp) =>
//         this.post('auth/reset-otp-check', { mobileNumber, otp });

//     /**
//      * User Reset Password - Final step
//      * @param phoneNumber
//      * @param password
//      * @param confirmPassword
//      * @returns
//      */
//     authPassSetPassword = (phoneNumber, password, confirmPassword) =>
//         this.post('auth/reset-password', {
//             phoneNumber,
//             password,
//             confirmPassword,
//         });

//     firebaseAuth = (payload) => this.post('firebase-auth', payload);

// export const authAPI = new AuthAPI(process.env.REACT_APP_API_BASE_URL);