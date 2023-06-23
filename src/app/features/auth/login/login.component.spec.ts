// /* tslint:disable:no-unused-variable */
// import { TestBed, ComponentFixture, inject } from '@angular/core/testing';
// import { LoginComponent } from './login.component';
// import { AuthenticationService } from 'src/app/core/services/auth.service';

// class MockAuthService extends AuthenticationService {
// }


// describe('Component: Login', () => {

//     let component: LoginComponent;
//     let fixture: ComponentFixture<LoginComponent>;
//     let testBedService: AuthenticationService;
//     let componentService: AuthenticationService;

//     beforeEach(() => {

//         // refine the test module by declaring the test component
//         TestBed.configureTestingModule({
//             declarations: [LoginComponent],
//             providers: [AuthenticationService]
//         });

//         // Configure the component with another set of Providers
//         TestBed.overrideComponent(
//             LoginComponent,
//             { set: { providers: [{ provide: AuthenticationService, useClass: MockAuthService }] } }
//         );

//         // create component and test fixture
//         fixture = TestBed.createComponent(LoginComponent);

//         // get test component from the fixture
//         component = fixture.componentInstance;

//         // AuthService provided to the TestBed
//         testBedService = TestBed.get(AuthenticationService);

//         // AuthService provided by Component, (should return MockAuthService)
//         componentService = fixture.debugElement.injector.get(AuthenticationService);
//     });

//     it('Service injected via inject(...) and TestBed.get(...) should be the same instance',
//         inject([AuthenticationService], (injectService: AuthenticationService) => {
//             expect(injectService).toBe(testBedService);
//         })
//     );

    
// });