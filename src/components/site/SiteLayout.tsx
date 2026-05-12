import { Suspense, useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styles from '../../styles/site.module.css';
import '../../styles/site.css';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import { RouteSkeleton } from './RouteSkeleton';

export function SiteLayout() {
  const { pathname, hash } = useLocation();
  const showPageBottomSpacer = pathname !== '/';

  // SPA navigations keep window scroll by default — reset so in-app links (e.g. case covers)
  // land at the top of the new page. Skip when a hash is present so routes like /about#chronology
  // can scroll to their anchor (handled on the destination page).
  useLayoutEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return (
    <div className={styles.shell}>
      <div className={styles.page}>
        <SiteHeader />
        <main className={styles.mainColumn}>
          <Suspense fallback={<RouteSkeleton />}>
            <div key={pathname} className={styles.pageEnter}>
              <Outlet />
            </div>
          </Suspense>
        </main>
        {showPageBottomSpacer && <div className={styles.pageBottomSpacer} aria-hidden="true" />}
        <SiteFooter />
      </div>
    </div>
  );
}
