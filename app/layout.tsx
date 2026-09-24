import "./globals.css";
import type { Metadata } from "next";
export const metadata:Metadata={title:"Lola England | Girls' T-Shirts",description:"Fresh, playful and comfortable T-shirts for girls."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}