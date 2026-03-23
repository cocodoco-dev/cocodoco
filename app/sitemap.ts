import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.cocodoco.fun";

  const quizzes = [
    "attachment-style",
    "attractive",
    "aura",
    "brain-type",
    "comfort-type",
    "emotional-age",
    "energy",
    "everyday-vibe",
    "friend-type",
    "hidden-personality",
    "hidden-talent",
    "inner-animal",
    "life-energy",
    "love-language",
    "love-style",
    "mind-type",
    "person-to-others",
    "personality-color",
    "romantic-energy",
    "social-personality",
    "soul-aesthetic",
    "soul-vibe",
    "true-strength",
  ];

  const quizPages = quizzes.map((slug) => ({
    url: `${baseUrl}/quiz/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const resultPages = quizzes.map((slug) => ({
    url: `${baseUrl}/result/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    // 홈
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },

    // 고정 페이지
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },

    // 퀴즈 페이지
    ...quizPages,

    // 결과 페이지
    ...resultPages,
  ];
}