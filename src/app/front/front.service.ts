import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Category, DynamicForm, FormType } from '../model';

@Injectable()
export class FrontService {

    readonly API_URL: String = 'http://localhost:3000';
    private categoriesCache: Category[];

    constructor(private http: Http) { }

    getCategories(): Observable<Category[]> {
        if (!this.categoriesCache) {
            return this.http.get(this.API_URL + "/categories")
                .map(res => this.categoriesCache = res.json())
                .catch(this.handleError);
        } else {
            return Observable.of(this.categoriesCache);
        }
    }

    getFormConfig(formId: number): Observable<DynamicForm> {
        return this.http.get(this.API_URL + "/forms/" + formId)
            .map(res => res.json())
            .catch(this.handleError);
    }

    getSistemas(): Observable<String[]> {
        return Observable.of(['SIARHES', 'SIGA', 'Outro']);
    }

    private handleError(error: Response | any) {
        let errMsg: string;

        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }

        return Observable.throw(errMsg);
    }

}
