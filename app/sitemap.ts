import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.cocodoco.fun";

  const quizzes = [
    "archetype-at-heart",
    "attachment-style",
    "attractive",
    "aura",
    "brain-type",
    "comfort-type",
    "emotional-age",
    "energy",
    "era-matches-your-soul",
    "everyday-vibe",
    "first-impression",
    "friend-type",
    "hidden-personality",
    "hidden-talent",
    "inner-animal",
    "introvert-type",
    "kind-of-pretty",
    "life-energy",
    "love-language",
    "love-style",
    "main-character",
    "mind-type",
    "online-vibe",
    "party-energy",
    "person-to-others",
    "personality-color",
    "romantic-energy",
    "secret-green-flag",
    "shadow-side",
    "social-personality",
    "soft-skill-superpower",
    "soul-aesthetic",
    "soul-vibe",
    "true-strength",
    "what-kind-of-muse-are-you",
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
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
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
    ...quizPages,
    ...resultPages,
  ];
}