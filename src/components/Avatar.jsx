import { cva } from "class-variance-authority";

export const avatarVariants = cva("rounded-full object-cover", {
  variants: {
    size: {
      sm: "w-10 h-10",
      md: "w-16 h-16",
      lg: "w-20 h-20",
    },
  },
  defaultVariants: { size: "md" },
});

export default function Avatar({
  as: Component = "img",
  size,
  className,
  ...props
}) {
  return (
    <Component className={avatarVariants({ size, className })} {...props} />
  );
}
