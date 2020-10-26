import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
type verbs = 'post' | 'get' | 'insert' | 'delete' | 'put';

import { environment } from '@env/environment';

@Injectable({
    providedIn: 'root'
})
export class RequestService {

    public serverPath: string;

    constructor(private http: HttpClient) {
        this.serverPath = environment.apiUrl;
    }

    /**
     * execRequest
     * @param operation method operation
     * @param endPoint concat to server url
     * @param data payload for post/insert calls
     */
    execRequest(operation: verbs, endPoint: string, data?: any): Observable<any> {

        return this.http[operation](this.serverPath + '/' + endPoint, data);
    }

    /**
     * execRequestExt
     * @param operation method operation
     * @param path complete path to request
     * @param data payload for post/insert calls
     */
    execRequestExt(operation: verbs, path: string, data?: any): Observable<any> {

        return this.http[operation](path, data);
    }

}
