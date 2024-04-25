import { useSelector } from "react-redux"


export const useUser = () => {
    const {email, token, id} = useSelector((state) => state.user)
    

    return {
        isAuth : !!email,
        email,
        token,
        id
    }

}