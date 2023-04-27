export const fileUpload = async( file ) => {

    if (!file) { throw Error('No hay archivo a subir') }

    const cloudUrl = `https://api.cloudinary.com/v1_1/dtp8o30gk/upload`;

    const formmData = new FormData();

    formmData.append('upload_preset','react-course');
    formmData.append('file', file);

    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formmData,
        });

        if (!resp.ok) { throw Error('No se pudo subir imagen') }

        const cloudResponse = await resp.json();

        return cloudResponse.secure_url;
    } catch (error) {
        console.log(error);
        throw Error(error.message);
    }
};