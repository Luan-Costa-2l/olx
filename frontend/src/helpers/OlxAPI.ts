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

const apiFetchFile = async (endpoint: string, body: FormData) => {
    if (!body.get('token')) {
        let token = Cookies.get('token');
        if (token) {
            body.append('token', token);
        }
    }
    const res = await fetch(BaseUrl+endpoint, {
        method: 'POST',
        body
    });

    const response = await res.json();

    console.log(response)
    if (response.notallowed) {
        window.location.href = '/signin';
        return;
    }

    return response;
}

type OptionsType = {
    sort: string;
    limit: number;
}

const OlxAPI = {
    login: async (email: string, password: string) => {
        let json = await apiFetchPost(
            '/user/signin',
            { email, password }
        );
        return json;
    },
    register: async (name: string, email: string, password: string, state: string) => {
        let json = await apiFetchPost(
            '/user/signup', 
            {name, email, password, state}
        );
        return json;
    },
    getStates: async () => {
        const json = await apiFetchGet('/states');
        return json.states;
    },
    getCategories: async () => {
        const json = await apiFetchGet('/categories');
        return json.categories;
    },
    getAds: async (options: OptionsType) => {
        const json = await apiFetchGet('/ad/list', options);
        return json.ads;
    }
}

export default OlxAPI;