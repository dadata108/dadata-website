import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Dadata | Data Governance, Databricks & Collibra', description: 'Enterprise data governance connected with hands-on Databricks, Collibra, lineage, data quality, and integration expertise.', openGraph: { title: 'Dadata | Trusted Data. Governed Platforms.', description: 'Governance strategy connected with practical engineering.', type: 'website' } };
export default function Layout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
