export type ButtonVariant = "primary" | "secondary" | "outline";
export type ButtonSize = "small" | "medium" | "large";

export type FlexDirection = "row" | "column" | "row-reverse" | "column-reverse";
export type JustifyContent = "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
export type AlignItems = "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
export type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";

export interface IconProps {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
  color?: string;
}

