"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="h-full flex flex-col space-y-4 items-center justify-center text-muted-foreground">
      <h1 className="text-4xl">Shoot!</h1>
      <h2 className="text-2xl">Well, this is unexpected...</h2>
      <p>Error code: 500</p>
      <p>
        An error occurred and we&apos;re working to fix the problem! We&apos;ll
        be up and running shortly.
      </p>
      <p>
        If you want to report a bug, please contact our{" "}
        <Link href="/contact" className="text-blue-500">
          Support Team
        </Link>{" "}
        and let us know what went wrong.
      </p>
      <Button variant="secondary" asChild>
        <Link href="/">Go back home</Link>
      </Button>
    </div>
  );
};

export default ErrorPage;
