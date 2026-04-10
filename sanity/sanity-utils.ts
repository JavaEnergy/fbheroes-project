import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-01-01",
  useCdn: false,
});

export async function getHomePage(lang: string): Promise<any> {
  return client.fetch(
    groq`*[_type == "home-page"][0]{
      _id,
      hero {
        "title": title.${lang},
        "description": description.${lang},
        "image": image.asset->url
      },
      stats[] {
        number,
        "label": label.${lang}
      },
      realitat {
        "title": title.${lang},
        "description": description.${lang},
        "image": image.asset->url
      },
      partnerschaften[] {
        "title": title.${lang},
        "description": description.${lang},
        "image": image.asset->url,
        link
      },
      dividerImages {
        "leftImage": leftImage.asset->url,
        "rightImage": rightImage.asset->url
      },
      finalCards[] {
        "title": title.${lang},
        "description": description.${lang},
        "image": image.asset->url
      }
    }`,
    { lang },
  );
}

export async function getServicesPage(lang: string): Promise<any> {
  return client.fetch(
    groq`*[_type == "services-page"][0]{
      _id,
      hero {
        "subtitle": subtitle.${lang},
        "title": title.${lang},
        "description": description.${lang},
        "image": image.asset->url
      },
      overview {
        cards[] {
          "title": title.${lang},
          "description": description.${lang},
          "image": image.asset->url
        }
      }
    }`,
    { lang },
  );
}
