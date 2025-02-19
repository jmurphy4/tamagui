/**
 * Some parts adapted from react-native-web
 * Copyright (c) Nicolas Gallagher licensed under the MIT license.
 */
import { StyleObject } from '@tamagui/helpers';
import type { TextStyle, ViewStyle } from 'react-native';
import { PseudoDescriptor } from './pseudoDescriptors.js';
type ViewOrTextStyle = ViewStyle | TextStyle;
export type ViewStyleWithPseudos = ViewOrTextStyle & {
    hoverStyle?: ViewOrTextStyle;
    pressStyle?: ViewOrTextStyle;
    focusStyle?: ViewOrTextStyle;
};
export declare function getStylesAtomic(stylesIn: ViewStyleWithPseudos): StyleObject[];
export declare function getAtomicStyle(style: ViewOrTextStyle, pseudo?: PseudoDescriptor): StyleObject[];
export declare function styleToCSS(style: Record<string, any>): void;
export {};
//# sourceMappingURL=getStylesAtomic.d.ts.map