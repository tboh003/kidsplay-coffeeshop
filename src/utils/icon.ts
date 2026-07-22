// Icons can be either an emoji character or a path to an image asset
export const isImageIcon = (icon: string): boolean => /\.(png|svg|jpe?g|webp)$/i.test(icon);
