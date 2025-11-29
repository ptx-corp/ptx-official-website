import { getAllProjects } from "@/lib/api";
import { NextResponse } from "next/server";

export const dynamic = 'force-static';

export async function GET() {
    const projects = await getAllProjects();
    const featuredProjects = projects.slice(0, 3);
    return NextResponse.json(featuredProjects);
}
