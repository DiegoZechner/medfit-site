interface Step {
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: Step[];
}

export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {steps.map((step, index) => (
        <div key={index} className="relative flex flex-col items-center text-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-aqua text-lg font-bold text-white shadow-sm">
            {index + 1}
          </div>
          <h3 className="mb-2 text-lg font-semibold text-ink">{step.title}</h3>
          <p className="text-sm text-muted">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
