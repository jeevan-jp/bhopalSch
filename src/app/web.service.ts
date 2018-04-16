import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';


@Injectable()
export class WebService {

    BASE_URL = 'http://localhost:1234';
    constructor(private http: Http) {

    }
    getMessages() {
        try {
            return this.http.get(this.BASE_URL + '/complaints').toPromise();
        } catch (error) {
            console.error('Unable to get messages');
        }
    }
    postMessages(message) {
        return this.http.post(this.BASE_URL + '/complaints', message).toPromise();
    }
}
