import { useState, useEffect } from "react";
import { List } from "./List"
import { SearchPanel } from "./search-panel";
import QueryString from "qs";
import {clearObject, useDebounce, useMount} from "utils/index"
import { useHttp } from "utils/http";
import styled from "@emotion/styled";
import { Typography } from "antd";

const baseUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
    const [list, setList] = useState([]);
    const [param, setParam] = useState({
        name:'',
        personId:''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<null | Error>(null);
    const [users, setUsers] = useState([]);
    const debouncedParam = useDebounce(param, 200);
    
    const client = useHttp()
    useEffect(() => {
        setIsLoading(true);
        client('projects', {data: clearObject(debouncedParam)})
        .then(setList)
        .catch(error => {
            setList([]);
            setError(error);
        })
        .finally(() => setIsLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedParam])
    useMount(() => {
        client('users').then(setUsers)
    })
    return (
        <Container>
            <h1>项目列表</h1>
            <SearchPanel users={users} param={param} setParam={setParam}/>
            {error? <Typography.Text type="danger">
                {error.message}
            </Typography.Text> : null}
            <List loading={isLoading} dataSource={list} users={users}/>
        </Container>
    );
}

const Container = styled.div`
padding: 1.2rem;
`
