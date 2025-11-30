import { getPressBySlug, getPressSlugs } from "../../../lib/api";
import { notFound } from "next/navigation";
import PressDetail from "../../../components/PressDetail";

export async function generateStaticParams() {
    const slugs = getPressSlugs();
    return slugs.map(slug => ({
        slug: slug.params.slug
    }));
}

export default async function PressItemPage({ params: paramsPromise }: { params: Promise<{ slug: string }> }) {
    try {
        const params = await paramsPromise;
        const press = await getPressBySlug(params.slug);

        return <PressDetail press={press} />;
    } catch (e) {
        notFound();
    }
}
