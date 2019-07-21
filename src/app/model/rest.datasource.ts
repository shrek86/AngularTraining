import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from './product.model';
import { Order } from './order.model';

const PROTOCOL = "http";
const PORT = 3500;

@Injectable()
export class RestDataSource{

    baseUrl : string;
    auth_token: string;

    constructor(private httpClient : HttpClient){
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    getProducts():Observable<Product[]>
    {
        return this.httpClient.get<Product[]>(this.baseUrl + "products");
    }

    saveOrder(order : Order ) : Observable<Order>{
        return this.httpClient.post<Order>(this.baseUrl + "orders" , order);
    }

    authenticate(user : string, pass : string) : Observable<boolean> {
        return this.httpClient.post<any>(this.baseUrl + "login", {name : user, password : pass}).
        pipe(map(response => {
            this.auth_token = response.success ? response.token :null;
            sessionStorage [ "jwt_token" ] = this.auth_token;
            localStorage ["jwt_token"] = this.auth_token;
            return response.success;
        }));
    }

}