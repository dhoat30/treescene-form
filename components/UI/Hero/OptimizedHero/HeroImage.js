import { getPageData } from "@/utlis/fetchData";
import Image from "next/image";

export default async function HeroImage({ slug }) {
    const data = await getPageData(slug);
    if (!data.length) return null
    const heroData = {

        desktopImage: data[0].acf.hero_section.graphic.desktop,
        mobileImage: data[0].acf.hero_section.graphic.mobile,

    };
    return (
        <div className="image-wrapper" style={{
            width: "100%", position: "relative", paddingBottom: `${(heroData.desktopImage.height / heroData.desktopImage.width) * 100
                }%`,
        }}>
            <Image
                src={heroData.desktopImage.url}
                alt={heroData.desktopImage.alt ? heroData.desktopImage.alt : heroData.title}
                fill
                priority={true}
                sizes="(max-width: 1200px) 100vw, 50vw"
            />
        </div>

    )
}