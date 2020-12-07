import { Injectable } from '@angular/core';

@Injectable()
export class Simpleservice {
    getSampleData(): any {
        return { name: 'ravi', email: 'ravikumar.nitw@gmail.com' };
    }
}


@Injectable()
export class FakeSimpleservice {
    getSampleData(): any {
        return { name: 'pranay', email: 'ravikumar.nitw@gmail.com' };
    }
}
