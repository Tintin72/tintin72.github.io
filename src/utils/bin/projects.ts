import { getProjects } from "../../api";

interface Project {
  title: string;
  url: string;
}

const martinProjects: Project[] = [
  {
    title: "PnP Radius",
    url: "https://pnpradius.com",
  },
  {
    title: "Wazifi",
    url: "https://wazifi.co",
  },
  {
    title: "Tiny Pesa",
    url: "https://tinypesa.com",
  },
  {
    title: "Priv Pay",
    url: "https://priv-pay.com",
  },
  {
    title: "IssaMac",
    url: "http://issamac.com",
  },
];

export const projects = async (args: string[]): Promise<string> => {
  const projects = await getProjects();

  return (
    martinProjects
      // .filter((repo) => !repo.fork)
      .map(
        (repo) =>
          `${repo.title} - <a class="text-light-blue dark:text-dark-blue underline" href="${repo.url}" target="_blank">${repo.url}</a>`
        // `[${repo.title}](${repo.url})`,
      )
      .join("\n")
  );
};
