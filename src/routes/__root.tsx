import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { NotFoundComponent } from "../components/not-found";
import { ErrorComponent } from "../components/error-boundary";
import { RootShell } from "../components/root-shell";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Nexon" },
      { name: "description", content: "Nexon Group impulsa el crecimiento estratégico de empresas y startups mediante gestión comercial, desarrollo de negocios y marketing orientado a resultados." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Nexon" },
      { property: "og:description", content: "Nexon Group impulsa el crecimiento estratégico de empresas y startups mediante gestión comercial, desarrollo de negocios y marketing orientado a resultados." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Nexon" },
      { name: "twitter:description", content: "Nexon Group impulsa el crecimiento estratégico de empresas y startups mediante gestión comercial, desarrollo de negocios y marketing orientado a resultados." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/54aqa1Od0TVeiOUZjtl9VCGV7Ww1/social-images/social-1781811183316-logo.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/54aqa1Od0TVeiOUZjtl9VCGV7Ww1/social-images/social-1781811183316-logo.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
