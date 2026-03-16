import { cva } from "class-variance-authority";
import Text from "./Text";
import Themes from "./Themes";

export const navLinkVariants = cva(
  "flex items-center justify-between w-full py-1.5 rounded transition-colors cursor-pointer text-sm",
  {
    variants: {
      active: {
        true: "text-primary",
        false: " text-secundary hover:text-primary",
      },
    },
    defaultVariants: { active: false },
  },
);

export default function NavLink({
  as: Component = "a",
  active,
  themes,
  className,
  children,
  ...props
}) {
  return (
    <Component
      className={navLinkVariants({
        active: location.pathname === "/" + children,
        className,
      })}
      {...props}
    >
      <Text as="span" variant="inherit">
        {children}
      </Text>
      <Themes>{themes}</Themes>
    </Component>
  );
}
