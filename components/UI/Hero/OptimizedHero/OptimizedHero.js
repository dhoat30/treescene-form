import { Suspense } from "react";
import Skeleton from "../../Skeleton/Skeleton";
import { getPageData } from "@/utlis/fetchData";
import HeroContent from "./HeroContent";
import styles from './Hero.module.css'
import HeroImage from "./HeroImage";
export default async function OptimizedHero({ slug }) {
    const data = await getPageData(slug);
    if (!data.length) return null
    const heroData = {
        subtitle: data[0].acf.hero_section.subtitle,
        title: data[0].acf.hero_section.title,
        description: data[0].acf.hero_section.description,
        desktopImage: data[0].acf.hero_section.graphic.desktop,
        mobileImage: data[0].acf.hero_section.graphic.mobile,
        ctaLabel: data[0].acf.hero_section.cta.label,
        ctaLink: data[0].acf.hero_section.cta.url,
    };
    return (
        <>
            <section className={`${styles.heroSection}`}>
                <div className={`${styles.container} max-width-xl`}>
                    <HeroContent title={heroData.title} subtitle={heroData.subtitle} description={heroData.description} ctaLabel={heroData.ctaLabel} ctaLink={heroData.ctaLink} />
                    <Suspense fallback={<Skeleton
                        variant="dark"
                        height={`${(heroData.desktopImage.height / heroData.desktopImage.width) * 100
                            }%`} />}>
                        <HeroImage slug={slug} />
                    </Suspense>
                </div>

            </section>


        </>

    )
}