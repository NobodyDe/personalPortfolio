import { cva } from 'class-variance-authority';

// eslint-disable-next-line react-refresh/only-export-components
export const themesVariants = cva(
  'inline-flex items-center justify-center rounded font-sans text-xs font-medium border-non-interactive border',
  {
    variants: {
      variant: {
        default: 'bg-surface text-secundary',
      },
      size: {
        sm: 'h-5 w-5 text-xs',
        md: 'h-6 w-6 text-sm',
      },
    },
    defaultVariants: { variant: 'default', size: 'sm' },
  },
);

export default function Themes({
  // eslint-disable-next-line no-unused-vars
  as: Component = 'span',
  variant,
  size,
  className,
  children,
  ...props
}) {
  return (
    <Component
      className={themesVariants({ variant, size, className })}
      {...props}
    >
      {children}
    </Component>
  );
}
