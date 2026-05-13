"use client";

import Script from "next/script";
import styled from "styled-components";

export default function BlogPage() {
  return (
    <PageWrapper>
      <div id="soro-blog" />
      <Script
        src="https://app.trysoro.com/api/embed/3f236793-b974-47b9-951a-99eabf6c10eb"
        strategy="afterInteractive"
      />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  padding-top: 100px;
  min-height: 100vh;
  width: 100%;
`;
