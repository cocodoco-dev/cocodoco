import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",

        // 불필요한 페이지 크롤링 방지
        disallow: [
          "/api/",
          "/_next/",
        ],
      },
    ],

    sitemap: "https://www.cocodoco.fun/sitemap.xml",

    // 선택: 크롤러 기본 호스트 지정
    host: "https://www.cocodoco.fun",
  };
}