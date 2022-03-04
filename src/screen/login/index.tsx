import { FormEvent } from "react";
const baseUrl = process.env.REACT_APP_API_URL;
export const LoginScreen = () => {

    const login = (param: {username: string, password: string}) => {
        fetch(`${baseUrl}/regiser`,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(param)
        }).then(async response => {
            if (response.ok) {
                
            }else {
                
            }
            console.log(response)
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            console.log('finally')
        })
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const username = (event.currentTarget.elements[0] as HTMLInputElement).value;
        const password  = (event.currentTarget.elements[1] as HTMLInputElement).value;
        login({username, password})
    } 
    return <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">用户名</label>
            <input type="text" name="username" id="username" />
        </div>
        <div>
            <label htmlFor="password">密码</label>
            <input type="password" name="password" id="password" />
        </div>
        <button type="submit">注册</button>
    </form>
};
