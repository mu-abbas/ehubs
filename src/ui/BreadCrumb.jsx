'use client';
import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/breadcrumbs';
import { usePathname } from 'next/navigation';

export default function BreadCrumb() {
  const pathname = usePathname();
  const paths = pathname.split('/');

  return (
    <Breadcrumbs>
      <BreadcrumbItem className="!cursor-default">Home</BreadcrumbItem>
      {paths.map(path =>
        path ? (
          <BreadcrumbItem key={path} className="!cursor-default">
            <span style={{textTransform: 'capitalize'}}>{path}</span>
          </BreadcrumbItem>
        ) : (
          ''
        )
      )}
    </Breadcrumbs>
  );
}
