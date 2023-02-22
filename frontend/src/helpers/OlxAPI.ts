import Cookies from "js-cookie";
import qs from 'qs';

const BaseUrl = 'http://alunos.b7web.com.br:501';

const apiFetchPost = async (endPoint: string, body: any) => {
    if (!body.token) {
        let token = Cookies.get('token');
        if (token) {
            body.token = token;
        }
    }
    const res = await fetch(BaseUrl+endPoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });
    const response = await res.json();
    if (response.notallowed) {
        window.location.href = '/signin';
        return;
    }
    return response;
}

const apiFetchGet = async (endPoint: string, body: any = []) => {
    if (!body.token) {
        let token = Cookies.get('token');
        if (token) {
            body.token = token;
        }
    }
    const res = await fetch(`${BaseUrl + endPoint}?${qs.stringify(body)}`);
    const json = await res.json();
    if (json.notallowed) {
        window.location.href = '/signin';
        return;
    }
    return json;
}

const OlxAPI = {
    login: async (email: string, password: string) => {
        let json = await apiFetchPost(
            '/user/signin',
            { email, password }
        );
        return json;
    },
    getStates: async () => {
        const json = await apiFetchGet('/states');
        return json.states;
    }
}

export default OlxAPI;