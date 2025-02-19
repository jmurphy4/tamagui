import { TextParentStyles } from '@tamagui/text';
import { GetProps, TamaguiElement, ThemeableProps } from '@tamagui/web';
import { FunctionComponent } from 'react';
type ButtonIconProps = {
    color?: string;
    size?: number;
};
type IconProp = JSX.Element | FunctionComponent<ButtonIconProps> | null;
export type ButtonProps = Omit<TextParentStyles, 'TextComponent'> & GetProps<typeof ButtonFrame> & ThemeableProps & {
    /**
     * add icon before, passes color and size automatically if Component
     */
    icon?: IconProp;
    /**
     * add icon after, passes color and size automatically if Component
     */
    iconAfter?: IconProp;
    /**
     * adjust icon relative to size
     *
     * @default 1
     */
    scaleIcon?: number;
    /**
     * make the spacing elements flex
     */
    spaceFlex?: number | boolean;
    /**
     * adjust internal space relative to icon size
     */
    scaleSpace?: number;
    /**
     *
     */
    unstyled?: boolean;
};
export declare const ButtonFrame: import("@tamagui/web").TamaguiComponent<Omit<import("react-native").ViewProps, "display" | "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("@tamagui/web").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: import("@tamagui/web").SizeTokens | undefined;
} & {
    readonly backgrounded?: boolean | undefined;
    readonly radiused?: boolean | undefined;
    readonly hoverTheme?: boolean | undefined;
    readonly pressTheme?: boolean | undefined;
    readonly focusTheme?: boolean | undefined;
    readonly circular?: boolean | undefined;
    readonly padded?: boolean | undefined;
    readonly elevate?: boolean | undefined;
    readonly bordered?: number | boolean | undefined;
    readonly transparent?: boolean | undefined;
    readonly chromeless?: boolean | "all" | undefined;
}, "disabled" | "size" | "defaultStyle" | "active"> & {
    readonly defaultStyle?: boolean | undefined;
    readonly size?: import("@tamagui/web").SizeTokens | undefined;
    readonly active?: boolean | undefined;
    readonly disabled?: boolean | undefined;
} & import("@tamagui/web").MediaProps<Partial<Omit<import("react-native").ViewProps, "display" | "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("@tamagui/web").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: import("@tamagui/web").SizeTokens | undefined;
} & {
    readonly backgrounded?: boolean | undefined;
    readonly radiused?: boolean | undefined;
    readonly hoverTheme?: boolean | undefined;
    readonly pressTheme?: boolean | undefined;
    readonly focusTheme?: boolean | undefined;
    readonly circular?: boolean | undefined;
    readonly padded?: boolean | undefined;
    readonly elevate?: boolean | undefined;
    readonly bordered?: number | boolean | undefined;
    readonly transparent?: boolean | undefined;
    readonly chromeless?: boolean | "all" | undefined;
}, "disabled" | "size" | "defaultStyle" | "active"> & {
    readonly defaultStyle?: boolean | undefined;
    readonly size?: import("@tamagui/web").SizeTokens | undefined;
    readonly active?: boolean | undefined;
    readonly disabled?: boolean | undefined;
}>> & import("@tamagui/web").PseudoProps<Partial<Omit<import("react-native").ViewProps, "display" | "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("@tamagui/web").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: import("@tamagui/web").SizeTokens | undefined;
} & {
    readonly backgrounded?: boolean | undefined;
    readonly radiused?: boolean | undefined;
    readonly hoverTheme?: boolean | undefined;
    readonly pressTheme?: boolean | undefined;
    readonly focusTheme?: boolean | undefined;
    readonly circular?: boolean | undefined;
    readonly padded?: boolean | undefined;
    readonly elevate?: boolean | undefined;
    readonly bordered?: number | boolean | undefined;
    readonly transparent?: boolean | undefined;
    readonly chromeless?: boolean | "all" | undefined;
}, "disabled" | "size" | "defaultStyle" | "active"> & {
    readonly defaultStyle?: boolean | undefined;
    readonly size?: import("@tamagui/web").SizeTokens | undefined;
    readonly active?: boolean | undefined;
    readonly disabled?: boolean | undefined;
}>>, TamaguiElement, Omit<import("react-native").ViewProps, "display" | "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("@tamagui/web").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps, {
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: import("@tamagui/web").SizeTokens | undefined;
} & {
    readonly backgrounded?: boolean | undefined;
    readonly radiused?: boolean | undefined;
    readonly hoverTheme?: boolean | undefined;
    readonly pressTheme?: boolean | undefined;
    readonly focusTheme?: boolean | undefined;
    readonly circular?: boolean | undefined;
    readonly padded?: boolean | undefined;
    readonly elevate?: boolean | undefined;
    readonly bordered?: number | boolean | undefined;
    readonly transparent?: boolean | undefined;
    readonly chromeless?: boolean | "all" | undefined;
} & {
    readonly defaultStyle?: boolean | undefined;
    readonly size?: import("@tamagui/web").SizeTokens | undefined;
    readonly active?: boolean | undefined;
    readonly disabled?: boolean | undefined;
}>;
export declare const ButtonText: import("@tamagui/web").TamaguiComponent<Omit<import("react-native").TextProps, "children" | ("onLayout" | keyof import("react-native").GestureResponderHandlers)> & import("@tamagui/web").ExtendsBaseTextProps & import("@tamagui/web").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & Omit<{
    readonly size?: import("@tamagui/web").FontSizeTokens | undefined;
}, "defaultStyle"> & {
    defaultStyle?: boolean | undefined;
} & import("@tamagui/web").MediaProps<Partial<Omit<import("react-native").TextProps, "children" | ("onLayout" | keyof import("react-native").GestureResponderHandlers)> & import("@tamagui/web").ExtendsBaseTextProps & import("@tamagui/web").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & Omit<{
    readonly size?: import("@tamagui/web").FontSizeTokens | undefined;
}, "defaultStyle"> & {
    defaultStyle?: boolean | undefined;
}>> & import("@tamagui/web").PseudoProps<Partial<Omit<import("react-native").TextProps, "children" | ("onLayout" | keyof import("react-native").GestureResponderHandlers)> & import("@tamagui/web").ExtendsBaseTextProps & import("@tamagui/web").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase>> & Omit<{
    readonly size?: import("@tamagui/web").FontSizeTokens | undefined;
}, "defaultStyle"> & {
    defaultStyle?: boolean | undefined;
}>>, TamaguiElement, import("@tamagui/web").TextPropsBase, {
    readonly size?: import("@tamagui/web").FontSizeTokens | undefined;
} & {
    defaultStyle?: boolean | undefined;
}>;
export declare const buttonStaticConfig: {
    inlineProps: Set<string>;
};
export declare const Button: (props: Omit<Omit<TextParentStyles, "TextComponent"> & Omit<import("react-native").ViewProps, "display" | "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("@tamagui/web").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: import("@tamagui/web").SizeTokens | undefined;
} & {
    readonly backgrounded?: boolean | undefined;
    readonly radiused?: boolean | undefined;
    readonly hoverTheme?: boolean | undefined;
    readonly pressTheme?: boolean | undefined;
    readonly focusTheme?: boolean | undefined;
    readonly circular?: boolean | undefined;
    readonly padded?: boolean | undefined;
    readonly elevate?: boolean | undefined;
    readonly bordered?: number | boolean | undefined;
    readonly transparent?: boolean | undefined;
    readonly chromeless?: boolean | "all" | undefined;
}, "disabled" | "size" | "defaultStyle" | "active"> & {
    readonly defaultStyle?: boolean | undefined;
    readonly size?: import("@tamagui/web").SizeTokens | undefined;
    readonly active?: boolean | undefined;
    readonly disabled?: boolean | undefined;
} & import("@tamagui/web").MediaProps<Partial<Omit<import("react-native").ViewProps, "display" | "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("@tamagui/web").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: import("@tamagui/web").SizeTokens | undefined;
} & {
    readonly backgrounded?: boolean | undefined;
    readonly radiused?: boolean | undefined;
    readonly hoverTheme?: boolean | undefined;
    readonly pressTheme?: boolean | undefined;
    readonly focusTheme?: boolean | undefined;
    readonly circular?: boolean | undefined;
    readonly padded?: boolean | undefined;
    readonly elevate?: boolean | undefined;
    readonly bordered?: number | boolean | undefined;
    readonly transparent?: boolean | undefined;
    readonly chromeless?: boolean | "all" | undefined;
}, "disabled" | "size" | "defaultStyle" | "active"> & {
    readonly defaultStyle?: boolean | undefined;
    readonly size?: import("@tamagui/web").SizeTokens | undefined;
    readonly active?: boolean | undefined;
    readonly disabled?: boolean | undefined;
}>> & import("@tamagui/web").PseudoProps<Partial<Omit<import("react-native").ViewProps, "display" | "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("@tamagui/web").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: import("@tamagui/web").SizeTokens | undefined;
} & {
    readonly backgrounded?: boolean | undefined;
    readonly radiused?: boolean | undefined;
    readonly hoverTheme?: boolean | undefined;
    readonly pressTheme?: boolean | undefined;
    readonly focusTheme?: boolean | undefined;
    readonly circular?: boolean | undefined;
    readonly padded?: boolean | undefined;
    readonly elevate?: boolean | undefined;
    readonly bordered?: number | boolean | undefined;
    readonly transparent?: boolean | undefined;
    readonly chromeless?: boolean | "all" | undefined;
}, "disabled" | "size" | "defaultStyle" | "active"> & {
    readonly defaultStyle?: boolean | undefined;
    readonly size?: import("@tamagui/web").SizeTokens | undefined;
    readonly active?: boolean | undefined;
    readonly disabled?: boolean | undefined;
}>> & ThemeableProps & {
    /**
     * add icon before, passes color and size automatically if Component
     */
    icon?: IconProp | undefined;
    /**
     * add icon after, passes color and size automatically if Component
     */
    iconAfter?: IconProp | undefined;
    /**
     * adjust icon relative to size
     *
     * @default 1
     */
    scaleIcon?: number | undefined;
    /**
     * make the spacing elements flex
     */
    spaceFlex?: number | boolean | undefined;
    /**
     * adjust internal space relative to icon size
     */
    scaleSpace?: number | undefined;
    /**
     *
     */
    unstyled?: boolean | undefined;
} & import("react").RefAttributes<TamaguiElement>, "theme" | "themeInverse"> & ThemeableProps) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
export declare function useButton(propsIn: ButtonProps, { Text }?: {
    Text: any;
}): {
    spaceSize: import("@tamagui/web").SpaceTokens;
    isNested: boolean;
    props: {
        children: string | number | boolean | JSX.Element | import("react").ReactFragment | null | undefined;
        hitSlop?: import("react-native").Insets | (import("react-native").Insets & number) | undefined;
        pointerEvents?: "box-none" | "none" | "box-only" | "auto" | undefined;
        removeClippedSubviews?: boolean | undefined;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        testID?: string | undefined;
        nativeID?: string | undefined;
        collapsable?: boolean | undefined;
        needsOffscreenAlphaCompositing?: boolean | undefined;
        renderToHardwareTextureAndroid?: boolean | undefined;
        focusable?: boolean | undefined;
        shouldRasterizeIOS?: boolean | undefined;
        isTVSelectable?: boolean | undefined;
        hasTVPreferredFocus?: boolean | undefined;
        tvParallaxProperties?: import("react-native").TVParallaxProperties | undefined;
        tvParallaxShiftDistanceX?: number | undefined;
        tvParallaxShiftDistanceY?: number | undefined;
        tvParallaxTiltAngle?: number | undefined;
        tvParallaxMagnification?: number | undefined;
        onTouchStart?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onTouchMove?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onTouchEnd?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onTouchCancel?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onTouchEndCapture?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onPointerEnter?: ((event: import("react-native").PointerEvent) => void) | undefined;
        onPointerEnterCapture?: ((event: import("react-native").PointerEvent) => void) | undefined;
        onPointerLeave?: ((event: import("react-native").PointerEvent) => void) | undefined;
        onPointerLeaveCapture?: ((event: import("react-native").PointerEvent) => void) | undefined;
        onPointerMove?: ((event: import("react-native").PointerEvent) => void) | undefined;
        onPointerMoveCapture?: ((event: import("react-native").PointerEvent) => void) | undefined;
        onPointerCancel?: ((event: import("react-native").PointerEvent) => void) | undefined;
        onPointerCancelCapture?: ((event: import("react-native").PointerEvent) => void) | undefined;
        onPointerDown?: ((event: import("react-native").PointerEvent) => void) | undefined;
        onPointerDownCapture?: ((event: import("react-native").PointerEvent) => void) | undefined;
        onPointerUp?: ((event: import("react-native").PointerEvent) => void) | undefined;
        onPointerUpCapture?: ((event: import("react-native").PointerEvent) => void) | undefined;
        accessible?: boolean | undefined;
        accessibilityActions?: readonly Readonly<{
            name: string;
            label?: string | undefined;
        }>[] | undefined;
        accessibilityLabel?: string | undefined;
        accessibilityRole?: import("react-native").AccessibilityRole | undefined;
        accessibilityState?: import("react-native").AccessibilityState | undefined;
        accessibilityHint?: string | undefined;
        accessibilityValue?: import("react-native").AccessibilityValue | undefined;
        onAccessibilityAction?: ((event: import("react-native").AccessibilityActionEvent) => void) | undefined;
        accessibilityLabelledBy?: string | string[] | undefined;
        accessibilityLiveRegion?: "none" | "polite" | "assertive" | undefined;
        importantForAccessibility?: "auto" | "yes" | "no" | "no-hide-descendants" | undefined;
        accessibilityElementsHidden?: boolean | undefined;
        accessibilityLanguage?: string | undefined;
        accessibilityViewIsModal?: boolean | undefined;
        onAccessibilityEscape?: (() => void) | undefined;
        onAccessibilityTap?: (() => void) | undefined;
        onMagicTap?: (() => void) | undefined;
        accessibilityIgnoresInvertColors?: boolean | undefined;
        target?: string | undefined;
        asChild?: boolean | undefined;
        spaceDirection?: import("@tamagui/web").SpaceDirection | undefined;
        dangerouslySetInnerHTML?: {
            __html: string;
        } | undefined;
        animation?: import("@tamagui/web").AnimationProp | null | undefined;
        animateOnly?: string[] | undefined;
        debug?: import("@tamagui/web").DebugProp | undefined;
        disabled?: boolean | undefined;
        className?: string | undefined;
        themeShallow?: boolean | undefined;
        id?: string | undefined;
        tag: string | undefined;
        componentName?: string | undefined;
        tabIndex?: string | number | undefined;
        role?: string | undefined;
        forceStyle?: "focus" | "hover" | "press" | undefined;
        onPress?: ((event: import("react-native").GestureResponderEvent) => void) | null | undefined;
        onPressIn?: ((event: import("react-native").GestureResponderEvent) => void) | null | undefined;
        onPressOut?: ((event: import("react-native").GestureResponderEvent) => void) | null | undefined;
        onHoverIn?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onHoverOut?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onMouseEnter?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onMouseLeave?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onMouseDown?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onMouseUp?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onFocus?: ((event: import("react").FocusEvent<HTMLDivElement, Element>) => void) | undefined;
        onScroll?: ((event: import("react").UIEvent<HTMLDivElement, UIEvent>) => void) | undefined;
        backgroundColor?: import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallback | import("react-native").OpaqueColorValue | undefined;
        borderBottomColor?: import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallback | import("react-native").OpaqueColorValue | undefined;
        borderBottomEndRadius?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").RadiusTokens | undefined;
        borderBottomLeftRadius?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").RadiusTokens | undefined;
        borderBottomRightRadius?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").RadiusTokens | undefined;
        borderBottomStartRadius?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").RadiusTokens | undefined;
        borderBottomWidth?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        borderColor?: import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallback | import("react-native").OpaqueColorValue | undefined;
        borderEndColor?: import("react-native").ColorValue | undefined;
        borderLeftColor?: import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallback | import("react-native").OpaqueColorValue | undefined;
        borderLeftWidth?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        borderRadius?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").RadiusTokens | undefined;
        borderRightColor?: import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallback | import("react-native").OpaqueColorValue | undefined;
        borderRightWidth?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        borderStartColor?: import("react-native").ColorValue | undefined;
        borderStyle?: "solid" | "dotted" | "dashed" | undefined;
        borderTopColor?: import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallback | import("react-native").OpaqueColorValue | undefined;
        borderTopEndRadius?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").RadiusTokens | undefined;
        borderTopLeftRadius?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").RadiusTokens | undefined;
        borderTopRightRadius?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").RadiusTokens | undefined;
        borderTopStartRadius?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").RadiusTokens | undefined;
        borderTopWidth?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        borderWidth?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        opacity?: number | undefined;
        alignContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "stretch" | undefined;
        alignItems?: import("react-native").FlexAlignType | undefined;
        alignSelf?: "auto" | import("react-native").FlexAlignType | undefined;
        aspectRatio?: number | undefined;
        borderEndWidth?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        borderStartWidth?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        bottom?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        end?: string | number | undefined;
        flex?: number | undefined;
        flexBasis?: string | number | undefined;
        flexDirection?: "row" | "column" | "row-reverse" | "column-reverse" | undefined;
        flexGrow?: number | undefined;
        flexShrink?: number | undefined;
        flexWrap?: "nowrap" | "wrap" | "wrap-reverse" | undefined;
        height?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SizeTokens | undefined;
        justifyContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | undefined;
        left?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        margin?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        marginBottom?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        marginEnd?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        marginHorizontal?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        marginLeft?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        marginRight?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        marginStart?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        marginTop?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        marginVertical?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        maxHeight?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SizeTokens | undefined;
        maxWidth?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SizeTokens | undefined;
        minHeight?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SizeTokens | undefined;
        minWidth?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SizeTokens | undefined;
        overflow?: "visible" | "hidden" | "scroll" | undefined;
        padding?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        paddingBottom?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        paddingEnd?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        paddingHorizontal?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        paddingLeft?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        paddingRight?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        paddingStart?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        paddingTop?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        paddingVertical?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        position?: "absolute" | "relative" | undefined;
        right?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        start?: string | number | undefined;
        top?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        width?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SizeTokens | undefined;
        zIndex?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").ZIndexTokens | undefined;
        direction?: "inherit" | "ltr" | "rtl" | undefined;
        shadowColor?: import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallback | import("react-native").OpaqueColorValue | undefined;
        shadowOffset?: import("@tamagui/web").ThemeValueFallback | {
            width: import("@tamagui/web").SpaceTokens;
            height: import("@tamagui/web").SpaceTokens;
        } | {
            width: number;
            height: number;
        } | undefined;
        shadowOpacity?: number | undefined;
        shadowRadius?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SizeTokens | undefined;
        transform?: (import("react-native").PerpectiveTransform | import("react-native").RotateTransform | import("react-native").RotateXTransform | import("react-native").RotateYTransform | import("react-native").RotateZTransform | import("react-native").ScaleTransform | import("react-native").ScaleXTransform | import("react-native").ScaleYTransform | import("react-native").TranslateXTransform | import("react-native").TranslateYTransform | import("react-native").SkewXTransform | import("react-native").SkewYTransform | import("react-native").MatrixTransform)[] | undefined;
        transformMatrix?: number[] | undefined;
        rotation?: number | undefined;
        scaleX?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        scaleY?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        translateX?: number | undefined;
        translateY?: number | undefined;
        x?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        y?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        perspective?: number | undefined;
        scale?: import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        skewX?: string | undefined;
        skewY?: string | undefined;
        matrix?: number[] | undefined;
        rotate?: string | undefined;
        rotateY?: string | undefined;
        rotateX?: string | undefined;
        rotateZ?: string | undefined;
        cursor?: import("csstype").Property.Cursor | undefined;
        contain?: import("csstype").Property.Contain | undefined;
        display?: "flex" | "none" | "inherit" | "inline" | "block" | "contents" | "inline-flex" | undefined;
        gap?: import("@tamagui/web").SpaceTokens | undefined;
        gapColumn?: import("@tamagui/web").SpaceTokens | undefined;
        gapRow?: import("@tamagui/web").SpaceTokens | undefined;
        userSelect?: import("csstype").Property.UserSelect | undefined;
        outlineColor?: import("csstype").Property.OutlineColor | undefined;
        outlineStyle?: import("csstype").Property.OutlineStyle | undefined;
        outlineOffset?: import("csstype").Property.OutlineOffset<0 | (string & {})> | undefined;
        outlineWidth?: import("csstype").Property.OutlineWidth<0 | (string & {})> | undefined;
        rel?: any;
        download?: any;
        onStartShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onMoveShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onResponderEnd?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderGrant?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderReject?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderMove?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderRelease?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderStart?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onResponderTerminationRequest?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onResponderTerminate?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onStartShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        onMoveShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
        dataSet?: Record<string, string | number | null | undefined> | undefined;
        onScrollShouldSetResponder?: unknown;
        onScrollShouldSetResponderCapture?: unknown;
        onSelectionChangeShouldSetResponder?: unknown;
        onSelectionChangeShouldSetResponderCapture?: unknown;
        onLayout?: ((event: import("react-native").LayoutChangeEvent) => void) | undefined;
        href?: string | undefined;
        hrefAttrs?: {
            target?: "top" | "_blank" | "_self" | "_top" | "blank" | "self" | undefined;
            rel?: string | undefined;
            download?: boolean | undefined;
        } | undefined;
        elevation?: import("@tamagui/web").SizeTokens | undefined;
        transparent?: boolean | undefined;
        hoverTheme?: boolean | undefined;
        pressTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        circular?: boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
        fullscreen?: boolean | undefined;
        defaultStyle?: boolean | undefined;
        size?: import("@tamagui/web").SizeTokens | undefined;
        active?: boolean | undefined;
        hoverStyle?: Partial<Omit<import("react-native").ViewProps, "display" | "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("@tamagui/web").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("@tamagui/web").SizeTokens | undefined;
        } & {
            readonly backgrounded?: boolean | undefined;
            readonly radiused?: boolean | undefined;
            readonly hoverTheme?: boolean | undefined;
            readonly pressTheme?: boolean | undefined;
            readonly focusTheme?: boolean | undefined;
            readonly circular?: boolean | undefined;
            readonly padded?: boolean | undefined;
            readonly elevate?: boolean | undefined;
            readonly bordered?: number | boolean | undefined;
            readonly transparent?: boolean | undefined;
            readonly chromeless?: boolean | "all" | undefined;
        }, "disabled" | "size" | "defaultStyle" | "active"> & {
            readonly defaultStyle?: boolean | undefined;
            readonly size?: import("@tamagui/web").SizeTokens | undefined;
            readonly active?: boolean | undefined;
            readonly disabled?: boolean | undefined;
        }> | null | undefined;
        pressStyle?: Partial<Omit<import("react-native").ViewProps, "display" | "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("@tamagui/web").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("@tamagui/web").SizeTokens | undefined;
        } & {
            readonly backgrounded?: boolean | undefined;
            readonly radiused?: boolean | undefined;
            readonly hoverTheme?: boolean | undefined;
            readonly pressTheme?: boolean | undefined;
            readonly focusTheme?: boolean | undefined;
            readonly circular?: boolean | undefined;
            readonly padded?: boolean | undefined;
            readonly elevate?: boolean | undefined;
            readonly bordered?: number | boolean | undefined;
            readonly transparent?: boolean | undefined;
            readonly chromeless?: boolean | "all" | undefined;
        }, "disabled" | "size" | "defaultStyle" | "active"> & {
            readonly defaultStyle?: boolean | undefined;
            readonly size?: import("@tamagui/web").SizeTokens | undefined;
            readonly active?: boolean | undefined;
            readonly disabled?: boolean | undefined;
        }> | null | undefined;
        focusStyle?: Partial<Omit<import("react-native").ViewProps, "display" | "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("@tamagui/web").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("@tamagui/web").SizeTokens | undefined;
        } & {
            readonly backgrounded?: boolean | undefined;
            readonly radiused?: boolean | undefined;
            readonly hoverTheme?: boolean | undefined;
            readonly pressTheme?: boolean | undefined;
            readonly focusTheme?: boolean | undefined;
            readonly circular?: boolean | undefined;
            readonly padded?: boolean | undefined;
            readonly elevate?: boolean | undefined;
            readonly bordered?: number | boolean | undefined;
            readonly transparent?: boolean | undefined;
            readonly chromeless?: boolean | "all" | undefined;
        }, "disabled" | "size" | "defaultStyle" | "active"> & {
            readonly defaultStyle?: boolean | undefined;
            readonly size?: import("@tamagui/web").SizeTokens | undefined;
            readonly active?: boolean | undefined;
            readonly disabled?: boolean | undefined;
        }> | null | undefined;
        exitStyle?: Partial<Omit<import("react-native").ViewProps, "display" | "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("@tamagui/web").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("@tamagui/web").SizeTokens | undefined;
        } & {
            readonly backgrounded?: boolean | undefined;
            readonly radiused?: boolean | undefined;
            readonly hoverTheme?: boolean | undefined;
            readonly pressTheme?: boolean | undefined;
            readonly focusTheme?: boolean | undefined;
            readonly circular?: boolean | undefined;
            readonly padded?: boolean | undefined;
            readonly elevate?: boolean | undefined;
            readonly bordered?: number | boolean | undefined;
            readonly transparent?: boolean | undefined;
            readonly chromeless?: boolean | "all" | undefined;
        }, "disabled" | "size" | "defaultStyle" | "active"> & {
            readonly defaultStyle?: boolean | undefined;
            readonly size?: import("@tamagui/web").SizeTokens | undefined;
            readonly active?: boolean | undefined;
            readonly disabled?: boolean | undefined;
        }> | null | undefined;
        enterStyle?: Partial<Omit<import("react-native").ViewProps, "display" | "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("@tamagui/web").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("@tamagui/web").SizeTokens | undefined;
        } & {
            readonly backgrounded?: boolean | undefined;
            readonly radiused?: boolean | undefined;
            readonly hoverTheme?: boolean | undefined;
            readonly pressTheme?: boolean | undefined;
            readonly focusTheme?: boolean | undefined;
            readonly circular?: boolean | undefined;
            readonly padded?: boolean | undefined;
            readonly elevate?: boolean | undefined;
            readonly bordered?: number | boolean | undefined;
            readonly transparent?: boolean | undefined;
            readonly chromeless?: boolean | "all" | undefined;
        }, "disabled" | "size" | "defaultStyle" | "active"> & {
            readonly defaultStyle?: boolean | undefined;
            readonly size?: import("@tamagui/web").SizeTokens | undefined;
            readonly active?: boolean | undefined;
            readonly disabled?: boolean | undefined;
        }> | null | undefined;
        themeInverse?: boolean | undefined;
        themeReset?: boolean | undefined;
        /**
         *
         */
        unstyled?: boolean | undefined;
    };
};
export {};
//# sourceMappingURL=Button.d.ts.map