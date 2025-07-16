const baseUrl = process.env.PUBLIC_URL || "";
const assetsDir = `${baseUrl}/assets`;
const dataDir = `${assetsDir}/data`;
const iconDir = `${assetsDir}/icons`;
const imageDir = `${assetsDir}/images`;

export const dataPath = (data: string) => `${dataDir}/${data}`;
export const iconPath = (icon: string) => `${iconDir}/${icon}`;
export const imagePath = (image: string) => `${imageDir}/${image}`;
