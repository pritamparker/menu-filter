import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

    private messageSource = new BehaviorSubject(null);
    currentMessage = this.messageSource.asObservable();

    constructor() { }

    changeMessage(message: number) {
        this.messageSource.next(message)
    }

}