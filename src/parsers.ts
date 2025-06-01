import type { Language } from "./i18n";

export function parseExperience<
  C extends string,
  O extends object,
  L extends Language,
>(
  language: L,
  experience: { [key in C]: Record<Language, O> },
  companies?: C[],
) {
  const result = {} as Record<C, O>;
  for (const company of companies ?? (Object.keys(experience) as C[])) {
    result[company] = experience[company][language];
  }
  return result;
}

export function parseProjects<
  P extends string,
  O extends object,
  L extends Language,
>(
  language: L,
  projects: { [key in P]: Record<Language, O> },
  projectIds?: P[],
) {
  const result = {} as Record<P, O>;
  for (const projectId of projectIds ?? (Object.keys(projects) as P[])) {
    result[projectId] = projects[projectId][language];
  }
  return result;
}
