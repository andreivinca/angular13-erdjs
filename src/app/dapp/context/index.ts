import { Injectable } from "@angular/core";
import { NetworkType } from "../helpers/types";
import { createInitialState, StateType } from "./state";

export interface ContextType {
    children: any, // React.ReactNode;
    config: {
        network: NetworkType;
        walletConnectBridge: string;
        walletConnectDeepLink: string;
    };
}

@Injectable({
    providedIn: 'root'
})
export class ContextProvider{
    constructor(){
    }

    
    createInitialState = ({ children, config }: ContextType) =>{
        var initialState = createInitialState(config);
     
    }
}