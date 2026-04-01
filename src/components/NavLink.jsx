import { cva } from 'class-variance-authority';
import Text from './Text';
import Themes from './Themes';
import { Link, useLocation } from 'react-router-dom';

// eslint-disable-next-line react-refresh/only-export-components
export const navLinkVariants = cva(
  'flex items-center justify-between w-full py-1.5 rounded transition-colors cursor-pointer text-sm',
  {
    variants: {
      active: {
        true: 'text-primary',
        false: ' text-secundary hover:text-primary',
      },
    },
    defaultVariants: { active: false },
  },
);

export default function NavLink({
  // eslint-disable-next-line no-unused-vars
  active,
  themes,
  className,
  children,
  to,
  ...props
}) {
  const location = useLocation();
  return (
    <Link
      className={navLinkVariants({
        active: location.pathname === to,
        className,
      })}
      {...props}
      to={to}
    >
      <Text as="span" variant="inherit">
        {children}
      </Text>
      <Themes>{themes}</Themes>
    </Link>
  );
}
