import { getAllProjects, getAllPress } from "../lib/api";
import HomeContent from "../components/HomeContent";

export default async function Home() {
  const projects = await getAllProjects();
  const press = await getAllPress();
  return <HomeContent projects={projects} press={press} />;
}
