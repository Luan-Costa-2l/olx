import Cookies from "js-cookie";

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

const OlxAPI = {
    
}

export default OlxAPI;