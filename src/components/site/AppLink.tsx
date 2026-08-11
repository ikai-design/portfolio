import { Link, NavLink, type LinkProps, type NavLinkProps } from 'react-router-dom';

/** In-app link with View Transitions when the browser supports them. */
export function AppLink({ viewTransition = true, ...props }: LinkProps) {
  return <Link viewTransition={viewTransition} {...props} />;
}

/** Nav link with View Transitions when the browser supports them. */
export function AppNavLink({ viewTransition = true, ...props }: NavLinkProps) {
  return <NavLink viewTransition={viewTransition} {...props} />;
}
