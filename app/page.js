import GetQuotePage from "@/components/Pages/GetQuotePage/GetQuotePage"
import WebsiteInquiryPage from "@/components/Pages/WebsiteInquiryPage/WebsiteInquiryPage"
import { getPageData } from '@/utlis/fetchData'

export async function generateMetadata({ params, searchParams }, parent) {
    // fetch data
    const data = await getPageData("website-enquiry")
    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []
    if (data.length > 0) {
        const seoData = data[0].yoast_head_json
        return {
            title: "Request A Free Quote - Treescene NZ Limited",
            description: "Trust Tree Scene for Safe and Professional Tree Removal, Trimming, and Stump Grinding Services",
            metadataBase: new URL('https://form.treescene.co.nz'),
            alternates: {
                canonical: `https://form.treescene.co.nz`,
            },
            openGraph: {
                title: "Request A Free Quote - Treescene NZ Limited",
                description: "Trust Tree Scene for Safe and Professional Tree Removal, Trimming, and Stump Grinding Services",
                url: 'https://form.treescene.co.nz',
                siteName: 'Tree Scene',

                type: 'website',
            },
        }
    }

}

export default async function Page() {
    return (
        <>
            <main>
                <WebsiteInquiryPage />
            </main>
        </>

    )
}
