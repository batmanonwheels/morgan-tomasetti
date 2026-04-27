export const FIELD_PHOTOS_QUERY = (
	field: string,
) => `*[_type == "field" && name == "${field}"]{
  "projects": *[_type == "project" && references(^._id)]{
    "photos": *[_type == "photo" && references(^._id)][isVisible]{
      description,
      portrait,
      "dimensions": portrait.asset->metadata.dimensions {
         width,
         height,
         aspectRatio
       }
    },
  },
}.projects[].photos[]`;

export const FIELD_VIDEOS_QUERY = (
	field: string,
) => `*[_type == "field" && name == "${field}"]{
  "projects": *[_type == "project" && references(^._id)]{
    "videos": *[_type == "video" && references(^._id)][isVisible]{
         link, description
      },
  },
}.projects[].videos[]`;

export const FIELD_VIDEOS_THUMBNAIL_QUERY = (
	field: string,
) => `*[_type == "field" && name == "${field}"]{
  "projects": *[_type == "project" && references(^._id)]{
    "videos": *[_type == "video" && references(^._id) && description match "OLLY"][isVisible]{
         link, description
      },
  },
}.projects[].videos[]`;

// FIELD_VIDEOS_THUMBNAIL_QUERY - Need higher resolution thumbnails for non-youtube videos + more image variety

// export const FIELD_VIDEOS_THUMBNAIL_QUERY = (
// 	field: string,
// ) => `*[_type == "field" && name == "${field}"]{
//   "projects": *[_type == "project" && references(^._id)]{
//     "videos": *[_type == "video" && references(^._id) && link match "https://www.youtube.com*"][isVisible]{
//          link, description
//       },
//   },
// }.projects[].videos[]`;

export const PROJECT_LIST_QUERY = (
	field: string,
) => `*[_type=="field" && name=="${field}"][0]{
name,
  "projects": *[_type=='project' && references(^._id)]{
      name,
      slug,
		"photos": *[_type=='photo' && references(^._id)][isVisible]{
      description,
      },
      "videos": *[_type == "video" && references(^._id)][isVisible]{
      description,
      },
	   },
      }`;

export const PROJECT_QUERY = (project: string) =>
	`*[_type=="project" && slug.current =="${project}"][0]{
		slug,
      name,
      "photos":  *[_type=='photo' && references(^._id)][isVisible]{
      description,
      portrait,
      "dimensions": portrait.asset->metadata.dimensions {
         width,
         height,
         aspectRatio
         },
      },
      "videos": *[_type == "video" && references(^._id)][isVisible]{
         link, description
      },
   }`;

export const PHOTOS_QUERY = () => `*[_type=="photo"]{
   ...,
    "dimensions": portrait.asset->metadata.dimensions {
         width,
         height,
         aspectRatio
       }
}`;

export const COVER_PHOTOS_QUERY = () => `*[_type=="photo"][isCoverWorthy]{
   ...,
    "dimensions": portrait.asset->metadata.dimensions {
         width,
         height,
         aspectRatio
       }
}`;
