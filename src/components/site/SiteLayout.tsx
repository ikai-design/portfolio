import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styles from '../../styles/site.module.css';
import '../../styles/site.css';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import { RouteSkeleton } from './RouteSkeleton';

export function SiteLayout() {
  const { pathname } = useLocation();

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
        <SiteFooter />
      </div>
    </div>
  );
}
