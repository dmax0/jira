import styled from "@emotion/styled"
import { Button, Dropdown, Menu } from "antd";
import { Row } from "components/lib";
import { useAuth } from "context/auth-context"
import { ProjectListScreen } from "screen/project-list"
import {ReactComponent as Logo} from 'assets/logo.svg';
export const AuthenticatedApp = () => {
    const {logout, user} = useAuth();
    return <Container>
        <Header between={true} >
            <HeaderLeft gap={true}>
                <Logo width={'10rem'} color={'#800080'}/>
                <h2>项目</h2>
                <h2>用户</h2>
            </HeaderLeft>
            <HeaderRight>
              <Dropdown overlay={<Menu>
                <Menu.Item key={'logout'}>
                  <Button type={"link"} onClick={logout} >退出登录</Button>
                </Menu.Item>
              </Menu>}>
                <Button type={'link'} onClick={e => e.preventDefault()}>
                  Hi, {user?.name}
                </Button>
              </Dropdown>
            </HeaderRight>
        </Header>
        <Main>
        <ProjectListScreen />
        </Main>
    </Container>
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 4rem 1fr;
  height: 100vh;
`;

// grid-area 用来给grid子元素起名字
const Header = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
  justify-content: space-between;
`;
const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;
const Main = styled.main`
  display: flex;
  overflow: hidden;
  margin-top: 3rem;

`;