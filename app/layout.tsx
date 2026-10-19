import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Dadata | Data Governance, Databricks & Collibra', description: 'Enterprise data governance connected with hands-on Databricks, Collibra, lineage, data quality, and integration expertise.', openGraph: { title: 'Dadata | Trusted Data. Governed Platforms.', description: 'Governance strategy connected with practical engineering.', type: 'website' } };
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '/dadata-website';
export default function Layout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body><style>{`.nav .brand,footer .brand{display:block;flex-shrink:0;width:110px;height:110px;font-size:0;letter-spacing:0;background:url('${basePath}/dadata-logo.svg') center/contain no-repeat}.nav .brand span,footer .brand span{font-size:0}.nav{padding-top:8px;padding-bottom:8px}`}</style>{children}</body></html>; }
