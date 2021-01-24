import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { default as mockEndpoints } from './mock.config';

@Injectable()
export class HttpMockApiInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let endpoint;
        endpoint = mockEndpoints[request.method] && mockEndpoints[request.method][request.url] || null;
        switch (true) {
            case request.url.includes('quiz-questions'):
                const quizId = request.url.slice(request.url.lastIndexOf('/') + 1);
                endpoint = mockEndpoints[request.method] && mockEndpoints[request.method][request.url.replace(`/${quizId}`, '')];
                return endpoint.handler(+quizId);
            case request.url.includes('quiz-score'):
                return endpoint.handler(request.body);
            default:
                return endpoint ? endpoint.handler() : next.handle(request);
        }
    }
}
