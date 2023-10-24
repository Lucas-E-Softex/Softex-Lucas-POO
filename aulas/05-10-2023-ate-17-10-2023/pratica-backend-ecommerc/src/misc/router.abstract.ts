import { Router } from "express";
import { Request, Response } from "express";
export interface IRoute{
    route:string,
    method:string,
    controller:(req:Request, res:Response)=>Promise<any>
}

export class RouterImplementation{
    private routes:Array<IRoute>;
    private routerInstance:any

    public constructor(routerInitializer:Array<IRoute>){
        this.routes = routerInitializer;
        this.routerInstance = Router;
    }
    public generateRoutes():any{
        this.routes.map(route => {
            switch(route.method){
                case 'POST':
                    this.initializePostRoute(route)
                case 'PUT':
                    this.initializePutRoute(route)
                case 'DELETE':
                    this.initializeDeleteRoute(route)
                case 'GET':   
                    this.initializeDeleteRoute(route)
            }
        })
    }
    public initializePostRoute(route){
        this.routerInstance.POST(route.route, route.controller)
    }
    public initializeGetRoute(route){
        this.routerInstance.GET(route.route, route.controller)
    }
    public initializePutRoute(route){
        this.routerInstance.PUT(route.route, route.controller)
    }
    public initializeDeleteRoute(route){
        this.routerInstance.DELETE(route.route, route.controller)
    }
    public getRouter(){
        return this.routerInstance
    }
}