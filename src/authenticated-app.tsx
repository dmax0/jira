import { Button } from "antd";
import { useAuth } from "context/auth-context"
import { ProjectListScreen } from "screen/project-list"

export const AuthenticatedApp = () => {
    const {logout} = useAuth();
    return <div>
        <Button onClick={() => logout()}>登出</Button>
        <ProjectListScreen />
    </div>
}