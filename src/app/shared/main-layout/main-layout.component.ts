import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-main-layout',
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit, AfterViewInit{

    constructor(private changeDetectorRef: ChangeDetectorRef) {}
    ngOnInit(): void {
        
    }

    ngAfterViewInit(): void {
        this.changeDetectorRef.detectChanges();
    }
}