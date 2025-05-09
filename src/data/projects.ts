export interface ProjectPost {
  url: string
  frontmatter: {
    title: string
    description: string
    pubDate: string
    languages: string[]
    image: {
      url: string
      alt: string
    }
  }
}

export const projectPosts: ProjectPost[] = [
  {
    url: '/projects/topographic-survey-residential',
    frontmatter: {
      title: 'Topographic Survey for Residential Complex',
      description:
        'Complete topographic survey for a new residential development in Caraz, including contour mapping, boundary determination, and infrastructure planning.',
      pubDate: '2024-02-15',
      languages: ['autocad', 'excel'],
      image: {
        url: '/images/project1.jpeg',
        alt: 'Topographic survey map showing elevation contours and property boundaries'
      }
    }
  },
  {
    url: '/projects/road-construction-survey',
    frontmatter: {
      title: 'Highway Extension Survey',
      description:
        'Comprehensive survey for a 15km highway extension project, including grade calculations, curve layout, and earthwork volumes estimation.',
      pubDate: '2023-11-23',
      languages: ['autocad', 'excel', 'photoshop'],
      image: {
        url: '/images/project2.jpeg',
        alt: 'Road construction survey with alignment stakes and elevation markers'
      }
    }
  },
  {
    url: '/projects/reservoir-mapping',
    frontmatter: {
      title: 'Water Reservoir Capacity Analysis',
      description:
        'Detailed bathymetric and perimeter survey of a municipal water reservoir, including capacity calculations and 3D modeling for future planning.',
      pubDate: '2023-08-05',
      languages: ['autocad', 'illustrator'],
      image: {
        url: '/images/project3.jpeg',
        alt: '3D model of water reservoir with depth contours and capacity analysis'
      }
    }
  },
  {
    url: '/projects/agricultural-land-division',
    frontmatter: {
      title: 'Agricultural Land Division Project',
      description:
        'Survey and subdivision of a 50-hectare agricultural property into smaller parcels, including irrigation planning and access road layout.',
      pubDate: '2023-05-12',
      languages: ['autocad', 'excel', 'photoshop'],
      image: {
        url: '/images/heroindex.jpeg',
        alt: 'Agricultural land division map showing parcels, irrigation systems, and access roads'
      }
    }
  }
]
