import { getAllProjects } from "../lib/api";
import HomeContent from "../components/HomeContent";

export default async function Home() {
  const projects = await getAllProjects();
  return <HomeContent projects={projects} />;
}
