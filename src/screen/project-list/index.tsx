import { useState, useEffect } from "react";
import { List } from "./List"
import { SearchPanel } from "./search-panel";
import QueryString from "qs";
import {clearObject, useDebounce, useMount} from "utils/index"

const baseUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
    const [list, setList] = useState([]);
    const [param, setParam] = useState({
        name:'',
        personId:''
    });
    const [users, setUsers] = useState([]);
    const debouncedParam = useDebounce(param, 200);
    useEffect(() => {
        fetch(`${baseUrl}/projects?${QueryString.stringify(clearObject(debouncedParam))}`).then(async response => {
            if (response.ok) {
                setList(await response.json())
            }
        })
    }, [debouncedParam])

    useMount(() => {
        fetch(`${baseUrl}/users`).then(async response => {
            if (response.ok) {
                setUsers(await response.json())
            }
        })
    })
    return (
        <div>
            <SearchPanel users={users} param={param} setParam={setParam}/>
            <List list={list} users={users}/>
        </div>
    );
}
