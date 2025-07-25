import Header from "./(components)/header";
import { HeaderProvider } from "./(contexts)/HeaderContext"; 

export default function BackButtonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <HeaderProvider>
      <div className="font-sans w-full h-full">
        <Header />
        <main className="p-4 pt-12 w-full h-full">
          {children}
        </main>
      </div>
    </HeaderProvider>
  );
}