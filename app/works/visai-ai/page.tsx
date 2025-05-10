import Image from "next/image";

import WorkDetailLayout from "@/app/components/WorkDetailLayout";

import HomepageImage from "@/public/images/visai-ai/homepage.webp";
import AISolutionImage from "@/public/images/visai-ai/ai-solution.webp";
import ContentPageImage from "@/public/images/visai-ai/content.webp";

const VISAIAi = () => {
  return (
    <WorkDetailLayout>
      <div className="flex flex-col gap-6 text-white">
        <div className="font-semibold text-3xl">VISAI AI</div>
        <div className="italic text-sm">Jan, 2022</div>
        {/* tech */}
        <div className="flex flex-col gap-2">
          <div className="font-medium">Technologies Used</div>
          <ul>
            <li>
              <span className="inline font-medium">📍 Frontend: </span>
              <span>Next.js, Tailwind CSS</span>
            </li>
            <li>
              <span className="inline font-medium">📍 CMS: </span>
              <span>Strapi</span>
            </li>
          </ul>
        </div>

        {/* overview */}
        <div className="flex flex-col gap-4">
          <div className="font-medium">Overview</div>
          <p>
            Developed and maintained the company’s website, showcasing key
            sections such as products, vision, and leading members. Implemented
            server-side rendering (SSR) to dynamically fetch and display company
            news and blogs using Strapi CMS.
          </p>
        </div>

        {/* key responsibility */}
        <div className="flex flex-col gap-4">
          <div className="font-medium">Key Responsibilities</div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="w-fit flex flex-col gap-2 mx-auto">
                <Image
                  src={HomepageImage}
                  className="h-[500px] w-auto object-contain rounded-md"
                  alt="VISAI AI homepage"
                />
                <p className="text-xs text-gray-50 text-center">
                  VISAI.ai Homepage
                </p>
              </div>
              <p>
                💪 Solely responsible for the end-to-end development of the
                entire website, working with designer team, implementing
                responsive layouts for seamless viewing on desktops, tablets,
                and mobile devices.
              </p>
              <p>
                💪 Applied performance optimization techniques, including lazy
                loading, code splitting, and caching to maintain fast loading
                times.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="w-fit flex flex-col gap-2 mx-auto">
                <Image
                  src={ContentPageImage}
                  className="h-[500px] w-auto object-contain rounded-md"
                  alt="VISAI AI content page"
                />
                <p className="text-xs text-gray-50 text-center">Content page</p>
              </div>
              <p>
                💪 Integrated Strapi CMS, enabling non-technical admin to update
                content independently for news and blogs content. pages.
              </p>
              <p>
                💪 Integrated Google Analytics API to fetch data on
                top-performing blog and news pages, displaying them dynamically
                on the website based on real-time user engagement metrics.
              </p>
              <p>
                💪 Used Next.js for server-side rendering of news and blog
                content, improving SEO and load time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </WorkDetailLayout>
  );
};

export default VISAIAi;
