'use client'
import { getUrl } from "@/app/database/urlMappings";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect } from 'react'

export default function RedirectPage() {
  const router = useRouter();
  const code = router.query.code;
  console.log("Code from router:", code);
  console.log("Type of Code from router:", typeof (code));

  useEffect(() => {
    const redirectToUrl = async () => {
      if (typeof code === "string") {
        const longUrl = getUrl(code);
        console.log(`Long URL for code ${code}: ${longUrl}`);

        // Check if the URL exists before redirecting
        if (longUrl) {
          window.location.assign(longUrl);
        } else {
          console.error(`Long URL not found for code ${code}`);
        }
      }
    };

    if (code) {
      redirectToUrl();
    }

  }, [code])

  return (
    <>
    </>
  )
}
