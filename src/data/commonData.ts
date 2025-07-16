const assetsDir = "/assets";
const iconDir = `${assetsDir}/icons`;
const imageDir = `${assetsDir}/images`;

export const iconPath = (icon: string) => `${iconDir}/${icon}`;
export const imagePath = (image: string) => `${imageDir}/${image}`;
