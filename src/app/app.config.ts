import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { httpInterceptorProviders } from '../interceptors';
import { AuthInterceptor } from '../interceptors/auth.interceptor';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideHttpClient(withFetch(), withInterceptorsFromDi()), httpInterceptorProviders]
};
