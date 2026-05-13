"use client";

import { useEffect } from "react";
import styled from "styled-components";

const SORO_SRC =
  "https://app.trysoro.com/api/embed/3f236793-b974-47b9-951a-99eabf6c10eb";

export default function BlogPage() {
  useEffect(() => {
    // Remove any previously injected Soro script so it re-runs on every mount
    // (client-side navigation and language switches reuse the cached script otherwise)
    const existing = document.querySelector(`script[src="${SORO_SRC}"]`);
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.src = SORO_SRC;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <PageWrapper>
      <div id="soro-blog" />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  padding-top: 100px;
  min-height: 100vh;
  width: 100%;
`;
