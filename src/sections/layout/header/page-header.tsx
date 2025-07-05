interface PageHeaderProps {
  title?: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  if (!title && !subtitle) return null;

  return (
    <div className="container mx-auto px-4 py-12 text-center">
      {title && (
        <h1 className="text-4xl font-bold text-foreground mb-4">{title}</h1>
      )}
      {subtitle && (
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
