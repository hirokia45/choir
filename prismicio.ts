import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";
import * as prismicReact from "@prismicio/react";
import sm from "./sm.json";
import Link from "next/link";

/**
 * The project's Prismic repository name.
 */
export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint);

export const linkResolver = (doc: any) => {
  switch (doc.type) {
    case "favorite":
      return `/favorites`;
    case "song":
      return `/pieces/${doc.uid}`;
    case "project":
      return `/projects/${doc.uid}`;
    case "home_page":
      return `/`;
    default:
      return `/`;
  }
};

// Update the routes array to match your project's route structure
/** @type {prismic.ClientConfig['routes']} **/
export const Router = [
  {
    type: "home_page",
    path: "/",
  },
  {
    type: "page",
    path: "/:uid",
  },
];

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param previewData
 * @param req
 * @param config {prismicNext.CreateClientConfig} - Configuration for the Prismic client.
 */

export function createClient({
  previewData,
  req,
  ...config
}: prismicNext.CreateClientConfig = {}) {
  const client = prismic.createClient(repositoryName, config);

  prismicNext.enableAutoPreviews({ client, previewData, req });

  return client;
}
