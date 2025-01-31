'use server'

import { S3Client } from "@aws-sdk/client-s3";
import { createPresignedPost } from "@aws-sdk/s3-presigned-post";
import { nanoid } from "nanoid";
import prisma from "../app/utils/prisma";

export async function handleSubmit(formData: FormData , links ?: string[]) {
    try {

        console.log(links)
        const client = new S3Client({
            region: process.env.AWS_REGION,
        })

        const fileKey = nanoid(); 

        const { url, fields } = await createPresignedPost(client, {
            Bucket: process.env.AWS_BUCKET_NAME || '',
            Key: fileKey,
            Conditions: [
                { acl: "public-read" },
                ["content-length-range", 0, 10485760],
                { "Content-Type": (formData.get('file') as File)?.type || '' },
            ],
        })
        fields.acl = "public-read";

        const file = formData.get('file');
        if (!file || !(file instanceof File)) {
            throw new Error('No valid file found in FormData');
        }

        fields['Content-Type'] = file.type;

        const formDataS3 = new FormData();
        Object.entries(fields).forEach(([key, value]) => {
            formDataS3.append(key, value);
        });
        formDataS3.append('file', file); 

        const uploadResponse = await fetch(url, {
            method: 'POST',
            body: formDataS3,
        });

        const response = await uploadResponse.text();
        console.log(response);

        if (uploadResponse.ok) {
            console.log('File uploaded successfully');
            const fileUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileKey}`;
            console.log('Uploaded file URL:', fileUrl);

            const topic = formData.get('topic')?.toString() || '';
            const description = formData.get('description')?.toString() || '';

            const newPost = await prisma.post.create({
                data: {
                    topic,
                    description,
                    image: fileUrl,
                    links : links
                },
            });

            console.log('Post saved to database:', newPost);

            return fileUrl;
        } else {
            console.error('Failed to upload file');
        }
    } catch (err) {
        console.error('Error uploading file:', err);
    }
}
