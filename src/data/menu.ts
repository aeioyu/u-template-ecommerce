import {
  AnnotationIcon,
  CalendarIcon,
  ChartBarIcon,
  DesktopComputerIcon,
  DocumentDuplicateIcon,
  DocumentTextIcon,
  ShoppingBagIcon,
  TrendingUpIcon,
} from '@heroicons/react/outline';

export const menus = [
  {
    name: 'DASHBOARD',
    group: [
      {
        name: 'Default',
        icon: ChartBarIcon,
        current: true,
        href: '/dashboards',
      },
      {
        name: 'Analytic',
        icon: TrendingUpIcon,
        href: '/dashboards/analytic',
      },
      {
        name: 'Sales',
        icon: ShoppingBagIcon,
        href: '/dashboards/sales',
      },
    ],
  },
  {
    name: 'PAGES',
    group: [],
  },
  {
    name: 'Apps',
    icon: DesktopComputerIcon,
    children: [
      { name: 'Calendar', href: '/apps/calendar' },
      { name: 'Chat', href: '/apps/chat' },
      { name: 'Mail', href: '/apps/mail' },
    ],
  },
  {
    name: 'List Pages',
    icon: DesktopComputerIcon,
    children: [
      { name: 'Table', href: '/list-pages/table' },
      { name: 'Grid', href: '/list-pages/grid' },
    ],
  },
  {
    name: 'Ecommerce',
    icon: DocumentDuplicateIcon,
    children: [
      { name: 'Product List', href: '/ecommerce/product-list' },
      { name: 'Add Product', href: '/ecommerce/add-product' },
      { name: 'Orders', href: '/ecommerce/orders' },
    ],
  },
  {
    name: 'Authentication',
    icon: CalendarIcon,
    children: [
      { name: 'Sign In', href: '/authentication/signin' },
      { name: 'Sign Up', href: '/authentication/signup' },
      { name: 'Forgot Password', href: '/authentication/forgot-password' },
      { name: 'Email Validation', href: '/authentication/email-validation' },
    ],
  },
  {
    name: 'Error',
    icon: CalendarIcon,
    children: [
      { name: 'Page Notfound', href: '/error/page-notfound' },
      { name: 'Service Maintenance', href: '/error/service-maintenance' },
    ],
  },
  {
    name: 'Documents',
    icon: DocumentTextIcon,
    href: '/documents',
  },
  {
    name: 'Change Logs',
    icon: AnnotationIcon,
    href: '/documents',
  },
];
