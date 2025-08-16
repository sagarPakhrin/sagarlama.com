export const DefaultLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto max-w-3xl py-12 px-8 bg-background text-foreground">
    {children}
  </div>
);
