import { getAllPress } from "@/lib/api";
import { Navigation } from "@/components/Navigation";
import { PressContent } from "@/components/PressContent";

export const metadata = {
    title: 'Press & Activities - PT X',
    description: 'Latest news, events, and milestones from PT X.',
};

export default async function PressPage() {
    const press = await getAllPress();

    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <PressContent press={press} />
        </div>
    );
}
