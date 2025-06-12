import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { HttpAdapter } from "./http.adapter";

interface options {
   baseUrl: string;
   params: Record<string, string>
}

export class AxiosAdapter implements HttpAdapter{

   private myAxios: AxiosInstance;

   constructor( opt: options ){
      this.myAxios = axios.create({
         baseURL: opt.baseUrl,
         params: opt.params,
      })
   }

   async get<T>(url: string, options?: AxiosRequestConfig<unknown> ): Promise<T> {
      try {
         const { data } = await this.myAxios.get<T>( url, options )
         return data;
      } catch (error) {
         throw new Error(`Error http request (${ url })`);
      }
   }

}