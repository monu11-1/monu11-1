import { PortalPlaceholder } from "@/components/portal/PortalPlaceholder";

export function makePlaceholderPage(
  title: string,
  route: string,
  summary: string,
) {
  return function PlaceholderRoutePage() {
    return (
      <PortalPlaceholder title={title} route={route} summary={summary} />
    );
  };
}
