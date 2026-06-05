"use client";

import dynamic from "next/dynamic";

const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  ssr: false,
  loading: () => null,
});

const Connect = dynamic(() => import("@/components/Connect"), {
  ssr: false,
  loading: () => null,
});

const Blog = dynamic(() => import("@/components/Blog"), {
  ssr: false,
  loading: () => null,
});

const FooterAnimate = dynamic(() => import("@/components/FooterAnimate"), {
  ssr: false,
  loading: () => null,
});

export function LazyPageSections() {
  return (
    <>
      <Testimonials />
      <Connect />
      <Blog />
    </>
  );
}

export function LazyFooterAnimation() {
  return <FooterAnimate />;
}