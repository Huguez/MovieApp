export abstract class HttpAdapter {
   abstract get<T>( url: string, options?: unknown | Record<string, unknown >  ): Promise<T>;
}