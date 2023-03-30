export declare const generateImagesLinks: (prompt: string) => Promise<string[]>;
export declare const generateImageFiles: (prompt: string) => Promise<{
    filename: string;
    data: string;
}[]>;
