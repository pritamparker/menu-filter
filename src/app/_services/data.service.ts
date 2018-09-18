import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

    private messageSource = new BehaviorSubject(null);
    currentMessage = this.messageSource.asObservable();

    constructor() { }

    changeMessage(message: number) {
        console.log("num", message)
        this.messageSource.next(message)
    }

}