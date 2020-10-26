import { NgModule } from '@angular/core';

import { TokenInterceptor } from './_services/token/token.interceptor';
import { TokenService } from './_services/token/token.service';

@NgModule({
    providers: [
        TokenInterceptor,
        TokenService
    ]
})
export class SecurityModule { }
