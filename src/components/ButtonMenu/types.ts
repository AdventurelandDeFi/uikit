import { ButtonProps, Scale, variants } from "../Button/types";

export type ButtonMenuItemProps = {
  isActive?: boolean;
  size?: Scale;
} & ButtonProps;

export interface ButtonMenuProps {
  variant?: typeof variants.PRIMARY | typeof variants.SUBTLE;
  activeIndex?: number;
  onClick?: (index: number) => void;
  size?: Scale;
  children: React.ReactElement[];
}
