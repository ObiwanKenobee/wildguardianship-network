
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface DataCardProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  content: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

export function DataCard({ 
  title, 
  description, 
  content, 
  footer, 
  className,
  contentClassName
}: DataCardProps) {
  return (
    <Card className={cn("shadow-sm hover:shadow transition-shadow", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className={cn("pt-0", contentClassName)}>{content}</CardContent>
      {footer && <CardFooter className="pt-0 border-t">{footer}</CardFooter>}
    </Card>
  );
}
