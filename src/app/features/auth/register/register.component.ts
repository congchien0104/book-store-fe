import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormControl, Validators, UntypedFormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { PasswordValidators } from 'src/app/shared/validators/passwordValidators';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    registerForm!: UntypedFormGroup;
    loading!: boolean;

    constructor(private router: Router,
        private titleService: Title,
        private notificationService: NotificationService,
        private authenticationService: AuthenticationService) {
    }

    ngOnInit() {
        this.titleService.setTitle('Register');
        this.authenticationService.logout();
        this.createForm();
    }

    private createForm() {

        this.registerForm = new UntypedFormGroup({
            name: new UntypedFormControl('', Validators.required),
            email: new UntypedFormControl('', [Validators.required, Validators.email]),
            password: new UntypedFormControl('', [Validators.required,
                PasswordValidators.patternValidator(new RegExp("(?=.*[0-9])"), {
                    requiresDigit: true
                }),
                PasswordValidators.patternValidator(new RegExp("(?=.*[A-Z])"), {
                requiresUppercase: true
                }),
                PasswordValidators.patternValidator(new RegExp("(?=.*[a-z])"), {
                requiresLowercase: true
                }),
                PasswordValidators.patternValidator(new RegExp("(?=.*[$@^!%*?&])"), {
                requiresSpecialChars: true
                })
            ]),
        });
    }

    register() {
        const name = this.registerForm.get('name')?.value;
        const email = this.registerForm.get('email')?.value;
        const password = this.registerForm.get('password')?.value;
        //const rememberMe = this.registerForm.get('rememberMe')?.value;

        this.loading = true;
        this.authenticationService
            .register(name, email.toLowerCase(), password)
            .subscribe(
                data => {
                    this.router.navigate(['/auth/login']);
                },
                error => {
                    this.notificationService.openSnackBar(error.error);
                    this.loading = false;
                }
            );
    }

    login() {
        this.router.navigate(['/auth/login']);
    }
}
