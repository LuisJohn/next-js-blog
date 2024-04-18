import { fullBlog } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";

export const revalidate = 30;


async function getData(slug: string){
    const query = `
    *[_type == "blog" && slug.current == '${slug}']{
        "currentSlug": slug.current,
          title,
          content,
          titleImage
      }[0]
    `

    const data = await client.fetch(query);
    return data;
}

export default async function BlogArticle({params}: {params: {slug:string}}){

    const data: fullBlog = await getData(params.slug);
    return (
        <div className="max-w-2xl mx-auto px-4 py-5">
            <div className="mt-8">
                <h1>
                    <span className="block text-base text-center text-primary font-semibold tracking-wide uppercaser">Luis John | Blog</span>
                    <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">{data.title}</span>
                </h1>
                
                <Image
                    priority
                    className="mt-4 rounded-lg shadow-lg border"
                    src={urlFor(data.titleImage).url()}
                    width={800}
                    height={800}
                    alt="Blog Image"
                />
                <div className="mt-16">
                    <article className="prose prose-blue prose-lg lg:prose-xl dark:prose-invert prose-headings:underline">
                        <PortableText value={data.content}/>
                    </article>
                </div>
            </div>
        </div>
    );
}