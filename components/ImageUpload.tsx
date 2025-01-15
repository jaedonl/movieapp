"use client";

import React, {useRef, useState} from 'react'
import { IKImage, ImageKitProvider, IKUpload } from "imagekitio-next";
import ImageKit from "imagekit";
import Image from 'next/image';
import config from '@/lib/config';
import { useToast } from "@/hooks/use-toast"

const {
    env: {
        imagekit: {publicKey, urlEndpoint}
    }
} = config;

const authenticator = async () => {
    try {
        const res = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`)
        if (!res.ok) {
            const errorText = await res.text()
            throw new Error(`Request failed with status ${res.status}: ${errorText}`)
        }

        const data = await res.json()
        const { signature, expire, token } = data
        return { signature, expire, token };
    } catch (error: any) {
        throw new Error(`Authentication request failed: ${error.message}`);
    }
}

interface Props {
    type: "image" | "video";
    accept: string;
    placeholder: string;
    folder: string;
    variant: "dark" | "light";
    onFileChange: (filePath: string) => void;
    value?: string;
}

const ImageUpload = ({
    // type,
    // accept,
    // placeholder,
    // folder,
    // variant,
    onFileChange,
    // value,
}: Props) => {
    const ikUploadRef = useRef(null)
    const [file, setFile] = useState<{ filePath: string | null }>(null);
    const { toast } = useToast()

    const onError = (err: any) => {
        toast({
            title: "Image uploaded failed",
            description: 'Image could not be uploaded.',
            variant: 'destructive'
        })

        console.log("Error", err);
    };

    const onSuccess = (res: any) => {
        setFile(res)
        onFileChange(res.filePath)
        
        toast({
            title: "Image uploaded successfully",
            description: `${res.filePath} uploaded successfully.`,
        })
        console.log("Success", res);
    };

    return (
        <ImageKitProvider publicKey={publicKey} urlEndpoint={urlEndpoint} authenticator={authenticator}>
            <IKUpload 
                className='hidden' 
                ref={ikUploadRef} 
                fileName="test-upload.png" 
                onError={onError} 
                onSuccess={onSuccess} 
            />

            <button className="upload-btn" onClick={(e) => {
                e.preventDefault()
                if(ikUploadRef.current) {
                    // @ts-ignore
                    ikUploadRef.current?.click()
                }
            }}>
                <Image src="/icons/upload.svg" alt='upload-icon' width={20} height={20} className='object-contain' />

                <p className='text-base text-light-100'>Upload a file</p>

                {file && <p className='upload-filename'>{file.filePath}</p>}
            </button>

            {file && (
                <div className='flex justify-center'>
                    <IKImage alt={file.filePath} path={file.filePath} width={500} height={500} />
                </div>
                
            )}
        </ImageKitProvider>
    )
}

export default ImageUpload