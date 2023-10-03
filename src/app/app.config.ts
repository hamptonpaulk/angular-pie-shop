import { provideHttpClient } from "@angular/common/http";
import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { provideToastr } from "ngx-toastr";
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
    providers: [
        importProvidersFrom(FormsModule, ReactiveFormsModule),
        provideHttpClient(),
        provideRouter(routes),
        provideToastr(),
        provideAnimations(),
    ],
};      