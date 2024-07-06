import Keycloak from "keycloak-js";
import { useState } from "react";

const _kc = new Keycloak('/keycloak.json');

/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
 *
 * @param onAuthenticatedCallback
 */


export class UserServiceCls {
    constructor() {
        this.authenticated = false;
        this.authenticationPromise = null;
        this._kc = new Keycloak('/keycloak.json');
    }

    initKeycloak() {
        const token = localStorage.getItem('kc_token');
        const refreshToken = localStorage.getItem('kc_refreshToken');

        const initOptions = {
            onLoad: 'check-sso',
            silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
            pkceMethod: 'S256',
        }
        if (!!token && token !== 'undefined') {
            initOptions.token = token;
            initOptions.refreshToken = refreshToken;
        }

        console.log("Initializing Keycloak...");
        this.authenticationPromise = _kc.init(initOptions).then((success) => {
            localStorage.setItem('kc_token', _kc.token);
            localStorage.setItem('kc_refreshToken', _kc.refreshToken);
        });
    };


    doLogin(options) {
        return _kc.login(options);
    }
    doLogout() {
        return _kc.logout;
    }

    getToken() {
        return _kc.token;
    }

    getTokenParsed() {
        return _kc.tokenParsed;
    }

    isLoggedIn() {
        return this.authenticationPromise
        .then(r => {
            console.log('!!_kc.token', _kc.token);
            return !!_kc.token;
        });
    }

    updateToken(successCallback) {
        return _kc.updateToken(5)
            .then(successCallback)
            .catch(this.doLogin);
    }

    getUsername() {
        return _kc.tokenParsed?.preferred_username
    }

    hasRole(roles) {
        return roles.some((role) => _kc.hasRealmRole(role));
    }
}

const UserService = new UserServiceCls();
UserService.initKeycloak();
export default UserService;