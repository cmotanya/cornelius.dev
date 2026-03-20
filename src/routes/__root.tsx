import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

import appCss from "../styles.css?url";
import { META_DATA } from "data/meta";
import { FONT_LINKS } from "data/fonts";

export const Route = createRootRoute({
  head: () => ({
    meta: META_DATA,
    links: [
      ...FONT_LINKS,
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />

        <Scripts />
      </body>
    </html>
  );
}
