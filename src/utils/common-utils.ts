import type { ClassValue } from "clsx";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const mc = (...classes: ClassValue[]) => twMerge(clsx(...classes));

export const withSearchParams = (
  url: string,
  searchParams: Record<string, string | undefined>
) => {
  try {
    for (const key in searchParams) {
      if (typeof searchParams[key] === "undefined") {
        delete searchParams[key];
      }
    }

    const newSearchParams = new URLSearchParams(
      searchParams as Record<string, string>
    );

    if (url.startsWith("/")) {
      return `${url}?${newSearchParams.toString()}`;
    }

    const newUrl = new URL(url);

    newUrl.search = newSearchParams.toString();

    return url.toString();
  } catch (error) {
    throw error;
  }
};
