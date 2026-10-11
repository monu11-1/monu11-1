export function DemoWatermark({ label = "DEMO" }: { label?: string }) {
  return (
    <div className="demo-watermark" aria-hidden="true">
      {label}
    </div>
  );
}
