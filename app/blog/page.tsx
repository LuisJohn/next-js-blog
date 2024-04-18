import React from 'react'
import { client, urlFor } from '../lib/sanity';
import { simpleBlogCard } from '../lib/interface';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from "next/image";

async function getData(){
    const query = 
    `
      *[_type == 'blog'] | order(_createdAt desc){
        title,
          "currentSlug": slug.current,
          smallDescription,
          titleImage,
      }
    `
    const data = await client.fetch(query);
    return data;
  }

  export const revalidate = 30; // revalidates cahch every after 30 seconds

export default async function page() {

    const data: simpleBlogCard[] = await getData();
    console.log(data);

  return (
    <div className="max-w-2xl mx-auto px-4 py-5">
      <div className="grid grid-cols-1 md:grid-cols-2  mt-5 gap-5">
      {data.map((post, idx)=>(
        <Card key={idx}>
          <Image 
            src={urlFor(post.titleImage).url()} 
            alt="image" 
            width={500} 
            height={500}
            className="rounded-t-lg h-[200px] object-cover"
          />

          <CardContent className="mt-5 cursor-pointer">
            <h3 className="text-lg text-gray-800 dark:text-gray-100 font-bold line-clamp-2">{post.title}</h3>
            <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">{post.smallDescription}</p>

            <Button asChild className="w-full mt-7">
              <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
            </Button>

          </CardContent>
        </Card>
      ))}
        
      </div>
    </div>
  )
}
