import {useUserAuthService} from "../Services/authservices";
import {useState} from "react";
import {useAuth} from "../Store/AuthContext";
import {useToast} from "../Store/NotificationContext";

interface Login {
    email: string;
    password: string;
}
export const useLogin = () => {
    const {dispatchLogin} =useAuth()
    const {postLogin} = useUserAuthService()
    const { showToast } = useToast();
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const login = async (payload: Login) => {
        if (isLoading) {
            return false;
        }

        let userResponse = null;
        setIsLoading(true)

        // const validateLogin = () => {
        //     if (payload.email !== 'kekere') {
        //         return false
        //     }
        //
        //     if (payload.password !== '12345') {
        //         return false
        //     }
        //
        //     return true
        // }

        try {
            const response = await postLogin(payload);
            console.log(response);
            userResponse = response?.data?.data;
            if (userResponse) {
                const { token } = userResponse;
                dispatchLogin(token)
                showToast('Success', 'This is a success toast notification', 'success');
            }

        } catch (e: any) {
            console.log(e)
            setError(e.message)
            showToast('Error', e.message, 'error');

        } finally {
            setIsLoading(false);
        }

        return userResponse;
    };

    return {
        login,
        isLoading,
        error
    }
}