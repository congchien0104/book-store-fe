import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormControl, Validators, UntypedFormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { PasswordValidators } from 'src/app/shared/validators/passwordValidators';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm!: UntypedFormGroup;
    loading!: boolean;

    constructor(private router: Router,
        private titleService: Title,
        private authenticationService: AuthenticationService) {
    }

    ngOnInit() {
        this.titleService.setTitle('Login');
        this.authenticationService.logout();
        this.createForm();
    }

    private createForm() {
        const savedUserEmail = localStorage.getItem('savedUserEmail');

        this.loginForm = new UntypedFormGroup({
            email: new UntypedFormControl(savedUserEmail, [Validators.required, Validators.email]),
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
            ])
        });
    }

    login() {
        const email = this.loginForm.get('email')?.value;
        const password = this.loginForm.get('password')?.value;

        this.loading = true;
        this.authenticationService.login(email.toLowerCase(), password)
            .subscribe({ next: data => {
                localStorage.setItem('tokens', JSON.stringify(data.tokens));
                localStorage.setItem('user', JSON.stringify(data.user));
                this.router.navigate(['/books']);
            }
        });
    }

    register() {
        this.router.navigate(['/auth/register']);
    }
}
