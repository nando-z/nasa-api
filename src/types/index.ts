export interface NasaApiResponse {
    data: any;
    status: number;
    message?: string;
}

export interface NasaApiRequest {
    endpoint: string;
    params?: Record<string, any>;
}