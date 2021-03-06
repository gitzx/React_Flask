/* eslint camelcase: 0 */

import axios from 'axios';

const tokenConfig = (token) => ({
    headers: {
        'Authorization': token, // eslint-disable-line quote-props
    },
});

export function validate_token(token) {
    return axios.post('/api/is_token_valid', {
        token,
    });
}

export function get_github_access() {
    window.open(
        '/github-login',
        '_blank' // <- This is what makes it open in a new window.
    );
}

export function create_user(email, password) {
    return axios.post('/api/create_user', {
        email,
        password,
    });
}

export function get_token(email, password) {
    return axios.post('api/get_token', {
        email,
        password,
    });
}

export function has_github_token(token) {
    return axios.get('api/has_github_token', tokenConfig(token));
}

export function data_about_user(token) {
    return axios.get('api/user', tokenConfig(token));
}

export function createAuthorizedRequest(method, path, params) {
    //const config = { headers: { 'Authorization': localStorage.getItem('Token') } };
    const config = null;
    switch(method) {
        case 'get':
            return axios.get(path, config);
        case 'post':
            return axios.post(path, params, config);
        case 'patch' :
            return axios.patch(path, params, config);
        case 'delete' :
            return axios.delete(path, config);
  }
}

export function trimPost(params) {
  return {
    ...convertKeyNameInSnakeCase(params),
    items_attributes:
      params.itemsAttributes
        .filter(item => !item.editing)
        .map(item => convertKeyNameInSnakeCase(item))
  };
}

function convertKeyNameInSnakeCase(object) {
  return Object.keys(object).reduce((newObject, oldKey) => {
    newObject[convertCamelCaseToSnakeCase(oldKey)] = object[oldKey];
    return newObject;
  }, {});
}

function convertCamelCaseToSnakeCase(string) {
  return string.replace(/([A-Z])/g,
    function(string) {
      return '_' + string.charAt(0).toLowerCase();
    }
  );
}


