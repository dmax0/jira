import { Button, Card, Divider } from "antd";
import { useState } from "react"
import { LoginScreen } from "./login";
import { RegisterScreen } from "./register";
import logo from "assets/logo.svg";
import left from "assets/left.svg";
import styled from '@emotion/styled'
export const UnauthenticatedApp = () => {
    const [isRegister, setIsRegister] = useState(false);
    return <Container >
        <Header />
        
        <ShadowCard>
        <Title >
            {isRegister ? "注册": "登录"}
        </Title>
        {
            isRegister ? <RegisterScreen /> : <LoginScreen />
        }
        <Divider />
        <a href="/#"  style={{marginTop:"20px"}} onClick={() => setIsRegister(!isRegister)}>{
        isRegister ? '已有账号？立即登录' : '还没有账号？立即注册'
        }</a>
        </ShadowCard>
    </Container>
}


export const LongButton = styled(Button)`
width: 100%;
`
const Title = styled.h2`
margin-bottom: 2.4rem;
color: #800080;
`
const BackGround = styled.div`
position: absolute;
width: 100%;
height: 100%;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: left bottom, right bottom;
background-size: 10rem;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
`
const ShadowCard = styled(Card)`
width: 40rem;
min-height: 56rem;
padding: 3.2rem 4rem;
border-radius: 0.3rem;
box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
text-align: center;
`

const Header = styled.header`
background: url(${logo}) no-repeat center;
padding: 5rem 0;
background-size: 8rem;
width: 100%;
`