import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoisted style tag",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script type="module">
          {`
import { initPerfume } from 'https://unpkg.com/perfume.js@9.4.0/dist/perfume.esm.min.js';

initPerfume({
  analyticsTracker: options => {
    const {
      attribution,
      metricName,
      data,
      navigatorInformation,
      rating,
      navigationType,
    } = options;
    console.log(metricName, { duration: data });
  },
});
`}
        </script>
      </body>
    </html>
  );
}
