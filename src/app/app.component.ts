import { Component } from '@angular/core';
import { ApiProvider, HWProvider, ProxyProvider } from '@elrondnetwork/erdjs';
import * as config from "./config";
import { ContextProvider, ContextType } from './dapp/context';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private contextProvider: ContextProvider ){

        this.contextProvider.createInitialState( { children: null, config: config} as ContextType);
    }
  title = 'angular-erdjs';
}





