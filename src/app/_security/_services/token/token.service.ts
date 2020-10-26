import { Injectable } from '@angular/core';


@Injectable()
export class TokenService {

    private _token;

    constructor() {
        this._token = null; // localStorage.getItem('token');
    }

    // get token() {
    //     return this._token;
    // }

    // set token(token: string) {
    //     if (token) {
    //         localStorage.setItem('token', token);
    //     } else {
    //         localStorage.removeItem('token');
    //     }
    //     this._token = token;
    // }

    get token() {
        return this._token;
    }

    set token(token: string) {
        this._token = token;
    }
}