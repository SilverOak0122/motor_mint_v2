import { CheckCircle, Circle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  verified?: boolean;
  type?: 'success' | 'neutral' | 'warning';
}

interface TimelineProps {
  events: TimelineEvent[];
  title?: string;
}

const Timeline = ({ events, title }: TimelineProps) => {
  const getIcon = (type: TimelineEvent['type'], verified?: boolean) => {
    if (verified === false) return <AlertCircle className="w-4 h-4 text-neon-red" />;
    switch (type) {
      case 'success':
        return <CheckCircle className="w-4 h-4 text-neon-green" />;
      case 'warning':
        return <AlertCircle className="w-4 h-4 text-neon-red" />;
      default:
        return <Circle className="w-4 h-4 text-primary" />;
    }
  };

  return (
    <div className="space-y-4">
      {title && (
        <h3 className="font-display text-lg font-semibold mb-4">{title}</h3>
      )}
      
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent" />

        <div className="space-y-6">
          {events.map((event, index) => (
            <div 
              key={index}
              className={cn(
                "relative pl-8 opacity-0 animate-slide-up",
              )}
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              {/* Icon */}
              <div className="absolute left-0 top-0.5 w-4 h-4 flex items-center justify-center bg-background">
                {getIcon(event.type, event.verified)}
              </div>

              {/* Content */}
              <div className="glass rounded-lg p-4 hover:border-primary/30 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-muted-foreground">
                    {event.date}
                  </span>
                  {event.verified !== undefined && (
                    <span className={cn(
                      "text-xs px-2 py-0.5 rounded-full",
                      event.verified 
                        ? "bg-neon-green/10 text-neon-green" 
                        : "bg-neon-red/10 text-neon-red"
                    )}>
                      {event.verified ? 'Verified' : 'Unverified'}
                    </span>
                  )}
                </div>
                <h4 className="font-medium mb-1">{event.title}</h4>
                <p className="text-sm text-muted-foreground">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
