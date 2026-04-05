import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<any[]> {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    apiVersion: "2024-01-01", 
    useCdn: false,  
  });

 return client.fetch(
        groq`*[_type == "fb-heroes-sanity-project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content,
        }`
    );
}