import { Component, ViewChild } from "@angular/core";
import { interval, zip, from } from 'rxjs';
import { map, take, filter, distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { combineLatest } from 'rxjs';

@Component({
    template: `

    <style>
    :host {
        padding: 80px;
        background: #eee;
        display: block;
    }
    span {
        display: inline-block;
        margin: 0 10px;
    }

    span.active {
        color: red;
    }
    </style>

    <button trackable feature="admin">Admin</button>
    <button trackable feature="accounting">
        Accounting
    </button>
    <button trackable="This is the button C">C</button>
    <button>D</button>


    <image-editor imageUrl="/assets/image.png" (rotate)="log($event)"></image-editor>

    <pre class="logs">
        <div *ngFor="let row of logs">{{ row }}</div>
    </pre>

    <pre>{{ model | json }}</pre>


    <form #f="ngForm" (ngSubmit)="save()">

        <input #nameRef="ngModel" type="text" name="name" [(ngModel)]="model.name" required minlength="4">
        <div class="error" *ngIf="nameRef.dirty && nameRef.errors?.required">the name is required</div>
        <div class="error" *ngIf="nameRef.dirty && nameRef.errors?.minlength">the min length is 4</div>

        <select name="department" [(ngModel)]="model.department" required>
            <option value="">-- Select Department --</option>
            <option value="A">A</option>
            <option value="B">B</option>
        </select>

        <button type="submit" [disabled]="f.invalid">Save</button>

    </form>


    <button (click)="model.department = 'B'">Set B</button>




    `
})
export class DemoComponent {


    @ViewChild('f', { static: true })
    form: NgForm;


    model = {
        name: '',
        department: ''
    };


    logs = [];

    constructor() {
        console.log('demo component');

        var cpuTemp = [40, 50, 100, 160, 120, 80, 10];

        var cpuTemp$ = from(cpuTemp)

        var memory$ = interval(200).pipe(
            map(x => x * 2),
            take(10)
        );

        var result$ = zip(cpuTemp$, memory$)
            .pipe(filter(x => x[0] >= 100))

        result$.subscribe(values => console.log(values));
    }

    ngAfterViewInit() {

        combineLatest(
            this.form.valueChanges,
            this.form.statusChanges.pipe(
                filter(x => x === 'VALID')
            ),
        ).pipe(
            map(x => x[0]),
            debounceTime(200)
        ).subscribe(values => {
            console.log(values);
        });


    }

    log(event) {
        this.logs.push(event);
    }

    save() {

        this.form.reset();

        this.model = {
            name: '',
            department: ''
        };
    }

}