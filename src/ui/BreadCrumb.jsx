'use client';
import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/breadcrumbs';
import { usePathname } from 'next/navigation';

export default function BreadCrumb() {
  const pathname = usePathname();
  const paths = pathname.split('/');

  return (
    <Breadcrumbs>
      <BreadcrumbItem>Home</BreadcrumbItem>
      {paths.map(path =>
        path ? (
          <BreadcrumbItem key={path}>
            <span style={{textTransform: 'capitalize'}}>{path}</span>
          </BreadcrumbItem>
        ) : (
          ''
        )
      )}
    </Breadcrumbs>
  );
}
