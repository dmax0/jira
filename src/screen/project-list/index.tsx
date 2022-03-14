import { useState, useEffect } from "react";
import { List } from "./List"
import { SearchPanel } from "./search-panel";
import QueryString from "qs";
import {clearObject, useDebounce, useMount} from "utils/index"
import { useHttp } from "utils/http";
import styled from "@emotion/styled";

const baseUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
    const [list, setList] = useState([]);
    const [param, setParam] = useState({
        name:'',
        personId:''
    });
    const [users, setUsers] = useState([]);
    const debouncedParam = useDebounce(param, 200);
    
    const client = useHttp()
    useEffect(() => {
        client('projects', {data: clearObject(debouncedParam)}).then(setList)
    }, [client, debouncedParam])
    useMount(() => {
        client('users').then(setUsers)
    })
    return (
        <Container>
            <h1>项目列表</h1>
            <SearchPanel users={users} param={param} setParam={setParam}/>
            <List list={list} users={users}/>
        </Container>
    );
}

const Container = styled.div`
padding: 1.2rem;
`
