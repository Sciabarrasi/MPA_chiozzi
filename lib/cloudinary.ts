import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({ //testear si funcionan las variables
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
});

export const uploadImage = async (file: Buffer): Promise<{ public_id: string, url: string }> => { 
    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            { folder: 'blog-posts' },
            (error, result) => { 
                if (error) return reject(error);
                if (!result) return reject(new Error('No result from Cloudinary'));
                resolve({
                    public_id: result.public_id,
                    url: result.secure_url
                })
            }
        );

        uploadStream.end(file);
    });
};

export const deleteImage = async (publicId: string): Promise<void> => { 
    await cloudinary.uploader.destroy(publicId);
}