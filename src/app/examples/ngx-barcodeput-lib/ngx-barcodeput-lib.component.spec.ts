import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NgxBarCodePutLibComponent} from './ngx-barcodeput-lib.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {MatCardModule, MatInputModule, MatTooltipModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DeviceDetectorModule} from 'ngx-device-detector';
import {NgxBarCodePutModule} from 'ngx-barcodeput';


describe('NgxBarCodePutLibComponent', () => {
    let component: NgxBarCodePutLibComponent;
    let fixture: ComponentFixture<NgxBarCodePutLibComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                BrowserModule,
                MatCardModule,
                MatInputModule,
                MatTooltipModule,
                ReactiveFormsModule,
                NgxBarCodePutModule,
                BrowserAnimationsModule,
                DeviceDetectorModule.forRoot(),
            ],
            declarations: [NgxBarCodePutLibComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NgxBarCodePutLibComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
