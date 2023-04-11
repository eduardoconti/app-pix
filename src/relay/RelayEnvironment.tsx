import * as React from "react";
import { RelayEnvironmentProvider } from "react-relay";
import { environment } from "./environment";

export default function RelayEnvironment({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {

  return (
    <RelayEnvironmentProvider environment={environment}>
      <React.Suspense fallback={<h1>Loading profile...</h1>}>
        {children}
      </React.Suspense>
    </RelayEnvironmentProvider>
  );
}
