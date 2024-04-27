import { useSelector } from "react-redux"


export const useUser = () => {
    const {email, token, id, name, avatar} = useSelector((state) => state.user)
    

    return {
        isAuth : !!email,
        email,
        token,
        id,
        name,
        avatar
    }

}